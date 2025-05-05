import {
  deriveMnemonic,
  deriveMnemonicToSeed,
  deriveSolanaPrivateKey,
  deriveSolanaPublicKey,
} from "@/lib/wallet";
import { useEffect, useState } from "preact/hooks";
import TypographySmall from "../typography/TypographySmall";
import { TypographyH4 } from "../typography";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useUserDispatch } from "@/context/GlobalContentAPI";
import { setDataInLocalStorage } from "@/lib/utils";
import { STORAGE_KEY } from "@/lib/data";

const GeneratePhrase = () => {
  const [newPhrases, setNewPhrases] = useState<string | null>(null);
  const dispatch = useUserDispatch();

  const exec = async () => {
    const p = deriveMnemonic();
    setNewPhrases(p);
    const seed = await deriveMnemonicToSeed(p);

    const pvtKey = deriveSolanaPrivateKey(seed, 0);
    // console.log("Pvt: ", pvtKey)
    const wallet = deriveSolanaPublicKey(pvtKey);
    // console.log("Pub: ", wallet)

    dispatch({
      type: "ADD_WALLET",
      payload: wallet.toString(),
    });
    dispatch({
      type: "SEED",
      payload: seed,
    });

    const data = {
      seed,
      wallets: [wallet.toString()],
      totalAmount: 0,
      selectedChain: "solana",
    };

    setDataInLocalStorage(STORAGE_KEY, data);
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      exec();
    }
  }, []);

  return (
    <div className={"space-y-3"}>
      <TypographyH4 content="Seed Phrases" className="font-semibold" />
      <div className={"grid grid-cols-4 gap-4 p-4"}>
        {newPhrases
          ? newPhrases.split(" ").map((word: string, idx: number) => (
              <div className={"flex items-center gap-1.5"}>
                <TypographySmall
                  content={`${idx + 1}.`}
                  className="font-semibold"
                />
                <TypographySmall content={word} className="font-semibold" />
              </div>
            ))
          : ""}
      </div>
      <TypographySmall
        content="Note: Write it down and store it in a safe place. Never share it with anyone, and do not save it online or take screenshots."
        className="font-medium text-red-600"
      />

      <div className={"flex items-center justify-center"}>
        <DialogTrigger asChild>
          <Button variant="outline" className={" cursor-pointer"}>
            {"Okay"}
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
};

export default GeneratePhrase;

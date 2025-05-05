import {
  deriveMnemonic,
  deriveMnemonicToSeed,
  deriveSolanaPrivateKey,
  deriveSolanaPublicKey,
} from "@/lib/wallet";
import { useEffect, useState } from "preact/hooks";
import TypographySmall from "../typography/TypographySmall";
import { TypographyH4 } from "../typography";
import { useUserDispatch } from "@/context/GlobalContentAPI";
import { setDataInLocalStorage } from "@/lib/utils";
import { STORAGE_KEY } from "@/lib/data";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GeneratePhrase = () => {
  const [newPhrases, setNewPhrases] = useState<string | null>(null);
  const dispatch = useUserDispatch();

  const handleSetWallet = async () => {
    if (!newPhrases) return;
    const seed = await deriveMnemonicToSeed(newPhrases);

    const pvtKey = deriveSolanaPrivateKey(seed, 0);
    // console.log("Pvt: ", pvtKey)
    const wallet = deriveSolanaPublicKey(pvtKey);
    // console.log("Pub: ", wallet)

    dispatch({
      type: "ADD_WALLET",
      payload: wallet,
    });
    dispatch({
      type: "SEED",
      payload: seed,
    });

    const data = {
      seed,
      selectedChain: "solana",
      solana: {
        wallets: [wallet],
        totalAmount: 0,
      },
    };

    setDataInLocalStorage(STORAGE_KEY, data);
  };

  const exec = async () => {
    const p = deriveMnemonic();
    setNewPhrases(p);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      exec();
    }
  }, []);

  return (
    <>
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
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button onClick={() => handleSetWallet()} type="submit">
            Okay!
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default GeneratePhrase;

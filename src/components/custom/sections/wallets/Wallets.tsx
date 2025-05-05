import { MaxWidthMD } from "@/wrappers";
import { Accordions } from "../../accordion";
import TypographySmall from "../../typography/TypographySmall";
import { Button } from "@/components/ui/button";
import { useUserDispatch, useUserState } from "@/context/GlobalContentAPI";
import { getDataFromLocalStorage, setDataInLocalStorage } from "@/lib/utils";
import { STORAGE_KEY } from "@/lib/data";
import {
  deriveEthereumPublicKey,
  deriveSolanaPrivateKey,
  deriveSolanaPublicKey,
} from "@/lib/wallet";
import {Buffer} from "buffer"

const Wallets = () => {
  const { seed, selectedChain, wallets } = useUserState();
  const dispatch = useUserDispatch();

  const handleCreateNewWallet = () => {
    let res;
    const buf = Buffer.from(seed!);

    if (selectedChain == "ethereum") {
      res = deriveEthereumPublicKey(buf, wallets.length);
    } else {
      // console.log("Seed: ", seed);
      const key = deriveSolanaPrivateKey(buf, wallets.length);
      // console.log("Key: ", key);
      res = deriveSolanaPublicKey(key);
      // console.log("Res: ", res);
    }

    dispatch({
      type: "ADD_WALLET",
      payload: res,
    });

    const data = getDataFromLocalStorage(STORAGE_KEY);
    if (data == null) return;

    if (!data[selectedChain]) {
      data[selectedChain] = {
        wallets: [...wallets, res],
      };
    }

    data[selectedChain].wallets = [...data[selectedChain].wallets, res];


    setDataInLocalStorage(STORAGE_KEY, data);
  };

  return (
    <MaxWidthMD>
      <div>
        <div className={"flex items-center justify-between"}>
          <TypographySmall
            content="Wallets"
            className="text-muted-foreground"
          />
          <Button onClick={() => handleCreateNewWallet()} className={" cursor-pointer"} >Create Wallet</Button>
        </div>
        <div className={"space-y-1"}>
          <Accordions />
        </div>
      </div>
    </MaxWidthMD>
  );
};

export default Wallets;

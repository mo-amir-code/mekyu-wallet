"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useUserState } from "@/context/GlobalContentAPI";
import { deriveEthereumPrivateKey, deriveSolanaPrivateKey } from "@/lib/wallet";
import { useEffect, useState } from "preact/hooks";
import { Buffer } from "buffer";
import bs58 from "bs58";

const Accordions = () => {
  const [pvtKeys, setPvtKeys] = useState<string[]>([]);
  const { wallets, selectedChain, seed } = useUserState();

  const exec = async () => {
    const newWallets = [...wallets];
    for (let i = 0; i < newWallets.length; i++) {
      let key: any;
      if (selectedChain === "ethereum") {
        key = deriveEthereumPrivateKey(Buffer.from(seed!), i);
      } else {
        key = deriveSolanaPrivateKey(Buffer.from(seed!), i);
        key = bs58.encode(key);
      }

      setPvtKeys((prev) => [...prev, key]);
    }
  };

  useEffect(() => {
    exec();
  }, [wallets]);

  return (
    <Accordion type="single" collapsible className={"w-full"}>
      {wallets.map((pubKey: string, idx: number) => (
        <AccordionItem value={`item-${idx + 1}`}>
          <AccordionTrigger className={"cursor-pointer break-all"}>
            {pubKey}
          </AccordionTrigger>
          <AccordionContent className={" text-muted-foreground break-all"}>
            {pvtKeys[idx]}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accordions;

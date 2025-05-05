"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useUserState } from "@/context/GlobalContentAPI";

const Accordions = () => {
  const { wallets } = useUserState();

  return (
    <Accordion type="single" collapsible className="w-full">
      {wallets.map((pubKey: string, idx: number) => (
        <AccordionItem value={`item-${idx + 1}`}>
          <AccordionTrigger className={"cursor-pointer"}>
            {pubKey}
          </AccordionTrigger>
          <AccordionContent>{pubKey}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accordions;

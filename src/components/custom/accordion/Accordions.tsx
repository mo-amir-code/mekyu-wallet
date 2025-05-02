import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordions = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" >
        <AccordionTrigger className={"cursor-pointer"} >Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordions;

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Selector = () => {
  return (
    <Select defaultValue="solana" >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select Chain" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Blockchains</SelectLabel>
          <SelectItem value="solana">Solana</SelectItem>
          <SelectItem value="ethereum">Ethereum</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selector;

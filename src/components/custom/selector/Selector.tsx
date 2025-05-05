import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserDispatch, useUserState } from "@/context/GlobalContentAPI";
import { ChainType } from "@/context/types";
import { STORAGE_KEY } from "@/lib/data";
import { getDataFromLocalStorage, setDataInLocalStorage } from "@/lib/utils";

const Selector = () => {
  const { selectedChain } = useUserState();
  const dispatch = useUserDispatch();

  const handleChange = (val: string) => {
    const data = getDataFromLocalStorage(STORAGE_KEY);
    if (data == null) return;

    data["selectedChain"] = val;

    setDataInLocalStorage(STORAGE_KEY, data);

    dispatch({
      type: "SELECT_CHAIN",
      payload: val as ChainType,
    });
  };

  return (
    <Select
      onValueChange={(value) => handleChange(value)}
      defaultValue={selectedChain}
    >
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

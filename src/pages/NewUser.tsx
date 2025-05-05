// import { DialogModal } from "@/components/custom/dialog";
import { GeneratePhrase } from "@/components/custom/phrase";
import { Button } from "@/components/ui/button";
import { useState } from "preact/hooks";

const NewUser = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={"flex items-center justify-center h-screen"}>
      {isOpen ? (
        <GeneratePhrase func={setIsOpen} />
      ) : (
        <Button onClick={() => setIsOpen(true)} className={"cursor-pointer"} >Create New Wallet</Button>
      )}
    </div>
  );
};

export default NewUser;

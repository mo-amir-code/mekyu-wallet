import { MaxWidthMD } from "@/wrappers";
import { Accordions } from "../../accordion";
import TypographySmall from "../../typography/TypographySmall";
import { DialogModal } from "../../dialog";

const Wallets = () => {
  
  return (
    <MaxWidthMD>
      <div>
        <div className={"flex items-center justify-between"}>
          <TypographySmall
            content="Wallets"
            className="text-muted-foreground"
          />
          <DialogModal btnText="Create Wallet" className="sm:max-w-[700px] w-full">
            <span>Create Wallet</span>
          </DialogModal>
        </div>
        <div className={"space-y-1"}>
          <Accordions />
        </div>
      </div>
    </MaxWidthMD>
  );
};

export default Wallets;

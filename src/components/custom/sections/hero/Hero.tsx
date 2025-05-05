import { MaxWidthMD } from "@/wrappers";
import { TypographyH2 } from "../../typography";
import TypographySmall from "../../typography/TypographySmall";
import { Button } from "@/components/ui/button";
import { STORAGE_KEY } from "@/lib/data";
import { useUserDispatch } from "@/context/GlobalContentAPI";

const Hero = () => {
  const dispatch = useUserDispatch();

  const handleDeleteWallet = () => {
    localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: "RESET" });
  };

  return (
    <MaxWidthMD>
      <div className={"flex items-center justify-between"}>
        <div className={"space-y-1"}>
          <TypographySmall
            content="Total Balance"
            className="text-muted-foreground"
          />
          <TypographyH2 content="It does not work" />
        </div>

        <Button
          type={"button"}
          onClick={() => handleDeleteWallet()}
          variant={"outline"}
        >
          Delete Wallet
        </Button>
      </div>
    </MaxWidthMD>
  );
};

export default Hero;

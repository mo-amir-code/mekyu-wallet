import { MaxWidthMD } from "@/wrappers";
import ToggleTheme from "../../buttons/ToggleTheme";
import { TypographyH4 } from "../../typography";
import { Selector } from "../../selector";

const Header = () => {
  return (
    <MaxWidthMD>
      <div className={"flex items-center justify-between py-4"}>
        <div>
          <TypographyH4 content="MekYu-Wallet" />
        </div>
        <div className={"flex items-center justify-center gap-2"}>
          <Selector />
          <ToggleTheme />
        </div>
      </div>
    </MaxWidthMD>
  );
};

export default Header;

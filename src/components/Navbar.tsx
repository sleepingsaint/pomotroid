import { useTheme } from "hooks/ThemeProvider";
import { useState } from "react";
import { BsPaletteFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import Themes from "./Themes";

enum Active {
  theme = 1,
  settings = 2,
  inactive = 0,
}

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [panel, setPanel] = useState<Active>(Active.inactive);

  const navbarStyles: React.CSSProperties = {
    color: theme.colors.color_foreground,
    background: theme.colors.color_background,
  };

  const toggleSettings = () => {
    if (panel === Active.settings) {
      setPanel(Active.inactive);
    } else {
      setPanel(Active.settings);
    }
  };
  const toggleTheme = () => {
    if (panel == Active.theme) {
      setPanel(Active.inactive);
    } else {
      setPanel(Active.theme);
    }
  };

  return (
    <div>
      <div
        style={navbarStyles}
        className="sticky top-0 w-full flex justify-between items-center px-4 py-2"
      >
        <div className="text-2xl font-bold">Pomotroid</div>

        <ul className="list-none flex">
          <li className={"mx-2 cursor-pointer"} onClick={toggleTheme}>
            <BsPaletteFill style={{ display: "inline-block" }} /> Themes
          </li>
        </ul>
      </div>

      <Themes show={panel === Active.theme} />
    </div>
  );
};

export default Navbar;

import ThemeCard from "components/ThemeCard";
import { useTheme } from "hooks/ThemeProvider";

const Themes: React.FC<{ show: boolean }> = ({ show }) => {
  const { db, theme } = useTheme();
  const themeStyle: React.CSSProperties = {
    background: theme.colors.color_background_lightest
  };
  
  return (
    <div
      className={
        "p-4 m-4 flex flex-col items-center max-h-full overflow-y-scroll no-scrollbar absolute right-0 z-50 " +
        (show ? "float-right visible" : "invisible")
      }

      style={themeStyle}
    >
      {db.map((_theme, idx) => (
        <ThemeCard idx={idx} key={idx} />
      ))}
    </div>
  );
};

export default Themes;

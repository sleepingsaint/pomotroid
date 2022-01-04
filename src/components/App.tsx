import Pomotroid from "components/Pomotroid";
import { useTheme } from "hooks/ThemeProvider";
import Navbar from "./Navbar";

function App() {
  const { theme } = useTheme();

  const appStyle: React.CSSProperties = {
    width: "100%",
    height: "100vh",
    background: theme.colors.color_background_light,
    display: "flex",
    flexDirection: "column",
    overflowY: "hidden"
  };

  return (
    <div className="App" style={appStyle}>
      <Navbar />
      <Pomotroid />
    </div>
  );
}

export default App;

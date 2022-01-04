import { useTheme } from "hooks/ThemeProvider";
import { BsCheck2 } from 'react-icons/bs';

const ThemeCard: React.FC<{ idx: number }> = (props) => {
  const { db, updateTheme, theme } = useTheme();
  const _theme = db[props.idx];

  const cardStyle: React.CSSProperties = {
    background: _theme.colors.color_background,
    color: _theme.colors.color_foreground,
    borderLeft: `5px solid ${_theme.colors.color_accent}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle} onClick={() => updateTheme(props.idx)} className="rounded-sm p-2 mb-2 w-64">
      <p>{db[props.idx].name}</p>

      {_theme.name === theme.name ? <BsCheck2 color={_theme.colors.color_accent} /> : null}
    </div>
  );
};

export default ThemeCard;

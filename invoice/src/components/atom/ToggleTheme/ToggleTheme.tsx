import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import './ToogleTheme.css'

interface Theme {
  mode: "light" | "dark";
  src: string;
  alt: string;
  onClick?: () => void;
}
const ToggleTheme = ({ mode, src, alt, onClick}: Theme) => {
  return (
    <Button variant="transparent" className={`toggle-theme ${mode}`} onClick={onClick}>
      <Icon
        size="sm"
        radius="rounded"
        src={src}
        alt={alt}
      />
    </Button>
  );
};

export default ToggleTheme;

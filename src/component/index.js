import "./Switch.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
 const { theme, toogleTheme } = useTheme();
 return (
   <label className="switch">
     <input
       type="checkbox"
       checked={theme === "light"}
       onChange={toogleTheme}
     />
     <span className="slider round" />
   </label>
 );
};

export default Switch;

import clsx from "clsx";
import './Button.css'
const Button = ({ variant, children }) => {

  return <button className={clsx("button", variant)}>{children}</button>;
};
export default Button
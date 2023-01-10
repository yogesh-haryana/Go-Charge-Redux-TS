import Logo from "../assets/logoHead.png";
import useStyles from "./HeaderStyles";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerDiv}>
      <div className={classes.header}>
        <Link to="/">
          <img src={Logo} alt="logo"></img>
        </Link>
        <span>Go Charge</span>
      </div>
    </div>
  );
};

export default Header;

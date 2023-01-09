import Logo from "../assets/logoHead.png";
import useStyles from "./HeaderStyles";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerDiv}>
        <div className={classes.header}>
          <img src={Logo} alt="logo"></img>
          <span>Go Charge</span>
        </div>
      </div>
  )
}

export default Header;
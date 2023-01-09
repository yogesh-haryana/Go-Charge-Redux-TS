import { Link } from "react-router-dom";
import LinkStyles from "./LinkStyles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const PageLinking = () => {
  const classes = LinkStyles();
  return (
    <Link className={classes.topLink} to="/findStation">Try Now<OpenInNewIcon /></Link>
  )
}

export default PageLinking;

import useStyles from "./homePageStyles";
import car from "../assets/car.jpg";
import { NavLink } from "react-router-dom"

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <div className={classes.headerDiv}><span className={classes.header}>Go Charge</span>
       {/* <NavLink to="/findStation"></NavLink> */}
       </div>
      <div className={classes.firstContainer}>
        <div className={classes.applicationInfo}>
          <span className={classes.wlcome}>Welcome </span>to our electric vehicle charging finder! We are here to help
          you find the nearest and most convenient electric vehicle charging
          stations. With our easy-to-use platform, you can search for charging
          stations by location, availability, and type of charging connector.
          Plus, you can even filter your search by distance or charging speed.
          <br />
          <br />
          Our platform also features real-time updates on charging station
          availability, so you can be sure to find a charging station when you
          need it most. With our map view, you can easily see all the charging
          stations in your area and plan your route accordingly.
          <br />
          So why wait? Start your search for electric vehicle charging stations
          today and experience the convenience and peace of mind that comes with
          using our charging finder.
        </div>
        <div className={classes.imageContainer}></div>
        <img src={car} alt="car"></img>
      </div>
    </div>
  );
};

export default HomePage;

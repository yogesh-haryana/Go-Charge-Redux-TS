import useStyles from "./homePageStyles";
import Station from "../assets/Station.png";
import PageLinking from "./PageLinking";
import Header from "./Header";

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <Header />
      <div className={classes.firstContainer}>
        <div className={classes.applicationInfo}>
          <p className={classes.paraGraph}>
            <span>Welcome</span> to our electric vehicle charging finder!
            <br />
             We are here to help
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
            <br />
            So why wait?
            <br />
             Start your search for electric vehicle charging
            stations today and experience the convenience and peace of mind that
            comes with using our charging finder.
          </p>
        </div>
        <div className={classes.imageContainer}></div>
        <img className={classes.chargingImg} src={Station} alt="car"></img>
      </div>
      <PageLinking />
    </div>
  );
};

export default HomePage;

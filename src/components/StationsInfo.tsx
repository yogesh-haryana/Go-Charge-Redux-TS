import { useContext } from "react";
import { searchContext } from "../contexts/searchContext";
import useStyles from "./StationInfo";
import Logo from "../assets/logoHead.png";

const StationsInfo: React.FC = () => {
  const classes = useStyles();
  const myLoc = {
    // my location
    lat: 28.588265,
    long: 77.313712,
  };

  const { filtered, filterStatus } = useContext(searchContext);

  function calculateDistance( //function to calulate distance between geo locations
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) {
    const R = 6371000; // radius of Earth in meters
    const latOneInRadian = (lat1 * Math.PI) / 180; // latitude in radians
    const latTwoInRadian = (lat2 * Math.PI) / 180;
    const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
    const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(latOneInRadian) *
        Math.cos(latTwoInRadian) *
        Math.sin(deltaLambda / 2) *
        Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = Number(((R * c) / 1000).toFixed(1));
    return distance;
  }

  // const compareByDistance = (lat1:number, lon1:number, lat2:number, lon2:number) => {
  //   filtered.forEach(element => {
  //     element.distance = calculateDistance(lat1, lon1, lat2, lon2);
  //     return element;
  //   });

  //   filtered.sort((a, b)=> a.distance - b.distance);
  //   return filtered;
  // };

  return (
    <div className={classes.stationsHolder}>
      {
      //  filterStatus ?
         filtered.map((item, i) => {
           return (
          <div className={classes.stationClass} key={i}>
            <div className={classes.logoContainer}>
              <img src={Logo} alt="logo"></img>
            </div>
            <div className={classes.stationDetails}>
              <p className={classes.stationName}>{item?.stationName}</p>
              <p>
                distance - 
                {calculateDistance(
                  myLoc.lat,
                  myLoc.long,
                  item?.location?.lat,
                  item?.location?.lang,
                )}{" "}
                kms.
              </p>
              <p className={classes.address}>Address - {item?.address}</p>
              <p>Charging Rate - Rs. {item?.ratesPerHour} /hr.</p>
            </div>
          </div>
           )
         })
        //  : <p>Please Search with a different KeyWord.</p>
      }
    </div>
  );
};

export default StationsInfo;

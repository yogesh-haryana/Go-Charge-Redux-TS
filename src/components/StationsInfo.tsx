import { useContext } from "react";
import { searchContext } from "../contexts/searchContext";
import useStyles from "./StationInfo";

const StationsInfo = () => {
  const classes = useStyles();
  const myLoc = {
    lat: 28.588265,
    long: 77.313712,
  };

  const { filtered } = useContext(searchContext);

  function calculateDistance(
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

    const distance = (R * c) / 1000;
    return distance;
  }

  return (
    <div className={classes.stationsHolder}>
      {filtered.map((item) => {
        return (
          <div className={classes.stationClass} key={item._id}>
            <p className={classes.stationName}>{item.stationName}</p>
            <p>
            distance :{" "}
            {calculateDistance(
              myLoc.lat,
              myLoc.long,
              item.location.lat,
              item.location.lang,
            ).toFixed(1)} kms.
          </p>
          <p className={classes.address}>Address - {item.address}</p>
          <p>Charging Rate Rs. {item.ratesPerHour} /hr.</p>
          </div>
        )
      })}
    </div>
  );
};

export default StationsInfo;

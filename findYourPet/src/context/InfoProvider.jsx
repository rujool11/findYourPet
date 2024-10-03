import { createContext, useContext, useEffect, useState } from "react";
import { getRandomLatLong, getRandomSpeed } from "../utils/ValueGetter";
const InfoContext = createContext();

const BASE_LATITUDE = 12.934968;
const BASE_LONGITUDE = 79.146881;

const InfoProvider = ({ children }) => {
    const [longitude, setLongitude] = useState(BASE_LONGITUDE);
    const [latitude, setLatitude] = useState(BASE_LATITUDE);
    const [speed, setSpeed] = useState(0);

    useEffect(() =>{

      const interval = setInterval(() => {
        setSpeed(getRandomSpeed());
        setLatitude(getRandomLatLong(BASE_LATITUDE));
        setLongitude(getRandomLatLong(BASE_LONGITUDE));
      }, 3000);

      return () => clearInterval(interval); // good practice cleanup

    }, []);
  
  return (
    <InfoContext.Provider
      value={{ longitude, setLongitude, latitude, setLatitude, speed, setSpeed}}
    >
      {children}
    </InfoContext.Provider>
  );
};

export const InfoState = () => {
  return useContext(InfoContext);
};

export default InfoProvider;
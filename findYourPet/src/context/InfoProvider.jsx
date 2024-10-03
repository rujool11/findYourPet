import { createContext, useContext, useEffect, useState } from "react";

const InfoContext = createContext();

const InfoProvider = ({ children }) => {
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [speed, setSpeed] = useState();

    useEffect(() => {

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

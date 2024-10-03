import React from 'react';
import { InfoState } from '../context/InfoProvider';
import { Box, Text } from '@chakra-ui/react';

const InfoSection = () => {

  const {latitude, longitude, speed} = InfoState();

  const titleStyle = {
    fontSize: "3xl",
    fontWeight: "bold",
    fontFamily: "Manrope",
    color: "#112D4E",
    marginBottom: "60px",
  };

  const subtitleStyle = {
    fontSize: "xl",
    fontWeight: "bold",
    fontFamily: "Manrope",
    color: "#112D4E",
    marginTop: "20px",
    marginRight: "15px",
    marginLeft: "30px",
    marginBottom: "20px"
  };

  const valueStyle = {
    fontSize: "lg",
    fontFamily: "Manrope",
    color: "#112D4E",
    marginTop: "20px",
    marginBottom: "20px"
  };

  // Define styles for the speed value
  const speedValueStyle = {
    fontSize: "lg",
    fontFamily: "Manrope",
    fontWeight: "bold",
    color: speed < 30 ? "green" : "red",
    marginTop: "20px",
    marginBottom: "20px"
  };

  const warningStyle = {
    fontSize: "md",
    fontFamily: "Manrope",
    fontWeight: "bold",
    color: "maroon",
    marginTop: "5px"
  };

  return (
    <Box 
      width="50vw" 
      padding="15px 30px" 
      display="flex" 
      flexDirection="column" 
      justifyContent="flex-start" 
      marginTop="20px"
      height="80vh"
    >
      <Box display="flex" flexDirection="column" textAlign="center"> {/* Added textAlign="center" here */}
        <Text {...titleStyle}>
          Speed and location info
        </Text>

        <Box display="flex" alignItems="center" marginBottom="10px">
          <Text {...subtitleStyle}>Longitude:</Text>
          <Text {...valueStyle}>{longitude.toFixed(6)}</Text>
        </Box>

        <Box display="flex" alignItems="center" marginBottom="10px">
          <Text {...subtitleStyle}>Latitude:</Text>
          <Text {...valueStyle}>{latitude.toFixed(6)}</Text>
        </Box>

        <Box display="flex" alignItems="center" marginBottom="10px">
          <Text {...subtitleStyle}>Speed:</Text>
          <Text {...speedValueStyle}>{speed.toFixed(1)} km/h</Text>
        </Box>

        {/* Conditionally render warning message if speed >= 30 */}
        {speed >= 30 && (
          <Text {...warningStyle}>
             Pet moving at abnormally high speed, might be in danger!
          </Text>
        )}
      </Box>

      <Box
        width="100%"
        fontFamily="Manrope"
        padding="5px"
        display="flex"
        justifyContent="center"
        color="#3F72AF"
        fontWeight="bold"
        marginTop="auto" // this sets margin to all space above => set at bottom
      >
        <Text>Made by Rakeem, Rujool and Srikar</Text>
      </Box>
    </Box>
  );
};

export default InfoSection;
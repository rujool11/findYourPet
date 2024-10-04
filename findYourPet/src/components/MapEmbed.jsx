import React from 'react';
import { Box } from '@chakra-ui/react';

const MapEmbed = () => {
  return (
    <Box width="50vw" padding="5px" display="flex" justifyContent="center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.9589864520476!2d79.16002381843813!3d12.974475078248533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzI0LjciTiA3OcKwMDknMzQuMSJF!5e0!3m2!1sen!2sin!4v1728031940993!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapEmbed;

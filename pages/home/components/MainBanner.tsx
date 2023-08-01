import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const MainBanner = () => {
  return (
    <Box sx={{ height: "600px", width: '100%', maxWidth: '1440px', position: 'relative', aspectRatio: '70/45' }}>
      <Image
        src={"/assets/banners/hero/banner-1.jpg"}
        fill
        priority
        alt="banner"
      />
    </Box>
  );
};

export default MainBanner;

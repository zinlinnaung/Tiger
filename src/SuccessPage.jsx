import React from "react";
import { Box, Typography, Button } from "@mui/material";
import tigerBg2 from "./assets/background.png"; // replace with your
import ArrowLogo from "./assets/arrow.png";
import texture from "./assets/texture.png";

export default function SuccessPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${tigerBg2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        pt: 34,
        px: 2,
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Title */}

      {/* Subtitle */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          //   letterSpacing: 0.5,
          color: "#fa8706",
          mb: 4,
          fontSize: "1.4rem",
        }}
      >
        UNCAGE YOUR TIGER
      </Typography>

      {/* Confirmation Box */}
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "2px solid #fff",
          borderRadius: 2,
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(1px)",
          px: 1,
          py: 2,
          //   maxWidth: 1000,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Thank you for your registration.
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
        >
          The confirmation letter will be sent to your email soon.
        </Typography>
      </Box>

      {/* Down Arrow */}
      <Box
        sx={{
          display: "flex",
          mt: 1,
          mb: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
        }}
      >
        <img
          src={ArrowLogo}
          alt="Arrow Logo"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Additional Info */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: "0.8rem", fontStyle: "bold" }}>
          <span style={{ color: "#ff9800", fontWeight: "bold" }}>
            {" "}
            Grand Reveal{" "}
          </span>
          တင်ဆက်မှုကို အပြည့်အဝခံစားကြည့်ရှုနိုင်ရန်{" "}
          <span style={{ color: "#ff9800", fontWeight: "bold" }}>
            ညနေ (၆း၃၀)
          </span>{" "}
          အမီ ပွဲတက်ရောက်ပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။
        </Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{ fontSize: "0.8rem", fontStyle: "bold", fontWeight: "bold" }}
        >
          To experience the{" "}
          <span style={{ color: "#ff9800", fontWeight: "bold" }}>
            Grand Reveal
          </span>
          ,
          <br /> we kindly request you to arrive no later than{" "}
          <span style={{ color: "#ff9800", fontWeight: "bold" }}>6:30PM.</span>
        </Typography>
      </Box>
    </Box>
  );
}

import React from "react";
import { Box, Typography } from "@mui/material";
import tigerBg2 from "./assets/background.png";
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
        textAlign: "center",
        color: "#fff",
        px: 2,
      }}
    >
      {/* Subtitle over background TIGER */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#fa8706",
          mt: "32vh", // adjust this to sit exactly below TIGER from background
          mb: 4,
          fontSize: "1.4rem",
          letterSpacing: 1,
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
          px: 2,
          py: 3,
          maxWidth: 400,
          mb: 3,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Thank you for your registration.
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.85rem", fontWeight: "bold" }}
        >
          The confirmation letter will be sent to your email soon.
        </Typography>
      </Box>

      {/* Down Arrow */}
      <Box
        sx={{
          display: "flex",
          mt: 1,
          mb: 2,
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
      <Box sx={{ mb: 3, maxWidth: 500 }}>
        <Typography sx={{ fontSize: "0.85rem", fontWeight: "bold" }}>
          <span style={{ color: "#ff9800" }}>Grand Reveal</span> တင်ဆက်မှုကို
          အပြည့်အဝခံစားကြည့်ရှုနိုင်ရန်{" "}
          <span style={{ color: "#ff9800" }}>ညနေ (၆း၃၀)</span> အမီ
          ပွဲတက်ရောက်ပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။
        </Typography>
      </Box>
      <Box sx={{ mb: 3, maxWidth: 500 }}>
        <Typography sx={{ fontSize: "0.85rem", fontWeight: "bold" }}>
          To experience the{" "}
          <span style={{ color: "#ff9800" }}>Grand Reveal</span>, <br />
          we kindly request you to arrive no later than{" "}
          <span style={{ color: "#ff9800" }}>6:30PM.</span>
        </Typography>
      </Box>
    </Box>
  );
}

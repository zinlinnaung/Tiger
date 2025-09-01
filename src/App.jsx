import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import tigerBg from "./assets/background.png";
import tigerBg2 from "./assets/bg.png";
import texture from "./assets/texture.png";
import tigerLogo from "./assets/logo.png";
import ArrowLogo from "./assets/arrow.png";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${tigerBg}), url(${tigerBg2})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top center, bottom center", // one on top, one on bottom
        backgroundSize: "contain, cover", // adjust as needed
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{ textAlign: "center", mt: 31, width: "95%" }}
      >
        <Box
          sx={{
            border: "2px solid #fff",
            display: "inline-block",
            px: 2,
            py: 0.5,
            borderRadius: "2px",
            mb: 1,
            transform: "skewX(-5deg)",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              transform: "skewX(5deg)",
              fontSize: "0.9rem",
            }}
          >
            သို့လေးစားရပါသော ဧည့်သည်ကြီးများအတွက်
          </Typography>
        </Box>

        {/* Burmese Paragraph */}
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, px: 1 }}>
          ရဲရင့်တဲ့မူလအရသာနဲ့ ဆန်းသစ်လိုက်တဲ့
          <span style={{ color: "#ff9800", fontWeight: "bold" }}> Tiger </span>
          ရဲ့ ဒီဇိုင်းပြောင်းလဲမှု မိတ်ဆက်ခြင်းအထိမ်းအမှတ် ညစာစားပွဲအခမ်းအနားကို
          တစ်ဖက်ပါအစီအစဉ်အတိုင်း ကျင်းပပြုလုပ်မည်ဖြစ်သောကြောင့်
          ကြွရောက်ချီးမြှင့်ပေးပါရန် ဖိတ်ကြားအပ်ပါသည်။
        </Typography>

        {/* Esteemed Guests Tilt Box */}
        <Box
          sx={{
            border: "2px solid #fff",
            display: "inline-block",
            px: 2,
            py: 0.5,
            borderRadius: "2px",
            mb: 2,
            transform: "skewX(-5deg)",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              transform: "skewX(5deg)",
              fontSize: "1rem",
            }}
          >
            Esteemed Guests,
          </Typography>
        </Box>

        {/* English Invitation */}
        <Typography
          variant="body2"
          sx={{ mb: 3, fontSize: "0.9rem", lineHeight: 1.6 }}
        >
          You are cordially invited to the{" "}
          <span style={{ color: "#ff9800", fontWeight: "bold" }}>
            Tiger's Bold New Identity event
          </span>{" "}
          dinner, celebrating the bold original flavor and innovative new
          designs of the Tiger bottle.
          <br />
          The event will be held according to the attached program.
        </Typography>

        {/* Event Details Card */}
        <Card
          sx={{
            background: "rgba(0,0,0,0.40)",
            borderRadius: 2,
            color: "#fff",
            mb: 3,
            backgroundImage: `url(${texture})`, // your image
            backgroundSize: "cover", // cover full area
            backgroundPosition: "center", // center align
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardContent sx={{ px: 2, py: 2 }}>
            <Typography sx={{ mb: 2, fontSize: "0.9rem" }}>
              <strong>Date</strong>
              <br />
              <span style={{ color: "#ff9800", fontWeight: "bold" }}>
                17<sup>th</sup> September, 2025
              </span>
            </Typography>

            <Typography sx={{ mb: 2, fontSize: "0.9rem" }}>
              <strong>အချိန်</strong>
              <br />
              <span style={{ color: "#ff9800", fontWeight: "bold" }}>
                6:00 PM to 8:30 PM
              </span>
            </Typography>

            <Typography sx={{ mb: 2, fontSize: "0.9rem" }}>
              <strong>Attire</strong>
              <br />
              <span style={{ color: "#ff9800", fontWeight: "bold" }}>
                Street-smart
              </span>
            </Typography>

            <Typography sx={{ fontSize: "0.9rem" }}>
              <strong>Location</strong>
              <br />
              <span style={{ color: "#ff9800", fontWeight: "bold" }}>
                Yangon Ballroom Novotel Yangon Max
              </span>
            </Typography>
          </CardContent>
        </Card>

        {/* ======== PROGRAM SECTION (matches the image) ======== */}
        <Box
          sx={{
            textAlign: "left",
            mb: 3,
            px: 1,
          }}
        >
          {/* Orange double title like in image */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              alignItems: "baseline",
              columnGap: 2,
              mb: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#ff9800",
                fontWeight: 900,
                letterSpacing: 1,
                fontSize: "1.25rem",
              }}
            >
              အချိန်
            </Typography>
            <Typography
              sx={{
                color: "#ff9800",
                fontWeight: 900,
                letterSpacing: 1,
                fontSize: "1.25rem",
              }}
            >
              အစီအစဉ်
            </Typography>
          </Box>

          {/* Two-column list */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              rowGap: 1.2,
              columnGap: 2,
            }}
          >
            <Typography sx={{ opacity: 0.95 }}>ညနေ ၅း၃ဝ</Typography>
            <Typography>
              Guest Registration &<br />
              Media Interview Session
            </Typography>

            <Typography sx={{ opacity: 0.95 }}>06:30 PM</Typography>
            <Typography>Event Opening Session</Typography>

            <Typography sx={{ opacity: 0.95 }}>07:00 PM</Typography>
            <Typography>Tiger New Bottle Design Unveiling</Typography>

            <Typography sx={{ opacity: 0.95 }}>07:30 PM</Typography>
            <Typography>Dinner Serving</Typography>

            <Typography sx={{ opacity: 0.95 }}>08:00 PM</Typography>
            <Typography>
              Performance of “MERCH Reveal”,
              <br />A Collaboration with Local Brands
            </Typography>
          </Box>
        </Box>

        {/* ======== RSVP STRIPED PANEL (matches the image) ======== */}
        <Box
          sx={{
            mt: 2,
            px: 2,
            py: 1.25,
            borderRadius: "14px",
            border: "1.5px solid rgba(255,255,255,0.75)",
            boxShadow: "0 3px 0 rgba(0,0,0,0.25)",
            // dark translucent panel + angled stripes like the reference
            backgroundImage: `url(${texture})`, // your image
            backgroundSize: "cover", // cover full area
            backgroundPosition: "center", // center align
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(1px)",
            textAlign: "left",
          }}
        >
          <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            <span style={{ color: "#ff9800", fontWeight: 800 }}>RSVP :</span>{" "}
            ပွဲအခမ်းအနားအားတက်ရောက်ရန်ဖော်ပြပါလင့်ခ်မှတစ်ဆင့်
            စာရင်းပေးသွင်းနိုင်ပါသည်။
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: 1,
            alignItems: "center",
            justifyContent: "center",
            height: "60px", // just enough space for small icon
          }}
        >
          <img
            src={ArrowLogo}
            alt="Arrow Logo"
            style={{
              width: "60px", // ✅ make it small
              height: "60px", // keep it square
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{
            // backgroundImage: `url(${tigerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            py: 4,
            px: 2,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box maxWidth="md" width={"100%"} sx={{ textAlign: "center" }}>
            {/* Logo + Tagline */}
            {/* <Box sx={{ mb: 2 }}>
              <img
                src={tigerLogo}
                alt="Tiger Logo"
                style={{ width: "55%", objectFit: "contain" }}
              />
            </Box>

            <Typography
              sx={{
                color: "#ff9800",
                fontWeight: "bold",
                letterSpacing: 1,
                mb: 1,
              }}
            >
              UNCAGE YOUR TIGER
            </Typography> */}

            {/* Down arrows */}
            {/* <Typography sx={{ fontSize: "2rem", mb: 2 }}>⬇⬇</Typography> */}

            {/* Form Card */}
            <Card
              sx={{
                width: "100%",
                backgroundImage: `url(${texture})`, // your image
                backgroundSize: "cover", // cover full area
                backgroundPosition: "center", // center align
                backgroundRepeat: "no-repeat",
                borderRadius: 2,
                border: "1.5px solid rgba(255,255,255,0.5)",
                boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
                color: "#fff",
                mb: 3,
              }}
            >
              <CardContent sx={{ px: 2, py: 3 }}>
                {/* Name + Phone row */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Name
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      sx={{
                        background: "#fff",
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Phone Number
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      sx={{
                        background: "#fff",
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Box>

                {/* Email */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    Email Address
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    sx={{
                      background: "#fff",
                      borderRadius: 1,
                    }}
                  />
                </Box>

                {/* Additional Guest */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    Additional Guest Name
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    sx={{
                      background: "#fff",
                      borderRadius: 1,
                    }}
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Orange Button */}
            <Button
              fullWidth
              variant="contained"
              // startIcon={<SearchIcon />}
              sx={{
                mt: 1,
                py: 1.2,
                fontWeight: "bold",
                backgroundImage:
                  "repeating-linear-gradient(45deg, #ff9800 0 12px, #ff7c00 12px 24px)",
                borderRadius: "10px",
                boxShadow: "0 4px 0 rgba(0,0,0,0.25)",
                "&:hover": {
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #ff7c00 0 12px, #ff9800 12px 24px)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import tigerBg from "./assets/background.png";
import tigerBg2 from "./assets/bg.png";
import texture from "./assets/texture.png";
import tigerLogo from "./assets/logo.png";
import ArrowLogo from "./assets/arrow.png";
import { useNavigate } from "react-router-dom";

export default function FormComponent() {
  const navigate = useNavigate();
  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalGuestName, setAdditionalGuestName] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^09\d{7,9}$/.test(phone))
      newErrors.phone = "Phone number must start with 09 and be valid";
    if (!email.trim()) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async () => {
    if (!validate()) return;
    const body = {
      name,
      phone,
      email,
      additional_guest: additionalGuestName ? true : false,
      additional_guest_name: additionalGuestName || "",
    };

    try {
      const response = await fetch(
        "https://api.tigerinvites.com/api/invited-people",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        // setOpenDialog(true);
        // Clear form
        setName("");
        setPhone("");
        setEmail("");
        setAdditionalGuestName("");
        navigate("/success");
      } else {
        const errorData = await response.json();
        alert("Error: " + (errorData.message || "Something went wrong"));
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${tigerBg}), url(${tigerBg2})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top center, bottom center",
        backgroundSize: "contain, cover",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{ textAlign: "center", mt: 31, width: "100%" }}
      >
        <Box
          sx={{
            border: "1.5px solid #fff",
            display: "inline-block",
            px: 2.5,
            py: 0.8,
            borderRadius: "4px",

            mb: 2.5,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            သို့ လေးစားရပါသော ဧည့်သည်တော်ကြီးများ
          </Typography>
        </Box>

        {/* Burmese Paragraph */}
        <Box sx={{ mb: 4 }}>
          {/* <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            ရဲရင့်တဲ့မူလအရသာနဲ့ ဆန်းသစ်လိုက်တဲ့{" "}
            <span style={{ color: "#ff9800", fontWeight: 700 }}> Tiger </span>
            ရဲ့ ဒီဇိုင်းသစ်ပြောင်းလဲမှု
          </Typography> */}
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            ရဲရင့်တဲ့မူလအရသာနဲ့ ဆန်းသစ်လိုက်တဲ့{" "}
            <span style={{ color: "#ff9800", fontWeight: "bold" }}>Tiger</span>{" "}
            ၏ ဒီဇိုင်းပြောင်းလဲမှု
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            မိတ်ဆက်ပွဲအခမ်းအနားအား အောက်ပါအစီအစဉ်အတိုင်း
          </Typography>

          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            ကျင်းပပြုလုပ်မည်ဖြစ်ပါသောကြောင့် ကြွရောက်ချီးမြှင့်ပေးပါရန်
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            ဖိတ်ကြားအပ်ပါသည်။
          </Typography>
        </Box>

        {/* Esteemed Guests Tilt Box */}
        <Box
          sx={{
            width: "70%",
            border: "2px solid #fff",
            display: "inline-block",
            px: 2,
            py: 0.5,
            borderRadius: "2px",
            mb: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Esteemed Guest,
          </Typography>
        </Box>

        {/* English Invitation */}
        <Box sx={{ mb: 1 }}>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            You are cordially invited to the{" "}
            <span style={{ color: "#ff9800", fontWeight: "bold" }}>
              Tiger's Bold New Identity Launch,
            </span>{" "}
          </Typography>
          {/* <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            <span style={{ color: "#ff9800", fontWeight: "bold" }}>
              Tiger's Bold New Identity event,
            </span>{" "}
          </Typography> */}

          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9 }}>
            celebrating the refreshed innovative design of Tiger
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.9, mb: 2 }}>
            while enjoying Tiger's same bold taste.
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1 }}>
            Kindly see the attached program.
          </Typography>
        </Box>

        {/* Event Details Card */}
        <Card
          sx={{
            background: "rgba(0,0,0,0.40)",
            borderRadius: 2,
            color: "#fff",
            mb: 3,
            border: "1px solid #efefef",
            backgroundImage: `url(${texture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            textAlign: "center",
          }}
        >
          <CardContent sx={{ px: 2, py: 3 }}>
            {/* Date */}
            <Box
              sx={{
                mb: 2,
                pb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  mb: 1,
                  borderBottom: "2px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 0 rgba(149, 137, 137, 0.6)", // top shadow/line
                }}
              >
                Date
              </Typography>
              <Typography sx={{ color: "#ff9800", fontWeight: "bold" }}>
                17<sup>th</sup> September, 2025
              </Typography>
            </Box>

            {/* Time */}
            <Box
              sx={{
                mb: 2,
                pb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  mb: 1,
                  borderBottom: "2px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 0 rgba(149, 137, 137, 0.6)",
                }}
              >
                Time
              </Typography>
              <Typography sx={{ color: "#ff9800", fontWeight: "bold" }}>
                6:00 PM to 8:30 PM
              </Typography>
            </Box>

            {/* Location (no bottom line for last one) */}

            {/* Attire */}
            <Box
              sx={{
                mb: 2,
                pb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",

                  borderBottom: "2px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 0 rgba(149, 137, 137, 0.6)",
                }}
              >
                Attire
              </Typography>
              <Typography sx={{ color: "#ff9800", fontWeight: "bold" }}>
                Street-Smart
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  mb: 1,
                  borderBottom: "2px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 0 rgba(149, 137, 137, 0.6)",
                }}
              >
                Location
              </Typography>
              <Typography sx={{ color: "#ff9800", fontWeight: "bold", mb: 2 }}>
                Yangon Ballroom Novotel Yangon Max
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* <Box sx={{ textAlign: "left", mb: 3, px: 1 }}>
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

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              rowGap: 1.2,
              columnGap: 2,
            }}
          >
            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              ညနေ ၅း၃ဝ
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", lineHeight: 1.7 }}>
              ဧည့်သည်တော်များ စာရင်းပေးသွင်းခြင်းနှင့်
              <br />
              မီဒီယာအင်တာဗျူးအစီအစဉ်
            </Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              ညနေ ၆း၃ဝ
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.7 }}>
              အစီအစဉ် စတင်တင်ဆက်ခြင်း
            </Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              ညနေ ၇းဝဝ
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.7 }}>
              <span
                style={{
                  color: "#ff9800",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Tiger
              </span>{" "}
              ပုလင်းဒီဇိုင်းသစ်အား မိတ်ဆက်ပြသခြင်း
            </Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              ညနေ ၇း၃ဝ
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.7 }}>
              ညစာ တည်ခင်းဧည့်ခံခြင်း
            </Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              ညနေ ၈းဝဝ
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.7 }}>
              <span
                style={{
                  color: "#ff9800",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                Local Brands
              </span>
              များဖြင့်ပေါင်းစပ်ဖန်တီးထားသော
              <br />
              <span
                style={{
                  color: "#ff9800",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                "MERCH Reveal"
              </span>{" "}
              အစီအစဉ်တင်ဆက်ဖျော်ဖြေခြင်း
            </Typography>
          </Box>
        </Box> */}

        {/* PROGRAM SECTION */}
        <Box sx={{ textAlign: "left", mb: 3, px: 1 }}>
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
                fontSize: "2rem",
              }}
            >
              TIME
            </Typography>
            <Typography
              sx={{
                color: "#ff9800",
                fontWeight: 900,
                letterSpacing: 1,
                fontSize: "2rem",
              }}
            >
              PROGRAM
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "110px 1fr",
              rowGap: 1.2,
              columnGap: 2,
            }}
          >
            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              06:00 PM
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>
              Guest Registration
            </Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              06:30 PM
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>
              Event Opening Session &<br />{" "}
              <span
                style={{
                  color: "#ff9800",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                Grand Reveal
              </span>{" "}
              Performance
            </Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              07:00 PM
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>
              Tiger New Design Unveiling
            </Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              07:30 PM
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>Dinner Serving</Typography>

            <Typography sx={{ opacity: 0.95, fontSize: "0.8rem" }}>
              08:00 PM
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>
              <span
                style={{
                  color: "#ff9800",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                MERCH Reveal
              </span>{" "}
              Performance
            </Typography>
          </Box>
        </Box>

        {/* RSVP PANEL */}
        <Box
          sx={{
            mt: 2,
            px: 2,
            py: 1.25,
            borderRadius: "14px",
            border: "1.5px solid rgba(255,255,255,0.75)",
            boxShadow: "0 3px 0 rgba(0,0,0,0.25)",
            backgroundImage: `url(${texture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(1px)",
            textAlign: "left",
          }}
        >
          <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
            <span style={{ color: "#ff9800", fontWeight: 800 }}>
              RSVP : ပွဲအခမ်းအနားတက်ရောက်ရန် ဖော်ပြပါ လင့်ခ်မှတစ်ဆင့်
              စာရင်းပေးသွင်းနိုင်ပါသည်။
            </span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: 1,
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

        <Box
          sx={{
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
            {/* Form Card */}
            <Card
              sx={{
                width: "100%",
                backgroundImage: `url(${texture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 2,
                border: "1.5px solid rgba(255,255,255,0.5)",
                boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
                color: "#fff",
                mb: 3,
              }}
            >
              <CardContent sx={{ px: 2, py: 3 }}>
                <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        mb: 0.5,
                        textAlign: "left",
                      }}
                    >
                      Name
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={name}
                      error={!!errors.name}
                      helperText={errors.name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ background: "#fff", borderRadius: 1 }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        mb: 0.5,
                        textAlign: "left",
                      }}
                    >
                      Phone Number
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.phone}
                      helperText={errors.phone}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      sx={{ background: "#fff", borderRadius: 1 }}
                    />
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      mb: 0.5,
                      textAlign: "left",
                    }}
                  >
                    Email Address
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.email}
                    helperText={errors.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ background: "#fff", borderRadius: 1 }}
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
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
        {/* <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: "0.8rem", fontStyle: "bold" }}>
            Grand Reveal တင်ဆက်မှုကို အပြည့်အဝခံစားကြည့်ရှုနိုင်ရန် ညနေ (၆း၃၀)
            အမီ ပွဲတက်ရောက်ပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: "0.8rem", fontStyle: "bold" }}>
            To experience the Grand Reveal, we kindly request you to arrive no
            later than 6:30PM.*
          </Typography>
        </Box> */}
      </Container>

      {/* Success Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          Registration successful. You will receive a confirmation email
          shortly.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

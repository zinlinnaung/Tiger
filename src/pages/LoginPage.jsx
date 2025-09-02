import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setTimeout(() => {
      if (!emailRegex.test(email)) {
        setError("မှန်ကန်သော အီးမေးလ်ကို ထည့်ပါ။");
      } else if (email === "admin@admin.com" && password === "admin123") {
        // ✅ Save login state
        localStorage.setItem("auth", "true");
        navigate("/dashboard");
      } else {
        setError("အီးမေးလ် သို့မဟုတ် စကားဝှက် မှားနေပါသည်။");
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "99vh",
          backgroundColor: "#232121ff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mt: 4,
            mb: 3,
            textAlign: "center",
            color: "#FFD700",
          }}
        >
          Tiger Admin Login
        </Typography>

        {/* Login Form */}
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", sm: "90%", md: "500px", lg: "700px" },
            pt: { md: 2, lg: 2 },
            pr: { md: 9, lg: 9 },
            pl: { md: 9, lg: 9 },
            pb: 6,
            borderRadius: 4,
            backgroundColor: "#ffffff",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding={4}
            gap={2}
          >
            {/* Email */}
            <Typography mb={1}>အီးမေးလ်</Typography>
            <TextField
              label="အီးမေးလ်ထည့်ပါ"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              disabled={isLoading}
              variant="outlined"
              InputProps={{
                startAdornment: <EmailIcon fontSize="small" />,
              }}
            />

            {/* Password */}
            <Typography mb={1}>စကားဝှက်</Typography>
            <TextField
              label="စကားဝှက်ထည့်ပါ"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              disabled={isLoading}
              variant="outlined"
              InputProps={{
                startAdornment: <LockIcon fontSize="small" />,
              }}
            />

            {/* Error */}
            {error && <Alert severity="error">{error}</Alert>}

            {/* Submit */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)", // Gold gradient
                color: "#111", // Dark text for contrast
                py: 1.5,
                mt: 3,
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: "bold",
                minWidth: "150px",
                boxShadow: "0 4px 15px rgba(255, 215, 0, 0.4)", // Glow effect
                transition: "all 0.3s ease",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)", // Darker gold on hover
                  transform: "scale(1.05)", // Slight zoom
                  boxShadow: "0 6px 20px rgba(255, 165, 0, 0.5)", // Stronger glow
                },
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;

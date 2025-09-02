import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  CircularProgress,
  Paper,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get query param id
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    additional_guest_name: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // no id, skip
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.tigerinvites.com/api/invited-people/${id}`
        );
        const { name, phone, email, additional_guest_name } = res.data;
        setFormData({ name, phone, email, additional_guest_name });
      } catch (err) {
        console.error("Error fetching data:", err);
        alert("Failed to fetch data!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!id) return;

    setSaving(true);

    const body = {
      ...formData,
      additional_guest: formData.additional_guest_name ? true : false,
      confirmed: false, // always set to false when saving
    };

    try {
      await axios.patch(
        `https://api.tigerinvites.com/api/invited-people/${id}`,
        body
      );
      alert("Updated successfully!");
      navigate(-1); // go back
    } catch (err) {
      console.error("Error saving data:", err);
      alert("Failed to update!");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Edit Invited Person
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Additional Guest Name"
            name="additional_guest_name"
            value={formData.additional_guest_name}
            onChange={handleChange}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? <CircularProgress size={24} color="inherit" /> : "Save"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditPage;

import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  TextField,
  Paper,
  InputAdornment,
  Button,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import * as XLSX from "xlsx";
import axios from "axios";

const AdminDashboard = () => {
  const [filters, setFilters] = useState({
    name: "",
    phone: "",
    email: "",
    additionalGuest: "",
    startDate: "",
    endDate: "",
  });

  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0); // 0 = Pending, 1 = Confirmed
  const [loadingId, setLoadingId] = useState(null); // track loading row

  // Fetch API data
  const fetchRecords = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.tigerinvites.com/api/invited-people"
      );

      const transformed = res.data.map((r) => ({
        id: r.id,
        name: r.name,
        phone: r.phone,
        email: r.email,
        additionalGuest: r.additional_guest ? "Yes" : "No",
        additionalGuestName: r.additional_guest_name || "-",
        confirmed: r.confirmed,
        createdAt: new Date(r.created_at),
      }));

      setRecords(transformed);
    } catch (err) {
      console.error("Failed to fetch records:", err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    const filtered = records.filter((record) => {
      const matchesName = record.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      const matchesPhone = record.phone
        .toLowerCase()
        .includes(filters.phone.toLowerCase());
      const matchesEmail = record.email
        .toLowerCase()
        .includes(filters.email.toLowerCase());
      const matchesAdditionalGuest = record.additionalGuestName
        .toLowerCase()
        .includes(filters.additionalGuest.toLowerCase());

      const matchesStartDate =
        !filters.startDate || record.createdAt >= new Date(filters.startDate);
      const matchesEndDate =
        !filters.endDate || record.createdAt <= new Date(filters.endDate);

      return (
        matchesName &&
        matchesPhone &&
        matchesEmail &&
        matchesAdditionalGuest &&
        matchesStartDate &&
        matchesEndDate
      );
    });

    setFilteredRecords(filtered);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [records, filters]);

  const handleFilterChange = (field) => (event) => {
    setFilters((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleExcelExport = () => {
    const ws = XLSX.utils.json_to_sheet(filteredRecords);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Filtered Records");
    XLSX.writeFile(wb, "filtered_records.xlsx");
  };

  const handleConfirm = async (record) => {
    setLoadingId(record.id);
    try {
      await axios.patch(
        `https://api.tigerinvites.com/api/invited-people/${record.id}`,
        {
          ...record,
          additional_guest: record.additionalGuest === "Yes",
          confirmed: true,
        }
      );

      await axios.post("https://api.tigerinvites.com/api/email/send", {
        to: record.email,
        subject: "Invitation of Tiger's Bold New Identity event dinner",
        context: {
          id: record.id,
          guestName: record.name,
          additionalGuestName: record.additionalGuestName,
          eventName: "Tiger's Bold New Identity event dinner",
          eventDate: "17th September, 2025",
          eventTime: "6:00 PM to 8:30 PM",
          eventVenue: "Yangon Ballroom Novotel Yangon Max",
          organizerName: "Tiger",
        },
      });

      setRecords((prev) =>
        prev.map((r) => (r.id === record.id ? { ...r, confirmed: true } : r))
      );

      alert(`Invitation confirmed and email sent to ${record.email}`);
    } catch (err) {
      console.error(err);
      alert("Failed to confirm or send email. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "additionalGuest", headerName: "Additional Guest", flex: 1 },
    { field: "additionalGuestName", headerName: "Guest Name", flex: 1 },
    {
      field: "confirmed",
      headerName: "Confirmed",
      flex: 1,
      renderCell: (params) => (
        <Typography color={params.row.confirmed ? "green" : "red"}>
          {params.row.confirmed ? "Yes" : "No"}
        </Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 150,
      getActions: (params) =>
        !params.row.confirmed
          ? [
              <GridActionsCellItem
                key="confirm"
                label="Confirm"
                showInMenu={false}
                onClick={() => handleConfirm(params.row)}
                icon={
                  loadingId === params.row.id ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <Button
                      variant="contained"
                      size="small"
                      disabled={loadingId !== null} // disable all while loading
                      sx={{
                        backgroundColor: "#1976d2",
                        color: "white",
                        borderRadius: 1,
                        boxShadow: "none",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#1565c0" },
                        "&:focus": { outline: "none" }, // remove oval outline
                      }}
                    >
                      Confirm
                    </Button>
                  )
                }
              />,
            ]
          : [],
    },
  ];

  // Tab-filtered rows
  const displayedRecords = filteredRecords
    .filter((record) =>
      tabValue === 0 ? record.confirmed === false : record.confirmed === true
    )
    .filter((record) =>
      Object.values(record).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  return (
    <Box sx={{ bgcolor: "white", py: 3, minHeight: "84vh", width: "100%" }}>
      <Box sx={{ width: "100%", px: 2 }}>
        <Paper
          elevation={2}
          sx={{
            p: 2,
            height: "100%",
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            border: "1px solid #1C1C1C",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            gutterBottom
            fontSize="1rem"
            color="#1C1C1C"
          >
            Invited People Records
          </Typography>

          {/* Tabs */}
          <Tabs
            value={tabValue}
            onChange={(e, newVal) => setTabValue(newVal)}
            sx={{ mb: 2 }}
          >
            <Tab label="Pending" disableRipple />
            <Tab label="Confirmed" disableRipple />
          </Tabs>

          <Box display="flex" justifyContent="space-between" mb={1}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#1C1C1C" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "100%",
                maxWidth: 400,
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleExcelExport}
              sx={{ ml: 2 }}
            >
              Export Excel
            </Button>
          </Box>

          <Box sx={{ height: "60vh", width: "100%" }}>
            <DataGrid
              rows={displayedRecords}
              columns={columns}
              getRowId={(row) => row.id}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              loading={loading}
              sx={{
                fontSize: "0.85rem",
                backgroundColor: "#fff",
                borderRadius: 2,
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#FFF5CC",
                  color: "#111",
                  fontWeight: 600,
                },
                "& .MuiDataGrid-cell": { py: 1 },
                "& .MuiDataGrid-footerContainer": { backgroundColor: "white" },
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminDashboard;

import useFetch from "./apiFetch";
import { Typography, Box, Button,Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import adminProfile from "../assets/images/admin_profile.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StatCard from "./StatCard";
import GroupsIcon from "@mui/icons-material/Groups";
import BarChartIcon from "@mui/icons-material/BarChart";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StudentTable from "./StudentTable";
import {CircularProgress} from "@mui/material";

function Home() {
  const { data, loading, error } = useFetch();

  if (loading) {
    return <CircularProgress/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
          }}
        >
          Student Overview
        </Typography>

        
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            padding: "5px 10px",
            border: "1px solid blue",
            borderRadius: "20px",
          }}
        >
          <Avatar
            src={adminProfile}
            sx={{
              width: 45,
              height: 40,
            }}
          />

          <Button
            sx={{ fontWeight: "bold" }}
            endIcon={<ArrowDropDownIcon />}
          >
            Admin
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          padding: 2,
          flexWrap: "wrap",
        }}
      >
        <StatCard
          icon={<GroupsIcon />}
          title="Students"
          value="100"
          bgColor="#eaf3ff"
          iconBg="#d2e5ff"
          color="#075ac7"
          
        />

        <StatCard
          icon={<BarChartIcon />}
          title="Avg score"
          value="78%"
          bgColor="#eafaf2"
          iconBg="#d5f3df"
          color="#087443"
        />

        <StatCard
          icon={<MenuBookIcon />}
          title="Subjects"
          value="5"
          bgColor="#f3efff"
          iconBg="#e4d9ff"
          color="#4d20b8"
        />
      </Box>
      <Paper sx={{
        width:"100%",
        margin:"10px",

      }}
      >

        <StudentTable data={data} />
      </Paper>
    </Box>
  );
}
export default Home;

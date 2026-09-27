import { Box, Typography } from "@mui/material";

function StatCard({ icon, title, value, bgColor, iconBg, color }) {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 180,
        height: 90,
        backgroundColor: bgColor,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        border:"1px solid lightblue"
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: 12,
            color: "#555",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: color,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export default StatCard;
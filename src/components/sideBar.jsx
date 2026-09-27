import { Typography, Box, Button } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";

function Menu() {
    return (
        <Box className="box" variant="section"
            sx={{
                minHeight: "100vh",
                width: "25%",
                display: "flex",
                flexDirection: "column",
            }
            }>
            <Box variant="section"
                sx={{
                    borderBottom: "2px solid darkblue",
                    display: "inline",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "10px"
                }}

            >
                <Typography variant="h5" component="h5"
                    sx={{
                        paddingTop: 2,
                        color: "white",
                        display: "flex",
                        gap: 1,
                    }
                    }>
                    <SchoolIcon />
                    Admin Panel
                </Typography>
            </Box>

            <Box
                sx={
                    {
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "10PX",
                        paddingLeft: "15px",
                        paddingRight: "15px"
                    }
                }

            >
                <Button startIcon={<HomeIcon />}
                    sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        color: "white",
                        padding: "10px",
                        "&:hover": {
                            backgroundColor: "darkblue",
                        },
                    }}
                >
                    Dashboard
                </Button>

                <Button startIcon={<GroupsIcon />}
                    sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        color: "white",
                        padding: "10px",
                        "&:hover": {
                            backgroundColor: "darkblue",
                        },
                    }}>
                    Students
                </Button>

                <Button startIcon={<MenuBookIcon />}
                    sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        color: "white",
                        padding: "10px",
                        "&:hover": {
                            backgroundColor: "darkblue",
                        },
                    }}>
                    Subjects
                </Button>

                <Button startIcon={<SettingsIcon />}
                    sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        color: "white",
                        padding: "10px",
                        "&:hover": {
                            backgroundColor: "darkblue",
                        },
                    }}>
                    Settings
                </Button>
            </Box>



        </Box>

    )
}

export default Menu;
import Menu from "./components/sideBar";
import Home from "./components/home";
import { Box } from "@mui/material";
import "./App.css"

function App(){
  return(
    <Box variant="section"
    sx={{
      display:"flex",
    }}>
    <Menu/>
    <Home/>
    </Box>
  )
}

export default App;
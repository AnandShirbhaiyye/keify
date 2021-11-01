import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

// import { NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { color, typography } from "@mui/system";
import { CardContent } from "@mui/material";
// import { mdiToggleSwitch } from "@mdi/js";

// import { BsSearch } from "react-icons/Bs";

// import MenuIcon from "@mui/icons-material/Menu";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Video() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "lightblue" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            <AiIcons.AiOutlineVideoCamera /> Video
          </Typography>
          <Search sx={{ backgroundColor: "white" }}>
            <SearchIconWrapper>{/* <BsSearch /> */}</SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Video"
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "black" }}
            />
          </Search>
          {/* <NavLink to="/all" exact>
            
          </NavLink> */}
          <div>
            <Button
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={handleClickOpen}
            >
              <AiIcons.AiOutlinePlus />
              Add
            </Button>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
              sx={{ marginLeft: "50%" }}
            >
              <AppBar sx={{ position: "relative", backgroundColor: "white" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: "black",
                    }}
                  >
                    {/* <CloseIcon /> */}
                    <AiIcons.AiOutlineClose />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1, color: "black" }}
                    variant="h6"
                    component="div"
                  >
                    Create a new Offer
                  </Typography>
                </Toolbar>
              </AppBar>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div sx={{ margin: "auto" }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue="Enter a name"
                  />
                  <TextField
                    required
                    id="outlined-disabled"
                    label="Slug"
                    defaultValue="Enter a slug"
                  />
                </div>
              </Box>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>

      <Card sx={{ widht: "90%", margin: "10px", display: "flex"}}>
        <Box>
          <CardContent >
            <typography style={{color:"blue",fontSize:"22px"}} >Simple interest</typography><br/>
            <typography style={{color:"black"}}>33454333 | </typography>
            <typography style={{color:"red"}}> Paid</typography>
          </CardContent>
          <Button variant="outlined" color="success"sx={{ml:"5px",marginBottom:"2px"}}>
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="success" sx={{ml:"5px",marginBottom:"2px"}}>
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="success" sx={{ml:"5px",marginBottom:"2px"}}>
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="success"sx={{ml:"5px",marginBottom:"2px"}}>
            Quantitative Apptitude
          </Button>
    
          {/* <Button variant="variant" color="success">
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="error">
            Quantitative Apptitude
          </Button> */}
        </Box>
        {/* <mdiToggleSwitch /> */}
    

        <Box sx={{ ml: "auto",fontSize:"45px",marginTop:"25px"}}>
          <BsIcons.BsToggleOn style={{color:"darkblue"}}/>
           <AiIcons.AiOutlineEdit style={{color:"green"}} /> 
          <AiIcons.AiOutlineMessage style={{color:"blue"}}/>
           <AiIcons.AiOutlineDelete style={{color:"red"}} /> 
        </Box>
        {/* <Box sx={{ mm: "auto",fontSize:"50px" ,color:"green" }}>
       < AiIcons.AiOutlineEdit />
        </Box>
        <Box sx={{ mm: "auto",fontSize:"50px" ,color:"lightblue" }}>
       < AiIcons.AiOutlineMessage />
        </Box>
        <Box sx={{ mr: "auto",fontSize:"50px" ,color:"red" }}>
        < AiIcons.AiOutlineDelete />
        </Box> */}

      </Card>

      <Card sx={{ widht: "90%", margin: "10px", display: "flex" }}>
        <Box>
          <CardContent >
            <typography style={{color:"blue",fontSize:"22px"}} >Simple interest</typography><br/>
            <typography style={{color:"black"}}>33454333 | </typography>
            <typography style={{color:"red"}}> Paid</typography>
          </CardContent>
          <Button variant="outlined" color="success"sx={{ml:"5px",marginBottom:"2px"}}>
            Highlights
          </Button>
    
          {/* <Button variant="variant" color="success">
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="error">
            Quantitative Apptitude
          </Button> */}
        </Box>
        {/* <mdiToggleSwitch /> */}
    

        <Box sx={{ ml: "auto",fontSize:"45px",marginTop:"25px"}}>
          <BsIcons.BsToggleOn style={{color:"darkblue"}}/>
           <AiIcons.AiOutlineEdit style={{color:"green"}} /> 
          <AiIcons.AiOutlineMessage style={{color:"blue"}}/>
           <AiIcons.AiOutlineDelete style={{color:"red"}} /> 
        </Box>
        {/* <Box sx={{ mm: "auto",fontSize:"50px" ,color:"green" }}>
       < AiIcons.AiOutlineEdit />
        </Box>
        <Box sx={{ mm: "auto",fontSize:"50px" ,color:"lightblue" }}>
       < AiIcons.AiOutlineMessage />
        </Box>
        <Box sx={{ mr: "auto",fontSize:"50px" ,color:"red" }}>
        < AiIcons.AiOutlineDelete />
        </Box> */}

      </Card>

      <Card sx={{ widht: "90%", margin: "10px", display: "flex" }}>
        <Box>
          <CardContent >
            <typography style={{color:"blue",fontSize:"22px"}} >Think without ink,fun QA learning</typography><br/>
            <typography style={{color:"black"}}>33454333 | </typography>
            <typography style={{color:"red"}}>Paid</typography>
          </CardContent>
          <Button variant="outlined" color="success"sx={{ml:"5px",marginBottom:"2px"}}>
           Highlights
          </Button>
    
          {/* <Button variant="variant" color="success">
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="error">
            Quantitative Apptitude
          </Button> */}
        </Box>
        {/* <mdiToggleSwitch /> */}
    

        <Box sx={{ ml: "auto",fontSize:"45px",marginTop:"25px"}}>
          <BsIcons.BsToggleOn style={{color:"darkblue"}}/>
           <AiIcons.AiOutlineEdit style={{color:"green"}} /> 
          <AiIcons.AiOutlineMessage style={{color:"blue"}}/>
           <AiIcons.AiOutlineDelete style={{color:"red"}} /> 
        </Box>
        {/* <Box sx={{ mm: "auto",fontSize:"50px" ,color:"green" }}>
       < AiIcons.AiOutlineEdit />
        </Box>
        <Box sx={{ mm: "auto",fontSize:"50px" ,color:"lightblue" }}>
       < AiIcons.AiOutlineMessage />
        </Box>
        <Box sx={{ mr: "auto",fontSize:"50px" ,color:"red" }}>
        < AiIcons.AiOutlineDelete />
        </Box> */}

      </Card>

      <Card sx={{ widht: "90%", margin: "10px", display: "flex" }}>
        <Box>
          <CardContent >
            <typography style={{color:"blue",fontSize:"22px"}} >GD Checklist</typography><br/>
            <typography style={{color:"black"}}>33454333 | </typography>
            <typography style={{color:"red"}}> Paid</typography>
          </CardContent>
          <Button variant="outlined" color="success"sx={{ml:"5px",marginBottom:"2px"}}>
            Quantitative Apptitude
          </Button>
    
          {/* <Button variant="variant" color="success">
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="error">
            Quantitative Apptitude
          </Button> */}
        </Box>
        {/* <mdiToggleSwitch /> */}
    

        <Box sx={{ ml: "auto",fontSize:"45px",marginTop:"25px"}}>
          <BsIcons.BsToggleOn style={{color:"darkblue"}}/>
           <AiIcons.AiOutlineEdit style={{color:"green"}} /> 
          <AiIcons.AiOutlineMessage style={{color:"blue"}}/>
           <AiIcons.AiOutlineDelete style={{color:"red"}} /> 
        </Box>
        {/* <Box sx={{ mm: "auto",fontSize:"50px" ,color:"green" }}>
       < AiIcons.AiOutlineEdit />
        </Box>
        <Box sx={{ mm: "auto",fontSize:"50px" ,color:"lightblue" }}>
       < AiIcons.AiOutlineMessage />
        </Box>
        <Box sx={{ mr: "auto",fontSize:"50px" ,color:"red" }}>
        < AiIcons.AiOutlineDelete />
        </Box> */}

      </Card>

      <Card sx={{ widht: "90%", margin: "10px", display: "flex",marginTop:"3px" }}>
        <Box>
          <CardContent >
            <typography style={{color:"blue",fontSize:"22px"}} >Types & Topics of GD</typography><br/>
            <typography style={{color:"black"}}>33454333 | </typography>
            <typography style={{color:"red"}}> Paid</typography>
          </CardContent>
          <Button variant="outlined" color="success"sx={{ml:"5px",marginBottom:"2px"}}>
            Quantitative Apptitude
          </Button>
    
          {/* <Button variant="variant" color="success">
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="error">
            Quantitative Apptitude
          </Button> */}
        </Box>
        {/* <mdiToggleSwitch /> */}
    

        <Box sx={{ ml: "auto",fontSize:"45px",marginTop:"25px"}}>
          <BsIcons.BsToggleOn style={{color:"darkblue"}}/>
           <AiIcons.AiOutlineEdit style={{color:"green"}} /> 
          <AiIcons.AiOutlineMessage style={{color:"blue"}}/>
           <AiIcons.AiOutlineDelete style={{color:"red"}} /> 
        </Box>
        {/* <Box sx={{ mm: "auto",fontSize:"50px" ,color:"green" }}>
       < AiIcons.AiOutlineEdit />
        </Box>
        <Box sx={{ mm: "auto",fontSize:"50px" ,color:"lightblue" }}>
       < AiIcons.AiOutlineMessage />
        </Box>
        <Box sx={{ mr: "auto",fontSize:"50px" ,color:"red" }}>
        < AiIcons.AiOutlineDelete />
        </Box> */}

      </Card>


    </Box>
  );
}

{/* <CardContent>
            <typography>Simple interest</typography>
          </CardContent>
          <CardContent>
            <typography>33454333| Paid</typography>
          </CardContent>

          <Button color="secondary">Highlights</Button> */}

            {/* <Button variant="variant" color="success">
            Quantitative Apptitude
          </Button>
          <Button variant="outlined" color="error">
            Quantitative Apptitude
        </Button>*/}
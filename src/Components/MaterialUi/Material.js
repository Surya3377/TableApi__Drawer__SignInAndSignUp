import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inbox from "./Pages/Inbox";
import Starred from "./Pages/Starred";
import SendEmail from "./Pages/SendEmail";
import Block from "./Pages/Block";
import Delete from "./Pages/Delete";
import AllMail from "./Pages/AllMail";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import TableApi from "../Table/TableApi";
import Maps from "../GoogleMaps/Maps";
import TableChartIcon from '@mui/icons-material/TableChart';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CircularProgress from '@mui/material/CircularProgress';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Material = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <MenuIcon /> 
              ) : (
                 <MenuIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding component={Link} to="/AllMail">
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="AllMail" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/inbox">
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/starred">
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/send-email">
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Send Email" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/Block">
              <ListItemButton>
                <ListItemIcon>
                  <BlockIcon />
                </ListItemIcon>
                <ListItemText primary="Block" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/Delete">
              <ListItemButton>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/Maps">
              <ListItemButton>
                <ListItemIcon>
                  <FmdGoodIcon />
                </ListItemIcon>
                <ListItemText primary="Maps" />
              </ListItemButton>
            </ListItem> <ListItem disablePadding component={Link} to="/TableApi">
              <ListItemButton>
                <ListItemIcon>
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="TableApi" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path="/AllMail" element={<AllMail />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/Block" element={<Block />} />
            <Route path="/Delete" element={<Delete />} />
            <Route path="/Maps" element={<Maps />} />
            <Route path="/TableApi" element={<TableApi />} />
          </Routes>
        </Main>
      </Box>
    </Router>
  );
}


export default Material;
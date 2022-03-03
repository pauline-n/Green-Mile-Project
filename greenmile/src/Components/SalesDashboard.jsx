import React from "react";
import "../App.css";
import {
  List,
  Divider,
  CssBaseline,
  AppBar,
  Drawer,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  TextField,
  Grid,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SuppliersList from "./SuppliersList";
import ClerksList from "./ClerksList";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#BAC6C4",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: ,
    padding: theme.spacing(3),
  },
}));
function SalesDashboard() {
  const classes = useStyles();
  return (
    <div className="base">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography> */}
          {/* <Box display="flex" bgcolor="grey.200" p={2} alignItems="center"> */}
          <Typography id="head1">Overall Sales</Typography>

          <Box flexGrow={1} textAlign="right">
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
              className="search"
            />
            <SearchOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
            <Button id="admin">Admin</Button>
            <IconButton>
              <Avatar>OP</Avatar>
            </IconButton>
          </Box>
          {/* </Box> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <img src="./images/logo2.PNG" alt="logo" />
        <div className={classes.toolbar} />
        <Divider />
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <SalesDashboard />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <SuppliersList />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ClerksList />
          </Grid>
          {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
                <BestAssisstant sx={{ height: "100%" }} />
              </Grid> */}
        </Grid>
        {/* <List>
          {["Sales", "Suppliers", "Clerks", "Orders"].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
          {["Returned items", "Blog", "Settings"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
      {/* <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Typography>React-bootstrap</Typography>
        <Box>
          <Button color="primary">Link</Button>
          <Button color="primary">Link</Button>
        </Box>
        <Box flexGrow={1} textAlign="right">
          <IconButton>
            <Avatar>OP</Avatar>
          </IconButton>
        </Box>
      </Box> */}
    </div>
  );
}

export default SalesDashboard;

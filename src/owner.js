import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Owner({owner, onClose}) {
  return (
      <Dialog
        fullScreen
        open={typeof(owner) === "object"}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
              <img style={{width: "30px"}} src={owner.country} alt="country" />
              {owner.firstName} {owner.lastName}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Address" secondary={owner.address} />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary="City" secondary={owner.city} />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary="Phone" secondary={owner.telephone} />
          </ListItemButton>
          <Divider />
        </List>
      </Dialog>
  );
}
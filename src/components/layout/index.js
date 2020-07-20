import react, { useState, Fragment } from 'react' 
import React from 'react' 
import { AppBar, Typography, Drawer } from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = ({
  AppBar: {
    display: "flex", 
    flexDirection: "row", 
    padding: '10px 2vw'
  }, 
  Icon: {

  }, 
  Title: {
    alignSelf: 'center', 
    fontSize: '1.3em'
  }
})

export const Header = props => {
  const [open, setOpen] = useState(false)

  const handleMenuOpen = event => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <AppBar position="absolute" style={styles.AppBar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={styles.Title}>
          H1k3r
        </Typography>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        >
        
      </Drawer>
    </Fragment>
  );
}
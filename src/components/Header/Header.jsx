import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();
  
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
          Trip advisor
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="flex-end" width="100%">
            <Typography  variant="h6" className={classes.title}>
              Explore new places
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    );
};

export default Header;

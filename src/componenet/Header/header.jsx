import { AppBar, Autocomplete, Box, createTheme, InputBase, Toolbar, Typography , Rating, Stack, TextField } from '@mui/material'

import React from 'react'
import useStyles from './style';
const Header = ({search , city , setcity}) => {
  const { classes } = useStyles();
  const handleChange = (event, value) => {
    if (value) {
      setcity(value.name); // Assuming you want to set `city` to the name of the selected country
    } else {
      setcity('london'); // Handle clearing if necessary
    }
  }
  return ( 
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new Places
          </Typography>
          <Stack className={classes.Search}>
            <Autocomplete
              options={search}
              getOptionLabel={(option) => option.name}
              onChange={handleChange}
              value={search.find((option) => option.name === city) || null} // Use an object that matches the structure of your options
              renderInput={(params) => <TextField {...params}  />}
            />
          </Stack>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
import React, { useState } from 'react'
import { FormControl , Select , Typography ,
  InputLabel,
  MenuItem,
  Grid,
  Paper
 } from '@mui/material'
import Place from '../PlaceHolder/place'

import useStyles from './style'
import Places from '../PlaceHolder/place'
const List = ({place , type , setType , rating , setRating , isloading}) => {
  const {classes} = useStyles()
  return (
    <Paper elevation={14} sx={{p:'20px' , mt:'20px'}}  className={classes.container}>
    <Typography variant='h4'>Hotels Restaurents & Attractions 
      around you </Typography>
    <FormControl variant="standard" className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select onChange={(e)=>{setType(e.target.value)}} value={type}>
        <MenuItem value="restaurants">Restaurants</MenuItem>
        <MenuItem value="hotels">hotels</MenuItem>
        <MenuItem value="attractions">Attractions</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant='standard' className={classes.formControl}>
      <InputLabel>Rating</InputLabel>
      <Select labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
          onChange={(event)=>{setRating(event.target.value)}}
          value={rating}

          >
          <MenuItem value={0}>Above 0</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
      </Select>
    </FormControl>
    <Grid container spacing={3} className={classes.list}>
      {isloading? <div>loading...</div>  : place?.map((Place , i)=>{
        return <Grid item xs={12} key={i}>
          <Places Place = {Place}/>
        </Grid>
      })}
      </Grid>  
    </Paper>
  )
}

export default List
import { MapContainer , Marker , Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useMap, useMapEvent } from 'react-leaflet/hooks'
import { Paper, Typography, useMediaQuery } from '@mui/material';
import { Rating } from '@mui/material';
import { ClassNames } from '@emotion/react';
import useStyles from './style';
import { useEffect } from 'react';

function Mycomponent({setCoord , setBound , city , search}){
  const map = useMap()
  useMapEvent('move', (event) => {
    const center = event.target.getCenter();
    const bounds = event.target.getBounds();
    setCoord([center.lat , center.lng])
    setBound({ ne: bounds.getNorthEast(), sw: bounds.getSouthWest() })
  });
  useEffect(()=>{
    let filteredCity  = search.filter((f)=>f.name === city)
    let lat = filteredCity[0].lat ? Number(filteredCity[0].lat) : 51.507351 
    let lng = filteredCity[0].lng ? Number(filteredCity[0].lng) : -0.127758
    setCoord([lat , lng])
    map.flyTo([lat , lng] , 14)
  },[city])
  
}


const Map = ({place , setBound , setCoord , coord , search , city}) => {
  let isDesctop = useMediaQuery('(min-width:600px)')
  const {classes} = useStyles()
  return (
    <Paper  elevation={8} sx={{ height: '85vh', width: '100%' , mt:'20px' , p:'20px'}}>
    <MapContainer center={coord} zoom={14} style={{ height: '80vh', width:'99.7%' }}>
      <Mycomponent setCoord = {setCoord} setBound = {setBound} city = {city} search = {search}/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
     {place?.map((Place , i)=>{
     return (<Marker position={
        Place.latitude && Place.longitude
        ? [Place.latitude, Place.longitude]
        : coord
      } key={i}>
       {isDesctop ? <Popup>
         <Paper className={classes.paper}>
           <Typography variant='body2'>{Place.name}</Typography>
           <img src={Place.photo ? Place.photo.images.small.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} />
           <Rating size='small'  value={Number(Place.rating)} readOnly/>
         </Paper>
       </Popup> :
         <Popup className={classes.paper}>
          <Typography>{Place.name}</Typography>
         </Popup>}
      </Marker>)
     })}
    </MapContainer>
    </Paper>
  );
}


export default Map
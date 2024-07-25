

import Header from "./componenet/Header/header.jsx"
import List from "./componenet/List/list.jsx"
import Map from "./componenet/Map/Map"
import Place from "./componenet/PlaceHolder/place"
import cities from 'cities.json'


import './App.css'
import { CssBaseline , Grid } from '@mui/material'
import { useEffect, useState } from "react"
import { FetchData } from "./utils/api.js"
import fetchUKCities from "./utils/cities.js"
function App() {
  const [place , setPlace] = useState([])
  const [bound, setBound] = useState(null)
  const [coord , setCoord] = useState([51.507351,-0.127758])
  const [isloading , setIsLoading] = useState(false)
  const [type ,setType] = useState('restaurants')
  const [rating , setRating] = useState(0)
  const [filterplace, setfilterplace] = useState([])
  const [search, setSearch] = useState([{name : "london"}])
  const [city , setcity] = useState('london')


  useEffect(()=>{
    setfilterplace(place.filter((value)=>{
      return Number(value.rating) > rating 
    }))

  },[rating])
  useEffect(() => {

    fetchUKCities().then((data)=>{

      setSearch(data)
    })
  }, []);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (bound){
        setIsLoading(true);
        FetchData(type , bound.sw, bound.ne).then((data) => {
          setPlace(data)
          setfilterplace([])
          setIsLoading(false);
        });
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [type,coord, bound]);
  return (
    <>
      <CssBaseline/>
      <Header 
      search = {search}
      city = {city}
      setcity = {setcity} />
       <Grid container  spacing={2} sx={{width:"100%"}}>
        <Grid item xs={12} md={4} >
          <List 
          place = {filterplace.length ? filterplace : place} 
          type ={type} 
          setType= {setType} 
          rating = {rating}
          isloading = {isloading} 
          setRating = {setRating}  
          setPlace = {setPlace}/>
        </Grid>
        <Grid item xs={12}  md={8}>
          <Map 
          place = {filterplace.length ? filterplace : place} 
          coord = {coord} 
          setBound = {setBound} 
          setCoord = {setCoord}
          search = {search}
          city = {city}/>
        </Grid>
      </Grid>
    </>
  )
}

export default App

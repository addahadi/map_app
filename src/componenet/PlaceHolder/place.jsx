import React from 'react'
import { Box , Card , CardContent , CardMedia, Typography ,  } from '@mui/material'
import useStyles from './style'
const Places = ({Place}) => {
  const {classes} = useStyles()
  return (
    <Card variant='outlined'>
      <CardMedia  style={{height:360}}
      image={Place.photo ? Place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
      title={Place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{Place.name}</Typography>
        <Typography  gutterBottom variant='body2'>{Place.description}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {Place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {Place.ranking}
          </Typography>
        </Box>       
      </CardContent>
    </Card>
  )
}

export default Places
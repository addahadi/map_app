import { makeStyles } from "tss-react/mui";
import { alpha } from "@mui/material";


const useStyles = makeStyles()((theme) => {
  return {
    title : {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
      },
    },
    Search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '300px',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',

    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: theme.spacing(2),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: 'space-between',
    },    
  };
});


export default useStyles
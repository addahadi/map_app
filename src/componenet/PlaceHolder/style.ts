import { makeStyles } from "tss-react/mui";
import { alpha } from "@mui/material";


const useStyles = makeStyles()((theme) => {
  return {
    chip: {
      margin: '5px 5px 5px 0',
    },
    subtitle: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
    },
    spacing: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
  }
});


export default useStyles
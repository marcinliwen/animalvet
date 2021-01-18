import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import MessengerIcon from './Icons/messenger'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';


const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiSpeedDial: {
        // Name of the rule
        root:{
          alignItems: 'flex-end',
          '@media (min-width: 700px)':{
            display: 'none',
          }
        },
        fab: {
          // Some CSS
         width: '42px',
         height: '42px',
         backgroundColor: '#F24C3D',
         '&:hover':{
            backgroundColor: '#F24C3D',
         },
         '@media (hover: none)': {
            '&:hover': {
                backgroundColor: '#F24C3D',
            },
          },
        },
        
      },
      MuiSpeedDialIcon:{
        root: {
          height: '20px'
        }
      }
    },
  });

const useStyles = makeStyles((theme) => ({

  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    
  },
  
}));

const whatsup_number = '+48506109445';

const wiadomosc = "Dzień dobry, chciałbym umówić się na wizytę";

const actions = [
  { icon: <PhoneIcon fontSize="small"/>, name: '+48 506 109 445', link:`tel:${whatsup_number}`, d_open: "30", d_close:"60" },
  { icon: <WhatsAppIcon  fontSize="small"/>, name: 'WhatsApp', link:`http://wa.me/${whatsup_number}/?text=${wiadomosc}` , d_open: "60", d_close:"30" },
  { icon: <MessengerIcon /> ,name: 'Messenger', link:'http://m.me/1331193130342453', d_open:"90" , d_close:"0"},
  
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleActionCLick = (e,link) =>{
    console.log(link);
    e.preventDefault();
    window.open(link, '_blank');
    
  }
  return (
     <ThemeProvider theme={theme} >
      <SpeedDial
        size="small"
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon icon={<PhoneIcon fontSize="small"/>}  openIcon={<CloseIcon fontSize="small"/>} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          /*<SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(e)=>{
              handleActionCLick(e, action.link);
              handleClose();
            }
            }
          />*/
         
          <a className="speed_link" style={{transitionDelay:(open ?`${action.d_open}ms`: `${action.d_close}ms`) }} href={action.link}> {action.name}</a>
        ))}
      </SpeedDial>
      </ThemeProvider>
  );
}

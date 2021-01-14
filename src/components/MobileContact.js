import React from 'react';
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
          '@media (min-width: 700px)':{
            display: 'none',
          }
        },
        fab: {
          // Some CSS
         width: '42px',
         height: '42px',
         backgroundColor: '#ff6290',
         '&:hover':{
            backgroundColor: '#ff6290',
         },
         '@media (hover: none)': {
            '&:hover': {
                backgroundColor: '#ff6290',
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

const whatsup_number = '506109445';

const wiadomosc = "Dzień dobry, chciałbym umówić się na wizytę";

const actions = [
  { icon: <PhoneIcon fontSize="small"/>, name: '+48500600700', link:`tel:${whatsup_number}` },
  { icon: <WhatsAppIcon  fontSize="small"/>, name: 'WhatsApp', link:`http://wa.me/${whatsup_number}/?text=${wiadomosc}`  },
  { icon: <MessengerIcon /> ,name: 'Messenger', link:'http://m.me/1331193130342453' },
  
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
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(e)=>{
              handleActionCLick(e, action.link);
              handleClose();
            }
            }
          />
        ))}
      </SpeedDial>
      </ThemeProvider>
  );
}

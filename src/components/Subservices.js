import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
//import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontFamily: 'inherit',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subservicesItem: {
    backgroundColor:  "#F0FAFE",
    padding: "0px 30px"
    
  }
  
}));

export default function Subservices(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="subservices-items">

    <div className={classes.root}>
        {props.subservices.map((item, index) => (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
            expandIcon={<ChevronDown viewBox="0 0 511.787 511.787" style={{ fontSize: 18 }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.subservicesItem}
            >
            <div className="subservices-title"><h4>{item.title}</h4></div>
            </AccordionSummary>
            <AccordionDetails>
            <p>
            {item.description}
            </p>
            </AccordionDetails>
            </Accordion>
        ))}
       </div>
    </div>
  );
}



function ChevronDown(props) {
    return (
        <SvgIcon {...props}>
            <path d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333
			C512.827,136.693,512.827,129.867,508.667,125.707z"/>      
        </SvgIcon>
    );
}
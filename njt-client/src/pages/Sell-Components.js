import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {
    Link
  } from "react-router-dom";

// css
import '../pages.css';

// images
import Background from '../images/background1.jpg';
import parts from '../images/parts.jpg';
import mitsubishiParts from '../images/mitsubishi-parts.jpg';

//logos 
import allenBradley from '../images/logos/allen-bradley.png'
import abb from '../images/logos/abb.png'
import baldor from '../images/logos/baldor.jpg'
import eaton from '../images/logos/eaton.png'
import fanuc from '../images/logos/fanuc.png'
import lenze from '../images/logos/lenze.png'
import mitsubishi from '../images/logos/mitsubishi.png'
import omron from '../images/logos/omron.png'
import rockwell from '../images/logos/rockwell.png'
import schneiderElectric from '../images/logos/schneider-electric.jpg'
import siemens from '../images/logos/siemens.png'
import yaskawa from '../images/logos/yaskawa.png'

// parts images
import servo from '../images/partsImages/servo.png'
import plc from '../images/partsImages/plc.png'
import powerFlex from '../images/partsImages/powerflex.jpg'
import dcDrive from '../images/partsImages/dcdrive.jpg'
import robot from '../images/partsImages/ROBOT.png'
import panelview from '../images/partsImages/panelview.jpg'




// icons
import faceIcon from '../images/Icons/faceiconBlack.png'
import handshake from '../images/Icons/handshake.png'

//MUI
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



//styles
const styles = (theme) => ({
    root: {
        flexGrow: 1,
      },
      card: {
        minWidth: 275
      },
      title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#454545',
      },
      paper: {
       fontSize: 'calc(.6rem + 2vw)',
       maxWidth: 400,
       width: '20vw',
       color: '#282828',
       opacity: '.7',
      },
      control: {
        padding: theme.spacing(2),
      },

header1: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '80vw',
    maxHeight: '500px',
    minHeight: '200px',
    textAlign: 'center',
    color: '#454545',
    fontFamily: 'Copperplate',
    opacity: '.7',
},

h1: {
paddingTop: 25,
fontSize: 'calc(1.1rem + 4vw)',
lineHeight: 1.2
},

divider: {
    backgroundColor: '#454545',
    height: 5,
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
},
div: {
    fontSize: 45
},
img: {
marginTop: 20,
maxWidth: 120,
width: '15vw',
opacity: '.7',
},
left: {
    width: '100%',
    marginRight: 0
},
reUse: {
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    fontWeight: 200,
    fontSize: 'calc(1rem + 2.5vw)',
    color: '#454545',
},
logos: {
    width: '80%',
    padding: '2%',
    paddingLeft: '10%',
    paddingRight: '10%',
    opacity: '.8'
}

});




class Sell extends Component {
    render() {
        
          const {
                classes
                
              } = this.props;
         return (
            <div>
            <div className={classes.header1}>
            <div className={classes.wanted}>
            <div className={classes.h1}>WANTED</div>
            <div className={classes.divider}></div>
            <div className={classes.div}>OLD + NEW PARTS</div>
            <div className={classes.divider}></div>
            </div>

            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container   
              justify="center"
              direction="row"
              justify="center"
              alignItems="center" spacing={3}>
               
                  <Grid item>
                    <div className={classes.paper}> 
                    Cash Paid
                    <div>
                    Today
                    </div>
                  
                    
                    </div>
                  </Grid>
                  <Grid item>
                  <img className={classes.img} src={handshake}/>
                </Grid>
                <Grid item>
                <div className={classes.paper}>
                Automation
                <div>
                Components
                </div> </div>
              </Grid>
              
              </Grid>
            </Grid>
          </Grid>

            </div>
            <div className="section">
            <div className="section1">
            <div className="firstchilds">
            <h1>
            Sell&nbsp;Surplus
            <div> Automation </div>
             Components
            </h1>  
            </div>
            <Grid container spacing={16}
            direction="row"
            justify="center"
            alignItems="center">
     
            <Grid item sm={4} xs={12} button component={Link} to="/sell" style={{ textDecoration: 'none' }}>
                <div className="block1">
                <img src={faceIcon}>
                </img>
                <div className="text">
              Contact
              <div>
              NJT </div>
              
                </div>
                </div>
            </Grid>
            </Grid>
            </div>
            </div>
            <img className="partsImage" src={parts}>
            </img>

            <div className="body">
            <section>
            <div className={classes.reUse}> Re-use Is The Most Efficient Form Of Recycling
            </div>
            <div className="wanted1">
            <h1> IMMEDIATE PURCHASE CONSIDERATION:</h1>
            <div>
            </div>
            </div>
            </section>

            <Grid container spacing={16}
                direction="row"
                >
                <Grid item sm={6} xs={12}>
                <div className="parts">
            <h1>
            Items:
            <section></section>
            Programmable Logic Controllers (PLC)
            <section>
            Servo Controllers
            </section>
            <section>
            Panel View Screens
            </section>
            <section>
            HMI and Touch Screens            
            </section>
            <section>
            Variable Frequency Drives (VFD)
            </section>
            and similar industrial controls
            </h1>
            <h2>
            Brands:
            <br></br>
            Rockwell Automation, Allen Bradley, Siemens, Lenze, 
            ABB, Banner, Schneider Electric, Omron, 
            Mitsubishi, GE, Rockwell, 
            Bosch, Danfoss, Baldor,
            Fuji, Reliant Electric, and more!
            </h2>
            NJT WILL PURCHASE ALL OF THE FOLLOWING:
            <br></br> 
            </div>
            </Grid>
            <Grid item sm={6} xs={12}>
            <Card className={classes.card}>
            <CardContent>
            <img className="partsImage" src={mitsubishiParts}>
            </img>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                INDUSTRIAL ELECTRONICS
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              Industrial electronics is a branch of electronics that deals with power electronic devices such as thyristors, SCRs, AC/DC drives, meters, sensors, analyzers, load sells automatic test equipment, multimeters, data recorders, relays, resistors, semiconductors, transistors, waveguides, scopes, amplifiers, radio frequency (RF) circuit boards, timers, counters, etc.
              </Typography>
           
            </CardContent>
          </Card>
            </Grid>
            <Grid item sm={12} xs={12}>
            <img className={classes.logos} src={allenBradley}>
            </img>
             
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={abb}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={eaton}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={baldor}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={fanuc}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={lenze}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={mitsubishi}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={schneiderElectric}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={rockwell}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={yaskawa}>
            </img>
            </Grid>
            <Grid item sm={6} xs={12}>
            <img className={classes.logos} src={omron}>
            </img>
            </Grid>
            </Grid>
            <Grid item sm={12} xs={12}>
            <img className={classes.logos} src={siemens}>
            </img>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
        
        <Grid container   
            justify="center"
            direction="row"
            justify="center"
            alignItems="center" spacing={3}>
        <Grid item sm={6} xs={12}>
              <Card className={classes.card}>
              <CardContent>
              <img className="partsImage" src={plc}>
              </img>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  PLC
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                A programmable logic controller (PLC) or programmable controller is an industrial digital computer which has been ruggedized and adapted for the control of manufacturing processes, such as assembly lines, or robotic devices, or any activity that requires high reliability control and ease of programming and process fault diagnosis.                </Typography>
              </CardContent>
            </Card>
            </Grid>
              </Grid>

              <Grid container   
              justify="center"
              direction="row"
              justify="center"
              alignItems="center" spacing={3}>
          <Grid item sm={6} xs={12}>
                <Card className={classes.card}>
                <CardContent>
                <img className="partsImage" src={servo}>
                </img>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Servo Drive / Controller
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                  Servo control is achieved by sending a servo a PWM (pulse-width modulation) signal, a series of repeating pulses of variable width where either the width of the pulse or the duty cycle of a pulse train (less common today) determines the position to be achieved by the servo.</Typography>
                </CardContent>
              </Card>
              </Grid>
                </Grid>

                <Grid container   
                justify="center"
                direction="row"
                justify="center"
                alignItems="center" spacing={3}>
                  <Grid item sm={6} xs={12}>
                  <Card className={classes.card}>
                  <CardContent>
                  <img className="partsImage" src={powerFlex}>
                  </img>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      AC Variable Frequency Drive
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    A variable-frequency drive (VFD) or adjustable-frequency drive (AFD), variable-voltage/variable-frequency (VVVF) drive, variable speed drive (VSD), AC drive, micro drive or inverter drive is a type of adjustable-speed drive used in electro-mechanical drive systems to control AC motor speed and torque by varying motor input frequency and voltage.                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
                  </Grid>

                  <Grid container   
                justify="center"
                direction="row"
                justify="center"
                alignItems="center" spacing={3}>
                  <Grid item sm={6} xs={12}>
                  <Card className={classes.card}>
                  <CardContent>
                  <img className="partsImage" src={dcDrive}>
                  </img>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      DC Electric Motor Drive
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    DC drives provide variable speed control for DC motors, ideal for applications requiring low speed control, torque and power. Speed adjustment is simple, typically using a potentiometer or analog input signal. IronHorse DC drives are available with either DC or AC input voltage input, and in open frame or NEMA 4/12 or 4X enclosed versions.                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
                  </Grid>


                  <Grid container   
                justify="center"
                direction="row"
                justify="center"
                alignItems="center" spacing={3}>
                <Grid item sm={6} xs={12}>
                  <Card className={classes.card}>
                  <CardContent>
                  <img className="partsImage" src={panelview}>
                  </img>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      HMI and PANELVIEW SCREENS
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    The HMI (Human Machine Interface) provides a textual or graphical view of system conditions and operations, vital information absent with simple pushbutton panels or switch banks. HMIs offer robust monitoring, control, status reporting and many other functions. Touch panels (including a headless version), message displays and text panels are available.                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
                  </Grid>

                  <Grid container   
                justify="center"
                direction="row"
                justify="center"
                alignItems="center" spacing={3}>
                <Grid item sm={6} xs={12}>
                  <Card className={classes.card}>
                  <CardContent>
                  <img className="partsImage" src={robot}>
                  </img>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      ROBOTS + REPLACEMENT PARTS
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Robotic process automation (or RPA) is a form of business process automation technology based on metaphorical software robots (bots) or artificial intelligence (AI) workers.                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
                  </Grid>

              </Grid>
          </Grid>

            </div>
            </div>
        )
    }
}

export default (withStyles(styles)(Sell))
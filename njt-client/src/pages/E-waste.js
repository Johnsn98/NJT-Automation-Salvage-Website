import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import {
    Link
  } from "react-router-dom";

// css
import '../pages.css';

// images
import eBackground from '../images/ebackground.jpg';

// icons
import faceIcon from '../images/Icons/faceiconBlack.png'
import recycle from '../images/Icons/recycle.png'

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
    backgroundImage: `url(${eBackground})`,
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
img: {
    marginTop: 35,
    maxWidth: 320,
    width: '25vw',
    },
wanted: {
    marginTop: 25,
    fontSize: 20,

},
cards: {
    textAlign: 'center'
},



});




export class eWaste extends Component {
    render() {
        const {
            classes
            
          } = this.props;
        return (
            <div>
            <div className={classes.header1}>
            <div className={classes.wanted}>
            Industrial E-Waste
            Removal and
            Recycling
            </div>

            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container   
              justify="center"
              direction="row"
              justify="center"
              alignItems="center" spacing={3}>
               
                  <Grid item>

                  </Grid>
                  <Grid item>
                  <img className={classes.img} src={recycle}/>
                </Grid>
                <Grid item>
           
              </Grid>
              
              </Grid>
            </Grid>
          </Grid>
            </div>
            <div className="section">
            <div className="section1">
            <div className="firstchilds">
            <h1>
            E-Waste
            <div> Removal&nbsp;& </div>
             Recycling
            </h1>  
            </div>
            <Grid container spacing={16}
            direction="row"
            justify="center"
            alignItems="center">
     
            <Grid item sm={4} xs={12} button component={Link} to="/" style={{ textDecoration: 'none' }}>
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
            <div className="body">
            <Grid container spacing={12}
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item sm={4} xs={12} className={classes.cards}>
            <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                fff
              </Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.cards}>
            <h1>fhiulwherg</h1> 
            </Grid>
            <Grid item sm={4} xs={12} className={classes.cards}>
            <h1>fhiulwherg</h1> 
            </Grid>
            </Grid>
            </div>
      </div>
            
        )
    }
}

export default (withStyles(styles)(eWaste))

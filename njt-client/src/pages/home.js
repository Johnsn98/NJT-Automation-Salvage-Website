import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

// jpeg icons
import handshake from '../images/Icons/handshake.jpg';
import recycle from '../images/Icons/recycleicon.jpg';
import plcIcon from '../images/Icons/plcIcon.jpg';

//Images
import parts from '../images/parts.jpg';
import worker from '../images/worker.jpg';
import machines from '../images/machines.jpg';
import globe from '../images/globe.jpg';

import Helmet from 'react-helmet';

//CSS
import '../App.css';

class home extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<meta
						property='og:image'
						content='https://njtautomation.com/static/media/parts.84e59de7.jpg'
					/>
					<meta
						id='og-image'
						property='og:image:secure_url'
						content='https://njtautomation.com/static/media/parts.84e59de7.jpg'
					/>
					<link rel='icon' href='/njt-client/public/NJT.png' />
					<meta name='viewport' content='width=device-width,initial-scale=1' />
					<meta name='theme-color' content='#000000' />
					<meta
						name='description'
						content='Sell Surplus and Used Automation Equipment - Milwaukee, WI'
					/>
					<link
						rel='apple-touch-icon'
						href='/njt-client/src/images/parts.jpg'
					/>
					<link rel='manifest' href='/manifest.json' />
					<title>NJT Automation Salvage</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'></meta>
					<meta NAME='geo.position' CONTENT='43.0389; 87.9065'></meta>
					<meta NAME='geo.placename' CONTENT='Milwaukee'></meta>
				</Helmet>
				<div className='header'>
					<h1> Keeping The Machines Alive </h1>
					<h2> An entire operation can hinge on one part </h2>
				</div>
				<div className='section'>
					<div className='section1'>
						<Grid
							container
							spacing={2}
							direction='row'
							justify='center'
							alignItems='center'>
							<Grid item sm={3} xs={12}>
								<div className='firstchild'>
									<h1>
										Services
										<div> For&nbsp;Your </div>
										Business
									</h1>
								</div>
							</Grid>
							<Grid
								item
								sm={3}
								xs={12}
								component={Link}
								to='/sell'
								style={{ textDecoration: 'none' }}>
								<div className='block'>
									<img src={handshake} alt='Sell Electronic E Waste'></img>
									<div>Sell Surplus Automation Components</div>
								</div>
							</Grid>
							<Grid
								item
								sm={3}
								xs={12}
								component={Link}
								to='/E-waste'
								style={{ textDecoration: 'none' }}>
								<div className='block'>
									<img
										src={recycle}
										alt='Recycle Electronic E Waste Milwaukee'></img>
									<div>
										E-Waste
										<section>Removal and Recycling</section>
									</div>
								</div>
							</Grid>
							<Grid
								item
								sm={3}
								xs={12}
								component={Link}
								to='/sourcing'
								style={{ textDecoration: 'none' }}>
								<div className='block'>
									<img
										src={plcIcon}
										alt='Recycle Electronic PLC  Milwaukee'></img>
									<div>
										Rare
										<section>Parts</section>
										Sourcing
									</div>
								</div>
							</Grid>
						</Grid>
					</div>
				</div>

				<div className='body'>
					<Link to='/contact' style={{ textDecoration: 'none' }}>
						<div className='wanted' component={Link} to='/contact'>
							<h1>AUTOMATION COMPONENTS WANTED</h1>
						</div>
					</Link>
					<Grid container spacing={2} direction='row'>
						<Grid item sm={6} xs={12}>
							<div className='parts'>
								<h1>
									Programmable Logic Controllers (PLC)
									<section>Servo Controllers</section>
									<section>Panel View Screens</section>
									<section>HMI and Touch Screens</section>
									<section>Variable Frequency Drives (VFD)</section>
									and similar industrial controls
								</h1>
								<h2>
									Brands: Rockwell Automation, Allen Bradley, Siemens, Lenze,
									ABB, Banner, Schneider Electric, Omron, Mitsubishi, GE,
									Rockwell, Bosch, Danfoss, Baldor, Fuji, Reliant Electric
								</h2>
							</div>
						</Grid>
						<Grid item sm={12} xs={12}>
							<img
								className='partsImage'
								src={parts}
								alt='Automation Parts'></img>
						</Grid>
					</Grid>
					<div className='images'>
						<div className='worker'>
							<h1>
								Saving old machines
								<div>saves jobs</div>
								and our planet
							</h1>
							<img src={worker} alt='Manufacturing Factory Worker'></img>
						</div>
						<div className='machines'>
							<h1>
								NJT
								<a href='sms:+1-414-331-5954'>
									<div className='phone'> (414)331-5954</div>
								</a>
							</h1>

							<img
								className='machines'
								src={machines}
								alt='Manufacturing Machines'></img>
						</div>
						<div className='globe'>
							<h1>
								Every corner of the globe
								<div>has automated machinery,</div>
								<div>commonly 20+ years old.</div>
								<div>It is far too costly to upgrade.</div>
								The old machines
								<div>must stay operational.</div>
							</h1>
							<img src={globe} alt='Global E commerce in manufacturing'></img>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default home;

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {
    Link
  } from "react-router-dom";

// jpeg icons
import handshake from '../images/Icons/handshake.jpg'
import recycle from '../images/Icons/recycleicon.jpg'
import plcIcon from '../images/Icons/plcIcon.jpg'

//componenets
import Helmet from 'react-helmet'


//CSS
import'../App.css';

class about extends Component {
    render() {

        return (
       
            <div>
            <Helmet>
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/njt-website.appspot.com/o/NJT.png?alt=media&token=ff4ac228-1bca-4f36-a8a5-9418d4efa9f2"/>
            <meta id="og-image" property="og:image:secure_url" content="https://firebasestorage.googleapis.com/v0/b/njt-website.appspot.com/o/NJT.png?alt=media&token=ff4ac228-1bca-4f36-a8a5-9418d4efa9f2"/>
            <link rel="icon" href="/images/small.png"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="description" content="About: NJT Automation Salvage"/>
            <link rel="apple-touch-icon" href="/images/icon.png"/><link rel="manifest" href="/manifest.json"/>
            <title>NJT Automation Salvage</title>
            <meta name='viewport' content="width=device-width, initial-scale=1"></meta>
          <meta NAME="geo.position" CONTENT="43.0389; 87.9065"></meta>
            <meta NAME="geo.placename" CONTENT="Milwaukee"></meta> 
            </Helmet>
            <div className="header1">
       

           
            </div>
            <div className="quote">
            <div className="quoteText">
            <h1> “In 30 years, the cover of Time Magazine will very likely be a very expensive robot.  
            It remembers better than you and it counts faster than you. 
            In 40 years, it will be broken and you can’t get replacement parts or afford a new robot.”
             <div> - Nathan Johnson </div>
             </h1>
             </div>
             </div>
            <div className="section">
            <div className="section1">
            <Grid container spacing={2}
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item sm={3} xs={12}>

            <div className="firstchild">
            <h1>
            About
            <div> </div>
             FAQ
            </h1>  
            </div>

            </Grid> 
            <Grid item sm={3} xs={12} component={Link} to="/sell" style={{ textDecoration: 'none' }}>
                <div className="block">
                <img src={handshake} alt="Sell Automation Equipment">
                </img>
                <div>
                Sell Surplus
                Automation
                Components
                </div>
                </div>
            </Grid>
            <Grid item sm={3} xs={12} component={Link} to="/E-waste" style={{ textDecoration: 'none' }}>
                <div className="block">
                <img src={recycle} alt="Recycle Automation Equipment">
                </img>
                <div>
                E-Waste
                <section>
                Removal and
                Recycling
                </section>
                </div>
            </div>
            </Grid>
                <Grid item sm={3} xs={12} component={Link} to="/sourcing" style={{ textDecoration: 'none' }}>
                 <div className="block">
                 <img src={plcIcon} alt="Sell PLC Milwaukee">
                 </img>
                 <div>
                Rare
                <section>
                Parts
                </section>
                Sourcing
                </div>
            </div>
            </Grid>
          </Grid>
            </div>
            </div>


            <div className="body">
            <div className="body1">
            <h1>ABOUT</h1>
            <p>
            NJT’s business model is to source parts from scrapped machines, surplus inventory, or parts from failed machine installations and resell them to operating factories.
            </p>
            <p>
            In many situations, utilizing a used or surplus part as a replacement could be the only course of action able to keep a machine running. This is due to the original manufacturers ceasing production of replacement parts after approximately 15 years. This situation happens often in the USA and other developed/industrialized countries but it is even far more common in developing countries where machines are kept running for longer with a lower budget. Machinery that is considered to be past its useful lifespan in one country, is often sold to another and used for years. NJT seeks to find those parts that keep the old machines running all over the world
            </p>
            <p>
            For example, a machine is upgraded in a factory in Green Bay, Wisconsin. The old electronics are removed and replaced with new versions. The company also has an inventory of replacement parts which were never used. Those old electronics and surplus parts are of no value now that the machine is updated and have to be recycled at a monetary expense or be disposed of to a landfill at an environmental expense in both situations. NJT offers an alternative where the parts can be sold and reused. This benefits the original factory and will likely save a factory is Mexico that can’t fix it’s machines without those parts. 

            </p>        
    
            <div className="divider"></div>
            <h1>FAQ</h1>
    
            <p>Q: Where is NJT Automation located?</p>
            <p>A: NJT is based out of Milwaukee, Wisconsin and services the surrounding areas. Items nearby will be picked up at your location. If you are not near Milwaukee or Chicago, NJT will still buy your items and have them shipped via Fedex or a similar shipping service.
            </p>
            <div className="divider"></div>
            <p>Q: How are the items picked up?</p>
            <p>A: After payment is received, NJT will come to your location and remove the items or arrange a shipping company to do so.</p>
            <div className="divider"></div>
            <p>Q: What types of Payment?            </p>
            <p>A: Items are purchased with cash or check. Paypal payment is also available.</p>
            <div className="divider"></div>
            <p>Q: What does NJT Automation do with the items?</p>
            <p>A: They are re-purposed and resold to other companies. Items that are in damaged condition will be repaired if possible or recycled for scrap materials. NJT will do minor repairs in house and outsource larger repairs to specialized companies or sell those damaged parts to a refurbishing center.</p>
            <div className="divider"></div>
            <p>Q: Where do you normally get your parts?</p>
            <p>A: Spare and surplus parts are not uncommon. Machines are constantly being upgraded and replaced. The best parts are new-in-box. Every factory has a spare-parts inventory. The parts are only used as back-ups. Eventually a machine is replaced with a newer unit and the company is left with the old parts that cannot be used on the new machine.</p>
            <div className="divider"></div>
            <p></p>
       



            <div className="divider">
            <h2>
SEO PURPOSES ONLY:

            Example Manufacturers: Allen Bradley, ABB, Agilent, Altek, Anritsu, Balluff, Banner, Buss, Cooper, Crouse-Hinds, Cutler-Hammer, DVT, Dwyer, Dynapar, Eaton, Eurotherm, Facet, Fanuc, Fluke, Furnas, GE, Gould, Hitachi, Hoffman, Honeywell, Hubbell, IDEC, IFM, J-Bert, Johnson Controls, Keyence, Keysight, Mitsubishi, Moog, Motion Industries, Norgren, Omega, Omron, Pepperl Fuchs, Philips, RCA, Red Lion, Reliance, Rhode & Schwarz, RKC, Schneider, Sick, Siemens, Sirco, Square D, Telemecanique, Toshiba, Westinghouse, Yaskawa

            ABB
Allen Bradley
Endress and Hauser
GE Fanuc
GE Industrial Systems
IMO Precision Controls
KB Electronics
Kuhnke Automation
Lenze
Mitsubishi
Siemens
Yaskawa
A-TEK Technology
AAIM Controls
ABB
ABB Automation
ABB Entrelec
ABB SSAC
AceTRONIC Industrial Controls
Action Instruments
ADGO
Advanced Energy Management
Advanced Micro Controls
Advantech
AGM Electronics
Alfa Laval
Allen Bradley
ALSTOM
AMK Drives and Controls
AMOT
AMT
Apex Control Systems
Applied Electronics
Aromat
Array Electronic
Asia Automation
Automated Jetting Systems
Automatic Feeder
AutomationDirect
AVG Automation Group
B&B Electronics
B&R Industrial Automation
Bachmann
BBH Products
Beck Electronic
Beckhoff
Beckhoff Automation
Beeco Motors & Controls
Berger Lahr Motion Technology
Berthel
BL Technology
Bosch
Boston Micro-Components
Bristol Babcock
BTR Controls
Burger & Brown Engineering
C&M Technology
Cambria Systems
CARLO GAVAZZI
Carotron
Carter & Crawley
Cegelec
Celerity
Cerus Industrial
Chandler Systems
Cleveland Motion Controls
CMC
CNI
Compass Engineering Group
CompuWeigh
CONDO Electric Industrial Supply
Control Engineering
Control Instruments
Control Microsystems
Control System Innovators
Control Technology
Converteam
Cross Electronics
Crouzet
Crouzet Automatismes
CST
Cubex
Custom Sensors & Technologies
Cutler Hammer
Danfoss
Data Flow Systems
Deep Sea Electronics
Deeter Electronics
Delta
Delta Products
Diamond Power
Divelbiss
DSP Control Group
DWFritz Automation
Easter-Owens Electric
Eaton Electrical
Eaton's Cutler
Eberle
EBERLE gmbh
ELAP
Electric Controls
Electrical Control Systems
Electro-Mec Products
Electronic Motor Drives and Services
Elevator Systems
Elsag Bailey
Elsist
Emerson
Emerson Network Power
Endress and Hauser
Entertron
Entertron Industries
Equipment Sales & Service
Escort Memory Systems
Eurotherm
Exor Electronic
EZAutomation
Fairmount Automation
Fanuc
Fatek Automation
Festo
FF Automation
Fiessler Elektronik
First Control Systems
Fisher & Paykel
Flexible Technolgies
FMC Invalco
Frakes Engineering
FS-Elliott
Fuji Electric
Function Control Systems
G & L Motion Control
Galil Motion Control
GE Fanuc
GE Industrial Systems
Gefran
Gefran/SIEI
General Industrial Controls
Gerhart
Ghardia-Western Data & Telephone
Giddings & Lewis
Gould
Grayhill
Groupe Schneider
HAWE Hydraulik
Heat and Control
Henkel
Hima
Hitachi
HollySys
Holt Electric
Homer Controls
Honeywell
Horner
Horner Electric
HORNER Europe
Houston Motor & Control
Howman Associates
Ibercomp
ICP DAS
Idaho Industrial Controls
IDEC
IDT
IMO Precision Controls
Industrial Control Links
Industrial Telemetry
Integrated Industrial Technologies
Interface & Control Systems
International Parallel Machines
Intrinsyc Software International
ioSelect
ISSC
Jetter
Jetter Automation
Jetter gmbh
JOKAB Safety
JPC Controls
Kanawha Scales & Systems
KB Electronics
KEBA
Keyence
Kirchner Soft
Klockner-Moeller
KMC Controls
KolverUSA
Kontron Modular Computers
Koyo
Kuhnke Automation
LabSmith
Lattice Semiconductor
Lenord Bauer
Lenze
LG Industrial Systems
Liyan Electric
Logic Technologies
LS Industrial Systems
Manufacturing Data Systems
Maple Leaf Environmental Equipment
Marlin Technologies
Master Control Systems
Matsushita
McBurney
Mearl's Machine Works
Melfi Technologies
Messung
Messung Systems
Micro-Comm
Microconsultants
Mid-South Power
Minarik
Mitsubishi
Mitsubishi Melsec
Modicon
Moeller Electric
Montgomery Technology
Moore Products
Motan
MTL Open System Technologies
Multi-power Products
MUT
National Instruments
Nematron
Northern Digital
Nota Bene Technology
Novation
Nyquist
OMEGA Engineering
Omron
Omron Electronics
Optimation
Opto22
Optrol
ORMEC Systems
P8
Panasonic
Parijat Controlware
Path Computer Systems
PEC Systems
Pilz
Pilz Automation Safety
Pixsys
PLC Direct
Pneumatic Conveying
Poscon
Power Service Concepts
Power Systems Specialists
Powerbase Automation Systems
Precision Engine Controls
Pressroom Electronics
Prime Controls
Pro-face
Process Control Solutions
Process-Electronic
Product Level Control
Programmable Control Service
Pyrometer Instrument
Pyrotech Electronics
Ramco Innovations
RC Systems
REAL Controls
Reliance
RGF Environmental Group
Rockwell Automation
Rockwell Software
RODI Systems
RTP
SABA
Saia-Burgess
Schleicher
Schneider Automation
Schneider Electric
Schultz Controls
Schweitzer Engineering Laboratories
SEL
Selectron
Selectron Process Controls
Serena Industries
Sharp
Shihlin
SICK
SIEI
Siemens
Sigmatek
Simple Worldwide
Sixnet
SMAR
Smar International
Smith Control Systems
SoftPLC
Solaris Automation
Spectrum Controls
SPLat
Square D
STA-CON
Star Engineering
Stevens Automation & Control Systems
STW Technic
Symax
Systems East
Systems Engineering Associates
TEC AUTOMATISMES
Teco
TECO-Westinghouse Motor
Tele-Denken
Telemecanique
Tesco Controls
Tex Computer
Thomas S. Brown Associates
TIGERFLOW Systems
Toshiba
Toyoda
Toyopuc
Triangle Research
Triconex
Trol Systems
UniControl
Unitronics
VIPA
Visionary Electronics
WAGO
Westinghouse
Westinghouse Numalogic
WOHRLE
XCALIBUR Automation
Yamatake
Yaskawa
Yokogawa
Z-World
            KEYWORDS: (SEO PURPOSES ONLY)
            ALLEN BRADLEY
            SCHNEIDER
            AUTOMATION
            ANRITSU
            FANUC
            NITON
            CISCO
            KEYENCE
            SIEMENS
            EXFO
            AGILENT
            FLUKE
            FUJIKURA
            TEKTRONIX
            GE INSPECTION
            JDSU
            SUNSIGHT
            3Z TELECOM
            EMERSON
            ABAXIS
            OLYMPUS
            OXFORD INSTRUMENTS
            MIDTRONIX
            Fiber cable tester, Thermal imaging camera, Signal generator, Robotic total station, Ridgid Seesnake Monitor, Spectrum analyzer, Pipe laser, Cable meter, Voc monitor, Circuit breakers, Multimeter, Meg Ohm Meter, Caterpillar Laser Receiver, Ohmmeter, GPS Locator, Videoscope, Radiodetection Transmitter, Thermometer, Imaging Total Station, Surveying Total Station, Pipe cable locator, Nav/comm test set, red beam pipe, Pulse Generator, Servo amplifier, Noise Dosimeter, Sokkia GPS, Tracker, Hydraulic Crimper, Veterinary Analyzer, Fiber Cleaver, Field Communicator, Mass Flow Sensor, Ferroscan, Arthroscopy, Spectra Precision, Inspection camera, Inductive Clamps, Calibrator, GeoRadio, Insulation Tester, Power Meter, Micrometer, Total Station System, Tool, Receiver, Spectrum, Dual Slope, Automotive Diagnostic Service Scanner, Infrared Camera. Fluke, Flir,Fujikura,Niton, Leica, Topcon, Spy, Metasys, XRF, Frequencies Analyzer,Niton,AEMC,3M, Aligent, Hilti,
            Snap-on (code readers and scanners) EDGE,VERUS,MODIS,zeus,VERDICT,EEHD,EETM,EEMS
            Fluke network (DTX-1800, DSX-5000, DSX5000, DSX-8000 etc)
            Anritsu (s332E, 331E, 362E s331*,s332*,s361,s362,s820,MW8211,37369,68369,MS2724,MS2723,MS2711,MS8609,MS2712,MS2713,MS2721,MT9083,MU250000,MT8220,MT8222,MT8852,MT8212,MS9710,68147,ML2487,S810D, sitemaster etc)
            Exfo (FTB,MAX,FOT,AXS,FIP)
            Digitrak
            Fujikura (FSM-70R, FSM-70S,FSM-60S,FSM-60R,S33595, 19S, 18S etc)
            Oxford Hitachi X-MET8000
            Aeroflex IFR 6204B
            FixturLaser NXA Pro Shaft Alignment
            Fujikura FSM-40PM
            Hilti PS1000 X-Scan
            Pruftechnik Rotalign Ultra IS
            Schneider Electric MasterPact
            GE XL GO Borescope Inspection Camera
            Fluke 437-II Series II 3
            Kaelus iPA-1921A
            Exfo FTB 1 SM MM
            EXFO FTB-1 Pro FTB
            Schneider Electric Square D S33595
            FLIR E75
            Fujikura 70R Fusion Splicer
            Sumitomo Quantum
            Fluke Ti450, Fluke TI55FT-20 IR, EXFO FTB-500 OTDR, Fitel S178A Version 2
            Ideal LanTEK II 2 1000MHz
            AFL Noyes C850
            Abaxis Vetscan VS2
            Dranetz HDPQ
            Ametek PK2-854WC-SS
            Medtronic IPC Console
            Fluke 753
            Noyes M210
            Corning OTS-613QD QUAD
            AFL Noyes OFL 280-100
            JChadwick 8400K
            Subsite Utiliguard T5
            Subsite TK
            Agilent
            Olympus Omniscan
            thermo scientific
            thermo niton
            trilithic
            afl noyes
            sinora
            schick
            Dexis
            sensors
            inno
            SQUARE D S33595
            aeroflex
            3m dynatel
            EPOCH
            TOPCON
            Pruftechnik Optalign
            SPX RadiodetectioN
            SIEMENS (6ES...,6AV...,6FC...,6SN... Series NEW CONDITION MODELS ONLY)SIEMENS
            olympus panametrics
            olympus innov
            spectrometer
            Johnson controls
            Leica
            jdsu
            hart 475
            DITCH WITCH
            NOYES AFL
            MIDTRONICS
            aBAXIS (VETSCAN ETC)
            flir
            NITON XLT
            INNO VIEW
            CORNING
            UTILIGUARD
            GE INSPECTION
            IDEAL LANTEK
            LASER SHAFT ALIGNMENT
            FLAW DETECTOR
            MEGGER
            tektronix
            Niton
            KEYSIGHT
            Spectrum Analyzer
            fuion splicers
            survey EQUIPMENT
            UNDERGROUND LOCATOR
            RD8100
            kaelus
            midtrONICS
            OLYMPUS EPOCH
            GLIDESCOPE
            CONSTRUCTION EQUIPMENT
            MEASUREMENT EQUIPMENT
            SQUARE D
            SNEIDER ELETRIC
            Inspection Gauges
            
            ANTENNA ANALYZER
            UNDERGROUND LOCATOR
            FUSION SPLICER
            FIBER
            CABLE CERTFIER
            ADVANTEST
            YOKOGAWa
            ERICSSON
            magnetometer
            SONOSITE
            kaelus
            sinton
            SCHNeider ELECTRIC
            endress hauser
            ideal LANTEk
            GLIDESCope
            NAtional instrumentS
            rae systems
            midtrONICS
            TRICOnex
            abb
            GE MULTILIN
            SKF TMEA
            Dranetz
            dynatel
            Alber Cellcorder
            Verathon BladderScan
            GE DASH
            Welch Allyn
            MEGGER
            INNOV
            IDEAL 61-959
            T-Drill Model T-60
            WACKER DPU
            Ridgid
            Zeiss 20x60
            LEICA
            NIKKOR
            ROKINON
            ANGENIEUX
            MINOLTA
            FUJINON
            SIGMA
            DEXIS
            Profoto
            Broncolor
            H4D-50
            Leica M 10 24.0MP
            Leica
            NewTeK TRICASTER
            Freefly Alta 8
            GE LOGIQ
            Beep Pipe Laser, Alignment, Dynatel,Wohler,IFR, Flaw Detector, Olympus, Radiodetection, Anritsu, JDSU, Digitrak, Ditch Witch, Grade Control Receiver, Sonosite, Acterna, Exfo, WaveTek, Trilithic, Midtronics, Aeroflex, Corning, Rycom, Olympus, Nibco, GE inspection, Yokogawa, Fieldfox, Hart, Subsurface, NAE, Metrotech, Sumitomo, Tektronix, Honeywell,
            do NOT contact me with unsolicited services or offers

            Local Supply house always looking to buy more inventory. We buy and sell new and used commercial and industrial electrical equipment.
Circuit Breakers
Transformers up to 500 KVA
Motor Controls
PLC's
Drives
Switchgear
Disconnects
Bus Plugs
Breaker Panels

            Industrial Items - Industrial Sand Blast Cabinet, Jet Horizontal Band Saw, Ridgid 300 Compact Threader, Pexto 137 Shearer, Flagler Sheet Metal Tools, Roper Whitney, Table Top Brakes, Sheet Metal Rollers, Knurlers, Ridgid Dies, Ridgid Pipe Vises, Drill Presses, Honda Industrial Power Washer, Gas Powered Weed Mower, Battery Operated Small Lift, Ridgid Hand Power Threader, Hilti TE, Com-A-Longs, Metal Carts, Lectro Lift Truck, Metal Stands, Etc. Commercial Fridge, Clausing Lathe, Check back more to come, Clausing Single Phase Metal Lathe w/ Steady Rest, Chuck Accessories and Manuals, Kennedy Roller Box, Kennedy Machinist Tool Box, Sheet Metal Rollers, (Consignors wanted)
            Qty 8 Allen Bradley 2085-OF4 - Factory sealed = $395
            Qty 8 Allen Bradley 2085-IF4 - Factory sealed = $395
            Qty 10 Allen Bradley 2711R-T4T/A - Factory sealed = $495
            Qty 8 Allen Bradley 2711R-T7T/A - Factory sealed = $650
            Qty 5 Allen Bradley 2080-SERIALISOL/A - Factory sealed = $325
            Qty 7 Allen Bradley 2080-LC30-16AWB/A - Factory sealed = $525
            Qty 3 Allen Bradley 2080-LC50-24QWB - Factory sealed = $599
            Qty 2 Allen Bradley 22F-D8P7N103/A - Factory sealed = $595
            Qty 5 Allen Bradley 25A-D010N104 /B - Factory sealed = $695
            Qty 3 Allen Bradley 25B-D037N114 /A - Factory sealed = $2595
            Qty 5 Allen Bradley 150-C43NBD /B - Factory sealed = $795
            Qty 5 Allen Bradley 150-C60NBD /B - Factory sealed = $995
            Qty 2 Allen Bradley 150-C108NBD /B - Factory sealed = $3595
            Qty 3 Allen Bradley PowerFlex 753 VFD Drive 20F1AND156AN0NNNNN - Factory sealed = $7995
            Qty 5 ABB ACS355-03U-15A6-4+J400 - Factory sealed = $995
            Qty 2 ABB ACS550-U1-157A-4 - Factory sealed = $6595
            Qty 10 Siemens - 7MF4033-1BA10-1NC6-Z - Factory sealed = $850
            Qty 2 TOSHIBA VFAS1-4370PL-HN - Factory sealed = $4500
            est Equipment: Frequency Meters - PIM Analyzers - Scope Meters – Testers – Oscilloscopes – Fluke – Antritsu - HP

            Other: Surveying Equipment - Networking Equipment
            
            Example Manufacturers: Allen Bradley, ABB, Agilent, Altek, Anritsu, Balluff, Banner, Buss, Cooper, Crouse-Hinds, Cutler-Hammer, DVT, Dwyer, Dynapar, Eaton, Eurotherm, Facet, Fanuc, Fluke, Furnas, GE, Gould, Hitachi, Hoffman, Honeywell, Hubbell, IDEC, IFM, J-Bert, Johnson Controls, Keyence, Keysight, Mitsubishi, Moog, Motion Industries, Norgren, Omega, Omron, Pepperl Fuchs, Philips, RCA, Red Lion, Reliance, Rhode & Schwarz, RKC, Schneider, Sick, Siemens, Sirco, Square D, Telemecanique, Toshiba, Westinghouse, Yaskawa
            Air Compressor PARTS, Small Oilless Compressors, Tanks, Filters, Regulators, Dryers, Fittings, Mars Air Curtains, Hose, Gardner Denver Oil/Water Eliminator, Ingersoll Rand Filter, Great Lakes Air Dryer
Air Conditioners - 3 -Phase Military Window and Tent AC Units Used and Unused (NO Single Phase Household AC Units or Heat Pumps)
Auto / Truck Forklift Parts - Forklift Tires Trailer Tires, Brakes, Cylinders, Large Griffin Aluminum Radiators (4 Core - 100# ea), Mufflers, Driveshafts, Fuel Tanks, Cat and Detroit Diesel Parts, Oil and Air Filters, Truck Rooftop Air Deflector 36”x67”
Aviation - Flight Jackets, Parts, Test Equipment, Tires, Airport Marker Lights
Banking - Diebold Teller Drawers, Diebold Vat 21 Tube Parts, Diebold Night Deposit Boxes, Diebold Electronics
Bearings - Sleeve, Ball, Annular, Duplex, Thrust, Roller, Needle, Tapered
Building Materials - 4” Maple, Windows, Doors, Trim, 2-/12” x 7’ Clear Pine Colonial Casing (2 Skids 2,300 pcs), 4-1/2” Finger Jointed Split Door Jambs (1 Skid 450 pcs), 6-1/2”x1-1/4”x86” Exterior Door Jambs with WeatherStripping, 7-14”x1”x86” Clear Interior Door Jambs, 1”x3/8”x7’ Finger Jointed Door Stop (1 Skid 2,400 pcs), Fireplace Mantels, Window and Door Molding, Closet Pole, 16’ Wood Garage Door Weather Strip NO Baseboard
Owens Corning Culture Stone - 4 Pallets 19”x20” Heath Blond, 1 Pallet Antique Red Brick, 1 Pallet Mojave Stone , 5' and 10' ChainLink Fence, 10' Chainlink Gate with Posts and Barbwire
Cages - Rolling Security/Storage
Grease, Oil, Coolant
2 Trailer Mounted Electric Dive Air Compressors, 1 Diesel skid Mounted Dive Compressor
Electrical - Diesel Generators, Power and Lighting Panels, 800amp Assco GeneratorTransfer Swithch and GE Spectra UPS Transfer Switch, Lighting, Ballast, Wiring, Starters, Contractors, Disconnects, Conduit Fittings, Appleton Fittings, Outlet Boxes, Transformers, Electric Motors, Cable Assemblies, Power Supplies, Incandescent/Florescent, Auto, Outdoor Light Bulbs, GE, SquareD, FPE, Westinghouse, Allen Bradley, Fiji and Mitsubishi Breakers
Equipment - Ditch Witch Trencher, Diesel Air Compressor/Lube Units, Portable Heaters, Jacobsen Diesel 15’ Lawn Mower (12-15 acres/hr), Warehouse/Airplane 4 Cylinder Chrysler Tow Tractors
Exercise Equipment - Commercial Nautilus, Body Master, StairMaster
Fans/Blowers - Coppus
Fire / Safety - Respirators, Eye Wash, Fire Suits, Cabinets, Akron Nozzles
Frequency Drives - Danfoss, Square D, GE/Fugi
GearBoxes - Falk
Hardware - Nuts, Bolts, Screws, Gun Nails, Hinges, Latches
Heating - New/Unused Apollo Hot Water Air Handler, Carrier/Climate Master/Water Furnace Geo-Thermal Heat Pumps, Cast Iron Radiators (NO Electric Air Heat Pumps Only GEO-Thermal)
Heat Exchangers - Heliflow, FanEx, ITT, American Standard, York
Hose - Rubber, Air, Water, Steam, Ventilation, Insulated
Hot Water - 18 kW Steam Boiler, 50 Gallon Gas Hot Water Tanks, 80 Gallon Commercial Hot Water Heater, Hatco Electric Hot Water Heaters, Western Shelter Portable Diesel Hot Water Heater New Unused (No Electric Household Hot Water Heater)
Hydraulic - Parker Hose Crimper, Fittings, Hose, Pumps, Motors, Valves, Controls, Denison, Vickers, Parker, Eaton Pumps
Industrial - Heat Exchangers, Pumps, Motors, Fiberglass Deck Grates 3' and 4’ Wide up to 12’ Long
Janitorial - Mops, Brushes, Broom Heads, Paper Towel and Toilet Paper Dispensers, Cleaning Supplies
Marine - Navy Aluminum/Stainless Steel Furniture (Cadenza, Tables, Chairs, Desks, File Cabinets) Fenders, Props, Shafts, Doors, Hatches, Captains Chairs, Hardware, Zincs Anodes, 400# Rock Anchors, Wiper Motors, Dock Cleats, Lighting, Maxin Silencer Muffler 52” x 71”
Material Handling/Rigging - Jib Crane, Rollers, Electric/Air/Manual and Explosion Proof Chain Hoists, Yale and Budgit Chainfalls, Spreader Bars, I Beam Trollies, Blocks, Wire, Shackles, Slings, Bradley Drum and Flask Lifters
Portable Sinks
Metals - Small 8' Steel Beams, Stainless Steel, Steel, Aluminum and 2' Brass Pipe
Military - Parts, Larc Tires, Fifth Wheels, Copper/Brass Radiators
Office Equipment - Desks, Cabinets, Supplies
Packing Materials - Metal Banding, Banding Clips, Cardboard Boxes, Foam
Plumbing - Fittings, Drains, Sinks, Showers, Tubs, Whirlpool Baths, Shower Doors, Expansion Tanks
Pumps - Stainless Steel Bull Dog, 5hp Prosser Submersible/Inline Pump
Portable Darkrooms - Complete Photo Development Containers
Railroad - Parts, GE Transportation Oil Filters and Electric Motors, GE/Howden Fan Motors
Ramps - Loading, DockBoards
Restaurant - Ref/ Freezers, Hobart Bowl, Stove Hoods, Dough Carts, Steam Kettles, Dishwashers, Water Heaters, Cold Table, Ash Trays
Rubber Overshoes
Sand Blast Grit - 220 Aluminum Oxide (7 tons)
Shop Equipment - Vidmar Cabinets, Safety Cabinets, Oil Filter Crushers, Tire Equipment
Shipping - Containers
Tanks - 1050 Gallon Chem-tainer Conical Tank with Base, 300 Gallon Horizontal Plastic Tank
Tires - New Old Stock Industrial, Forklift, Military, Solid Bias Truck Trailer, Used Radial Car and Truck
Tools - Hand Tools, Air, Pneumatic, Electric, Welding, Dewalt and Milwaukee Parts (2 Pallets)
Trailer - 4 Wheel Aluminum Trailer with Fuel Tank - Overall Size 68”W x 8’-6” Long x 19” Tall,
UPS - APC
            </h2>
            </div>


            <div className="divider">
            <h2>

            SEO PURPOSES ONLY: 

            WANTED COMPUTER SERVERS, NETWORKING, HARD/SSD DRIVES, MEMORY & MORE!

            We BUY USED & NEW COMPUTER SERVERS, NETWORKING, MEMORY-RAM, CPU’s-PROCESSORS, DRIVES & STORAGE ARRAYS, HARD DRIVES, SSD DRIVES, SOFTWARE, IP PHONES, TELECOM, DATA COM, DATA CENTERS, SATELLITE COMMUNICATIONS & LOTS MORE.
            
            We BUY used & new IT equipment, Networking, Telecom, Data Com, Data Center, Data Storage, Satellite Communications and more.
            
            If you have high end high value Cisco, Juniper, EMC, NetApp, Brocade, Calix, Ciena, Nortel, Alcatel - Lucent, Arista, Cyan, Fujitsu, Hitachi, Intel, AMD, Seagate, Western Digital, Hynix, Dell, Apple, Mac, HGST, Kingston, Samsung, Polycom, Avaya, NEC, Toshiba, Ericsson, Microsoft, Scientific Atlanta, Allen Bradley, SuperMicro, HP, IBM, Infinera and many others.
            
            We buy used and new computer networking, telecom, data com, data/drive/disk storage, satellite communications & other equipment. We buy high value equipment. We will buy in large quantities or single units as long as it is something we need. We do not buy junk or scrap. We do not buy single PC’s or laptops. We do buy them in large quantities only.
            
            We pay you the same day via Paypal and other payment types. We also can come to your location to take care of transactions & business deals depending on the size and scope of the deal. Of course meaning larger pick ups and sales volume. Or you can ship to us on our account at no charge to you. We buy nationwide as well as from all over the world.
            Please email a detailed list of what you are selling. Make sure to include quantities, makes, models, condition, description etc. Also provide your contact info on this email (regular email, name and phone #.) Responses received that do not contain proper info and or are irrelevant will not be replied back to. Please make sure you read this want to buy!
            
            
            PLEASE LOOK BELOW AT ALL THE THINGS THAT WE ARE BUYING. PLEASE NOTE NOT EVERYTHING WE BUY IS LISTED, SO FEEL FREE TO EMAIL ME IF YOU HAVE OTHER EQUIPMENT OF HIGH VALUE.
            
            WE BUY CISCO ACCESS POINTS-AIR, SWITCHES, ROUTERS, MEMORY, UCS SERVERS $ MORE!
            
            $ WE BUY COMPUTER NETWORKING, SERVER MEMORY, SSD DRIVES, DRIVE STORAGE ARRAYS, HARD DRIVES, INTEL PROCESSORS, DATA COM, TELECOM & MORE - CISCO, EMC, NETAPP, INTEL, BROCADE, JUNIPER, CIENA, SCIENTIFIC ATLANTA, ALLEN BRADLEY, NORTEL, IBM, HP, ALCATEL & MORE! $
            
            $ WE BUY Computer Networking, Servers, Server memory, Disk Storage Cisco, EMC, NetApp, Apple/Mac, IBM, HP, Ciena, Intel, Dell, Brocade & alot more.
            
            LOOK BELOW TO SEE WHAT ALL WE ARE BUYING. WE BUY BOTH USED AND NEW.
            
            We BUY Cisco ASR1001, ASR1002, ASR1004, ASR1006, ASR1009 and many others.
            
            CISCO A9K, ASR, Nexus N5K, N3K, N9K, N77 series & lots more.
            
            **NOTE WE BUY A LOT OF MODELS NOT LISTED**
            
            WANTED CISCO ACCESS POINTS-AIR, SWITCHES, ROUTERS, SERVER MEMORY, UCS SERVERS & MORE!
            
            CISCO NCS2K-100G-CK-C, CISCO NCS2K-200G-CK-C, CISCO 15454-M-10X10G-LC, CISCO 15454-M-100G-LC-C, CISCO 40X-10GE-WLO, NCS2K-100ME-CKC & many others.
            
            I am looking to buy quantities of each of the below & many others that are not listed.
            
            CISCO NCS2K-100G-CK-C, CISCO NCS2K-200G-CK-C, CISCO 15454-M-100G-LC-C, CISCO 15454-M-10X10G-LC and many others.
            
            I am buying the below Cisco switches used and new. I also buy lots of other Cisco equipment and other makers.
            
            We buy all Cisco ASR series equipment and Cisco A9K series equipment and lots more. We buy Cisco Nexus and most all high end equipment.
            
            Any Cisco ASR1001, ASR1002, ASR1004, ASR1006, ASR1009 and many others.
            
            
            Cisco Catalyst 9300 & 9400 Series and many others.
            
            C9400-LC-48U, C9400-LC-48T, C9400-LC-48UX, C9400-LC-24XS, C9400-LC-48P, C9400-LC-24S, C9400-LC-48S and others plus 9300 series.
            
            We buy most all Cisco switches. We buy many others not listed.
            
            WS-C2960S series, WS-C2960X series, WS-C3560 series ( E, G and X series ), WS-C3750 series ( E , G and X series ), WS-C3850 series – Others....
            
            We buy Access Points many more that are not listed.
            
            AIR-CAP2702E-A-K9, AIR-CAP2602E-A-K9, AIR-CAP2602E-A-K9, AIR-SAP2602I-A-K9, AIR-CAP3702I-A-K9, AIR-CT2504-5-K9, AIR-AP1852I-x-K9, AIR-AP1852E-x-K9, AIR-AP2802I-x-K9, AIR-AP2802E-x-K9C & others.
            
            JUNIPER
            MX Series:
            MX240, MX480, MX960
            MX5, MX10, MX80, MX104, MX204
            MPC3E, MPC4E, MPC5E, MPC7E, MPC8E, MIC3, MIC, Power supplies
            SRX Series:
            SRX1500, SRX4200
            EX Series:
            EX2300, EX3400, EX4300, EX4550, EX9200
            QFX Series:
            QFX5100, QFX5200, QFX5300
            
            WE ALSO BUY LOTS OF OTHER JUNIPER EQUIPMENT NOT LISTED ABOVE.
            
            
            
            GET TOP DOLLAR FAST FOR YOUR MEMORY, RAM, CPU AND PROCESSORS & MORE!
            
            WE BUY Memory, RAM, CPUs, Processors & lots more!
            
            Simply put, we are the most responsive, efficient buyer of Memory, RAM, CPUs, and Processors, new or used.
            
            You get free shipping/freight (no geographic restrictions). You ship on our account no expense to you.
            
            We pay you the same day via Paypal and other payment forms on approval. We also can come to your location to take care of transactions & business deals depending on the size and scope of the deal. Of course meaning larger pick ups and sales volume.
            
            ***Please email a very detailed list of what you are selling. Please provide all your contact info on your response including (regular email, name and phone #.)***
            
            
            We purchase Memory, RAM, CPU and Processors in quantity.
            
            Here Are Some Examples of Memory/RAM Types and Brands That We Buy:
            
            DDR4 and DDR3: Server Memory/RAM
            DDR4 and DDR3: Desktop Memory/RAM
            DDR4 and DDR3: Laptop Memory/RAM
            
            Samsung
            Cisco
            Kingston
            Infineon
            Elpeda
            Micron
            Dell
            Sun
            Adata
            Edge
            Hynix
            IBM
            Nanya
            Corsair
            Tricor
            Crucial
            HP
            Patriot
            Qimonda
            And more…
            
            
            We Buy Most Types of CPUs and Processors. Here Are Some Examples:
            
            Intel Core family: i9, i7, i5, i3
            Intel Xeon family: E3, E5, E7, (V2, V3, V4)
            Intel Xeon Platinum processor family
            Intel Xeon Gold processor family
            Intel Xeon Silver processor family
            Intel Xeon Bronze processor family
            Intel Xeon W- Processor family
            AMD: Opteron and Ryzen
            
            We buy drive/disk storage arrays. We also buy hard drives used and new. We prefer to buy them only in large quantities.
            
            We buy used and new EMC VNX2 Series VNX5200, VNX5400, VNX5600, VNX5800, VNX7600, VNX8000 & Dell/EMC FC5300, FC4500 and FC4700-2 fibre channel storage arrays. We also buy lots of other models not listed.
            
            We also buy used and new Dell EqualLogic PS Series: PS4100, PS4210, PS-M4110, PS6100, PS6210, PS6500 and the FS7600/7610 unified storage systems. We also buy many other models that are not listed here.
            
            If you have other manufacturers such as HP, IBM, NetApp, Apple/Mac or other drive storage arrays we also buy many of those.
            We buy drives made by EMC, NetApp, HP, IBM, Seagate, Western Digital, Hitachi, Apple, Mac, Dell, Samsung, HGST, Toshiba and many others.
            
            We buy drives from laptops, notebooks, servers, PC’s, and almost everything else from 500GB, 1TB, 2TB, 3TB, 4TB, 5TB, 6TB, 7TB, 8TB, 9TB, 10TB, 12TB and larger.
            
            
            I am looking to buy most all high end high dollar value computer networking, data com, telecom and disk storage equipment. I also buy computer memory in large quantities for servers, recent PC's, notebooks, laptops etc etc. I buy lots of equipment. Please take a look at the listing below.
            
            We BUY Cisco, Juniper, IBM, HP, Shoretel, SUN, Brocade, Dell, EMC, Alcatel, Avaya, Fujitsu, Nortel, Polycom, Dialogic, Ciena, NEC, Intel & more See list below. We buy switches, routers, line cards, engines, SFP's, ONS, phone systems, phones and lots more. We buy used and new equipment from the below and others not listed.
            
            I am looking to buy only in medium to large quantities of used and new SSD Solid State Drives, Sandisk, Memory Cards, server memory & more. All makers.
            
            I am looking to buy the below in large quantities only both used and new.
            
            WE BUY APPLE Macbooks, IMacs, Ipads, Tablets in large quantities only both used and new. We also purchase other makers and models from Samsung, HP, Toshiba, BlackBerry, Motorola, Acer, Sony, LG, HTC, Microsoft, Dell and others.
            
            " We also purchase other makers and models from Samsung, HP, Toshiba, BlackBerry, Motorola, Acer, Sony, LG, HTC, Microsoft, Dell and others." We only buy these in large quantities.
            
            MacBooks
            iMac's
            iPads
            Tablets
            
            We buy new and used SFP/GLC/QSFP/ONS, CPAKS & others. WE BUY LARGE QUANTITIES OF CISCO, ARISTA, DELL, JUNIPER, FINISAR, AVEGO, COLORCHIP, SOURCE PHOTONICS, BROCADE, HP, INTEL AND OTHERS. We prefer to buy in large quantities unless they are the higher end models. Then we will buy a smaller quantity or as many as you have.
            
            
            WE BUY MOST ALL 1000BASE-T, 1000BASE-TX, 1000BASE-SX, 1000BAS-LX, 1000BASE-LX10, 1000BASE-BX10, 1000BASE-LX/LH, 1000BASE-EX, and 1000BASE-ZX
            
            SFP-10G-SR, SFP-10G-LR, SFP-10G-ER, GLC-LH-SMD, QSFP-40G-LR4-S, QSFP-40G-SR4-S, CPAK-100G-SR4, CPAK 100G-LR4 & many others.
            
            Cisco ONS-CFP2-WDM 10-3128-05 or 06 100G/200G Transceivers and many other models.
            
            I BUY Finisar FTLX1471D3BCL 10GB SFP's and Brocade SFP 16G SW 57-0000088-01, 57-0000089-01 SFP's. I also buy Cisco, Juniper, Ciena and many others SFP's GLC's, CPAKS, ONS and OTHERS. Finisar FTL410QD2C & FTL410QE2C 40GBASE-SR4 300m Optical SFP Transceivers
            
            I am looking to buy the below Cisco used and or new in large quantity. WE BUY LARGE QUANTITIES OF CISCO, JUNIPER, FINISAR, BROCADE AND MORE ONS, SFP's, GLC's and OTHERS.
            
            I buy SFP-10G-LR, GLC-LH-SMD, GLC-SX-MMD, SFP-10G-SR, GLC-ZX-SMD, SFP-10G-ER, SFP-10G-ZR, GLC-EX-SMD, SFP-10G-LR and lots of others not listed.
            
            I am looking to buy large quantities of CISCO ONS-XC-10G-C XFP transceiver modules used and or new. Cisco 15454-OTU2-XP Cisco ONS-XC-10G-C & ONS-SC+-10G-C I need quantities of each
            
            
            WE BUY Telecom /IP-VOIP phones & systems/ Computer Networking/Storage/Servers & more.
            
            We buy used and new equipment from the below and others not listed.
            
            Polycom, Aastra, Avaya, Siemens, Nortel, Shoretel, Panasonic, Toshiba, NEC, Yealink, Cisco, Mitel & other telephones, IP Phones, VoIP phones, and systems.
            
            I also buy some UPS and big power gear....
            
            $$ WE BUY USED/NEW CISCO EMC NETAPP JUNIPER DELL HP IBM BROCADE & MORE
            
            WE ARE BUYING CISCO, EMC, NETAPP, JUNIPER, DELL, HP, IBM, BROCADE, ALCATEL, AVAYA, POLYCOM, FUJITSU, CIENA, MICROSOFT & lots more.
            
            We buy computer servers used and new in quantities. We buy Cisco, HP, Dell, IBM, Supermicro and many others.
            
            We are looking to buy following IT gears from our prospective clients. This service is offered to all the clients be it individual, small business, Data centers, Hospital, University, School or anyone and anywhere who has these items. Our minimum Quantity for purchase of server systems will be Quantities of 5 or more. unless they are very high end. We pay competitive price for every item you have. Below is a very small list of makes and models that we purchase. There are many others that are not listed below. So please feel free to send me your list.
            
            Cisco (servers, enclosures, storage, chassis, blades, cabinets)
            
            Dell (servers, enclosures, storage, chassis, blades, cabinets) We buy most all newer models and some of the below.
            
            PowerEdge R410, R510, R610, R710, R810, R910, PowerEdge R520, R620, R720, R820, R920
            PowerEdge R530, R630, R730, R830, R930, PowerEdge M1000E, M610, M620, M630
            
            HP (servers, enclosures, storage, chassis, blades)
            HP PROLIANT (Gen 7th, 8, 9, 10 and newer)
            DL 360, DL 380, DL 385, DL 585, DL 580, DL 320, DL 160, DL 120
            C7000, BL460 G7, G8, G9, G10 & newer
            
            IBM: (servers, enclosures, storage, chassis, blades)
            IBM SYSTEM (M3 and above)
            X3650, X3550, X3250, X3630, X3750, X3850,
            
            We also buy all the below and lots not listed. We both used and new. We like to buy high end high value equipment both networking, telecom and Data Com.
            
            We will buy computer networking switches, routers, Phone system and phones, line cards, access points, SFP adapters, Firewalls,
            Servers, expansion modules etc. Storage arrays, hard drives and lots more. We also buy server computer memory 8GB, 16GB, 32GB, 64GB in quantity.
            We buy Microsoft Office, Windows and Server software packages in quantities.
            We buy lots of other equipment too much to list.
            
            We BUY Cisco Juniper IBM HP Shoretel SUN Brocade, Dell, EMC, Alcatel, Avaya, Fuitsu, Nortel, Polycom, Dialogic, Ciena, NEC, Intel & more See list below. We buy switches, routers, line cards, engines, SFP's, ONS, phone systems, phones and lots more. We buy used and new equipment from the below and others not listed.
            
            Dell Equallogic Storage Hardware & EMC, NETAPP, IBM, HP, Cisco and others.
            
            I want to buy your excess EQL arrays, drives, controllers, upgrades and features
            
            I am also buying EMC, NetAPP, IBM, HP, Cisco, Brocade, Juniper and many others.
            
            
            WE BUY DISK/DRIVE ARRAYS & HARD / SSD DRIVES IN QUANTITY.
            
            We buy used and new EMC VNX2 Series VNX5200, VNX5400, VNX5600, VNX5800, VNX7600, VNX8000 & Dell/EMC FC5300, FC4500 and FC4700-2 fibre channel storage arrays. We also buy lots of other models not listed.
            
            
            We also buy used and new Dell EqualLogic PS Series: PS4100, PS4210, PS-M4110, PS6100, PS6210, PS6500 and the FS7600/7610 unified storage systems. We also buy many other models that are not listed here.
            
            If you have other manufacturers such as HP, IBM, NetApp, Apple/Mac or other drive storage arrays we also buy many of those.
            
            
            We also buy hard drives used and new. We prefer to buy them only in large quantities.
            
            We buy drives made by EMC, NetApp, HP, IBM, Seagate, Western Digital, Hitachi, Apple, Mac, Dell, Samsung, HGST, Toshiba and many others.
            
            We buy drives from laptops, notebooks, servers, PC’s, and almost everything else from 500GB, 1TB, 2TB, 3TB, 4TB, 5TB, 6TB, 7TB, 8TB, 9TB, 10TB, 12TB and larger.
            
            
            Here are some specific and current needs. I am looking to buy multiple quantities of the below used or new.
            
            We BUY COMPUTER SERVER MEMORY USED & NEW. We also buy HARD DRIVES, DATA STORAGE, NETWORKING & MORE.
            
            We BUY Hard Drives in quantity....500gb, 600gb, 1TB, 2TB, 4TB, 6TB and more All manufacturers. We only buy in quantity.
            
            We have a big need for 2.5 inch notebook and laptop drives 500GB and larger. We prefer to buy these in large quantities.
            
            WD HGST Toshiba Samsung SpinPoint IBM StorwizeNetAPPVNX ClariionInsilonSymmetrix AX CX VX R7 R6 R5 V7000 HP Proliant Dell UltrastarDeskstarTravelStarHE6 HE8 HE10 Seagate Western Digital SAS SSD HDD 12G 6G 6GB/s SATA3 10TB 8TB 6.xTB 6.3TB 6.2TB 6.1TB 6TB 5TB 4TB 3TB 2TB 1TB1.8TB 1.2TB 900GB 600GB 450GB 400GB NAS 76000 7K6000 7K4000 Ae RE RE2 RE4 Red Purple Green Pro Black Blue SE AV XE Archive Surveillance Constellation ES.2 ES.3
            
            We buy the below used and new. We only buy memory in medium to large quantities of like 25 pcs to 1,000's depending on sizes. We also buy Intel and other processors.
            
            Wanted - I buy Intel, AMD & other processors & computer server memory & lots more.
            
            I am buying the below Intel processors in quantity. I buy both used and new. Intel processors higher end models in quantity as well.
            
            I also buy hard drives and SSD drives in large quantities. We also buy servers and drive/storage arrays and more. I buy both used and new.
            
            PLEASE TAKE A LOOK BELOW AT ALL THE THINGS THAT WE ARE BUYING. PLEASE NOTE NOT EVERYTHING WE BUY IS LISTED, SO FEEL FREE TO EMAIL ME IF YOU HAVE OTHER EQUIPMENT OF HIGH VALUE.
            
            We BUY large quantities of used and or new computer server, notebook, laptop and other memory/ram. Most all 4GB, 8GB 16GB 32GB 64GB 128GB Kits.
            
            Server Memory RAM RAMs Memorys Memories DRAM DRAMs REG ECC Registered Parity Unbuffered SODIMM SO-DIMM PC2 PC3 PC4 DDR2 DDR3 DDR4 DDR DDR3L DDR4L 2R 4R LRDIMM DIMM Load Reducing RDIMM RDIMMs, DDR4 2133/2400/2666, MA82GR7AFR8N-VK, M393A4K40BB1-CRC, M393A4K40CB1-CRC, M393A4K40BB2-CTD, M393A4K40CB2-CTD
            Samsung SK Hynix Micron, Hynix, Samsung, Crucial, Elpida, HP, Dell, Cisco, IBM, Oracle, Attica, SuperTalent, Super Talent, Kingston, Ballistix, Corsair, Vengeance, Dominator, Platinum and many others.
            
            4GB 8GB 16GB 32GB 64GB 128GB Kits
            
            667Mhz 800Mhz 1066Mhz 1333Mhz 1600Mhz 1866Mhz 2133Mhz 2400Mhz 2666Mhz 2667Mhz 2800Mhz 3200Mhz
            8500R / 10600R / 12800R / 14900R / 15000R / 17000R / 19200R / 21300R / 22400R / 25600R
            8500E / 10600E / 12800E / 14900E / 15000E / 17000E / 19200E / 21300E / 22400E / 25600E
            8500 / 10600 / 12800 / 14900 / 15000 / 17000 / 19200 / 21300 / 22400 / 25600
            5300F / 6400F / 5300P / 6400P / 14900P / 15000P / 17000P / 19200P / 21300P / 22400P / 25600P
            10600L / 12800L / 14900L / 15000L / 17000L / 19200L / 21300L / 22400L / 25600L
            Server Memory RAM RAMs Memorys Memories DRAM DRAMs REG ECC Registered Parity Unbuffered SODIMM SO-DIMM PC3 PC4 DDR3 DDR4 DDR DDR3L DDR4L 2R 4R LRDIMM DIMM Load Reducing RDIMM RDIMMs
            
            Samsung SK Hynix Micron, Crucial Elpida, HP, Dell, Cisco, IBM, Oracle, Attica, SuperTalent, Super Talent, Kingston, Ballistix, Corsair, Vengeance, Dominator, Platinum
            8GB 16GB 32GB 64GB 128GB Kits
            
            
            Xeon E5-2620 E5-2630 E5-2640 E5-2650 E5-2660 E5-2670 E5-2690 E7-4830 E7-4860 E7-4870 E5506 E5606 E5620 E5630 E5640 E5649 X5470 X5550 X5560 X5650 X5660 X5670 X5672 X5675 X5680 X5690 2620 Intel Xeon e5-2637, e3-1230, e7-8890, Western Digital , WD Red NAS Hard Drive 2TB, 3TB, 4TB, 5TB, 6TB, 8TB, WD RE Datacenter Hard Drive 1TB, 2TB, 4TB, 6TB, HGST Hard Drives, Intel Xeon CPU Processor E3 E5 E7 E3v2 E3v3 E3v4 E5v2 E5v3 E5v4 E7v2 E7v3 E7v4 v2 v3 SLBF8 SLC2N SLBV4 SLBVB SLBVC SLBZ8 SLBBF SLBF5 SLBF4 SLBV3 SLBVG SLBV6 SLBV7 SLBYK SLBYL SLBV5 SLBVX & many others.
            Intel Xeon CPU Processor E3 E5 E7 E3v2 E3v3 E3v4 E5v2 E5v3 E5v4 E7v2 E7v3 E7v4 v2 v3 v4 Haswell Broadwell EP EX Broke Broken LGA2011 LGA1150 LGA1567 LGA 2011 1567 1150 R3 / 2603 2609 2620 2630 2630L 2637 2640 2643 2650 2650L 2651 2660 2665 2667 2670 2673 2680 2683 2683W 2685 2686 2687W 2689 2690 2695 2596 2697 2698 2699
            2603v2 2609v2 2620v2 2630v2 2637v2 2640v2 2643v2 2650v2 2650Lv2 2651v2 2660v2 2667v2 2670v2 2673v2 2680v2 2683v2 2683Wv2 2687Wv2 2690v2 2695v2 2696v2 2697v2 2698v2 2699v2, E5-2620v3 SR207, E5-2630v3 SR206, E5-2640V4 SR2NZ, E5-2680V4 SR2N7, E5-2637V4 SR2P3, E5-2690V4 SR2N2, E5-2695V4 SR2J1, E5-2697V4 SR2JV, E5-2699V4 SR2JS, Intel Xeon Bronze 3106 SR3GL, Intel Xeon Silver 4112 SR3GN, Intel Xeon Silver 4114 SR3GK, Intel Xeon Gold 5118 SR3GF, , Intel Xeon Gold 5122 SR3AT, Intel Xeon Gold 6130 SR3B9, Intel Xeon Gold 6146 SR3MA, Intel Xeon Gold 6148 SR3B6, Intel Xeon Gold 6150 SR37K,Intel Xeon Platinum 8168 SR37J, Intel Xeon Platinum 8180 SR377 & many others.
            
            
            We buy both used and new. Prefer to buy some models in quantities only. We buy a large amount of equipment that is NOT listed. We also buy Juniper, Brocade, Nortel, Avaya, Polycom, Brocade, Ciena, EMC, NetApp, IBM and many others.
            
            
            I am buying the below Polycom, Cisco and Avaya IP phones used and new. We also buy other phone systems and IP phones.
            
            Polycom VVX 300, VVX 400, VVX 500, Vvx600 series & others.
            
            Avaya (Any G series) 9608G, 9611G, 9640G, 9621G & others.
            
            Color IP phones - 7945g, 7965g, 7975g, 9951, 9971, 8961, cameras
            Conferencing - 7937g, 8831
            
            WE ALSO BUY A LOT OF OTHER MAKES OF PHONE SYSTEMS AND PHONES.
            WE BUY TELECOM AND DATA COM CARDS, EQUIPMENT ETC.
            
            We buy used and new Fujitsu equipment. Here are just a few of the models we are currently buying FC9580L8B3, FC9580L8C3, FC9580FLX6, FC9580FLX5, FC9580SF31, FC9580SF41, FC9580L9B1, FC9681FBX2, FC9681C8C1, FC9565TCA1, FC9565TCA2, FC9565TDA1, FC9682M2U1, FC9682CMC1, FC9682ULU1, FC9682SMC1, FC9580S8C1- I01 OR I02, FC95704AAE- I01 OR I02 , FC9580C9B1- I07 , FC9565PEA1, FC9565PEA2, FC9580L9B, FC9580C9B1, FC9580L9C2, FC9580C9C2 – many many others......
            
            I am buying the below Alcatel/Lucent, Ciena, Tellabs, Cisco, Ericsson, Nortel, Cyan, Fujitsu & lots more. We buy may others not listed.
            
            We are looking to buy large quantities of the below models of Ericsson used and or new. We also buy lots of models that are not listed.
            
            ERICSSON KRC161636/3, KRC161707/2, KRC161414/1, KRC161689/3, KRC161583/1, KRC118159/1 & many other models.
            
            LUCENT/ALCATEL
            LNW504, LNW62, LNW63, LNW64, LNW55, LNW84,
            SM265B, SM267, SM267B, SM265, NTK539UH, NTK553LA, NTCA51AA, NTCA50BA, NTCA51AB, TAX78BA,
            LNW127B, LNW153, LNW153B, LNW155B, LNW157B, LNW159B, B-720-1087-300, 82.71328U, 81.717271, 81.717273, 81.5543A, 81.5543B, 81.5502ER5, 800-0026-01, 800-0058-01, 800-0065-03,
            
            CALIX 800-0071-01, 800-0077-01, 800-0085-01, 29G-U, 11075L, 11058L, 100-00517, 100-01773, 100-03655, 100-03241, 100-00014-REV 55, 100-03006, 100-01908,
            Also looking to buy these CIENA / Nortel cards and others not listed. Ntlx44aa, Nt0h25aa, Ntwr30ca, Ntwr06ab, Ntwr06ca, Ntwr06bb, Ntca06lp, Ntk539uh, Ntk553la
            Ciena NTK538UJ, NTK538UL, NTK538BK, NTK538BL, NTK539UH, NTK503KA, NTK507QA, NTK585AJ, NTK504CC, Ntk555fae5, NTK539UC 008 100G WL3 ocld regnl con EDFA 1x OTU4 Banda C, NT0H25AAE5 02 OTR 10G QUAD BOARD
            
            CIENA NTK530QM 4X10G OTR 8X XFP CIRCUIT PACK, Nortel NTK529AC 100G OCI MULTIPROTOCOL 1X CFP
            
            LUCENT 5ESS CIRCUIT PACK LMPQ04A, LMPQ03Z - PN: SM265B & SM265
            
            INFINERA > TRX100090/T25, TRN100056, GBE9-MXP10G, TRX100041, TIM1100GX and many other models.
            
            CYAN PME-412, DTM-8, DTM-100G & SFT-10G16
            
            Nokia FRGG, FRGQ, ESMB, FSMF, and FRIE
            
            CIENA B-720-1087-301 AGGREGATION MODULES
            
            I need the Calix units below. I will buy more than one of each. I also buy lots of other Calix, Nortel, Ciena that is not listed here.
            
            
            CALIX 100-03880, 100-01908, 100-01930, 100-00014 REV 55, 100-03656, 100-01773, 100-01772, 100-01771, 100-03006, 100-00517, 100-01773, 100-03656, 100-03007, 100-03006, 100-00517
            
            
            
            We Buy ANY Calix E7 Parts and E8 and others.
            
            100-02092 SCP-10GE Switch Control Processor
            SCP2-10GE Switch Control Processor
            100-01908 VDSL2-48C 48x Combo DSL and POTS unit supporting integrated VoIP
            100-03880 VDSL2-48C r2 48x Combo DSL and POTS unit supporting integrated VoIP
            100-04916 VDSL2-35b-48C 48x VDSL2 Super-vectoring unit
            VDSL2-48D r2 48x VDSL2/ADSL2+ data only unit
            100-01772 GE-12 Twelve Gigabit Ethernet (GE) interfaces unit
            100-01949 GE-24 Twenty-four (GE) interfaces unit
            100-02093 GE-24x Twenty-four (GE) interfaces unit
            100-01773 GPON-4 4 GPON interfaces unit
            100-03656 GPON-4 r2 4 GPON interfaces card enhanced
            100-02094 GPON-4x 4 GPON interfaces unit
            100-03006 GPON-8 8 GPON interfaces unit
            100-03007 GPON-8x 8 GPON interfaces unit
            100-04194 GPON-16x 16 GPON interfaces unit
            I am looking to buy the below Intel cards.
            
            Intel - 100 X INTEL EXPI9402PF, EXPI9402PFBLK OR EXPI9402PFG1P20, - 200 X INTEL EXPI9402PTBLK OR EXPI9402PTG1P20, - 100 X INTEL E10G42BTDA OR E10G42BFSR WITHOUT SPF+, - 200 X INTEL E1G42ETBLK OR E1G42ET, - 100 X INTEL E1G44HTBLK OR I340-T4
            
            We are buying used and new medium to high end electronic test equipment.
            We buy most all makers including, but no limited to the below.
            
            Keysight, Agilent, Fluke, Wavetek, Tektronix, Rhode, Kaeser, ILX Lightwave Laser, TestEquity1000 Series Chambers, Tenney, Newport, Optview Series III ONLY & more
            
            We buy new and used data tape media, hard drives, servers, storage, memory, networking hardware, etc. all brands and formats.
            
            We prefer to buy the below in large quantities.
            
            Tape formats we are currently looking for:
            
            LTO Ultrium; LTO-3 (Sony, IBM and HP Only) LTO-4, LTO-5, LTO-6, LTO-7
            3592; 3592-JJ P/N 24R0316, 3592-JA P/N 18P7534, 3592-JB P/N 23R9830, 3592-JC P/N 46X7452, 3592-JD P/N 2727263
            T10000 (T2) P/N 003-5366-01
            MLR / SLR; SLR32/MLR1, SLR5, SLR7, SLR50, SLR60, SLR75, SLR100, SLR 140
            8MM; VXA X23
            4MM; DDS3, DDS4, DAT72, DAT160, DAT320
            And More…
            
            We BUY Cisco ASR1001, ASR1002, ASR1004, ASR1006, ASR1009 and many others.
            
            CISCO A9K, ASR, Nexus N5K, N3K, N9K, N77 series & lots more. **NOTE WE BUY A LOT OF MODELS NOT LISTED**
            
            
            ASR 9000 Series Line Cards
            Cisco ASR 9000 Series Modular Line Cards
            Cisco ASR 9000 Series 24-Port 10 Gigabit Ethernet Line Cards
            Cisco ASR 9000 Series 36-Port 10 Gigabit Ethernet Line Cards
            Cisco ASR 9000 Series 2-Port 100 Gigabit Ethernet Line Cards
            Cisco ASR 9000 Series 1-Port 100 Gigabit Ethernet Line Cards
            Cisco ASR 9000 Series 40 and 56 Gigabit Ethernet Line Cards
            
            Cisco ASR 9000 Series 4-Port and 8-Port 100 Gigabit Ethernet Line Cards
            Cisco ASR 9000 400-Gbps IPoDWDM Line Card
            Cisco ASR 9000 Series 400G and 200G Modular Line Cards
            Cisco ASR 9000 Series 12-Port 100-Gigabit Ethernet Line Cards
            Cisco ASR 9000 Series 24-Port and 48-Port Dual-Rate 10GE/1GE Line Cards
            Cisco ASR 9900 Series 8-Port 100 Gigabit Ethernet Line Cards with 7-Fabric Support
            
            A9K-40GE-L
            A9K-40GE-B
            A9K-40GE-E
            A9K-4T-L
            A9K-4T-B
            A9K-4T-E
            A9K-8T/4-L
            A9K-8T/4-B
            A9K-8T/4-E
            A9K-2T20GE-L
            A9K-2T20GE-B
            A9K-2T20GE-E
            A9K-8T-L
            A9K-8T-B
            A9K-8T-E
            A9K-16/8T-B
            A9K-MOD80-SE
            A9K-MOD80-TR
            A9K-MOD160-SE
            A9K-MOD160-TR
            A9K-24X10GE-SE
            A9K-24X10GE-TR
            A9K-36X10GE-SE
            A9K-36X10GE-TR
            A9K-2X100GE-SE
            A9K-2X100GE-TR
            A9K-1X100GE-SE
            A9K-1X100GE-TR
            A9K-40GE-SE
            A9K-40GE-TR
            A9K-4T16GE-SE
            A9K-4T16GE-TR
            
            A9K-8X100G-LB-SE
            A9K-8X100G-LB-TR
            A9K-8X100GE-SE
            A9K-8X100GE-TR
            A9K-4X100GE-SE
            A9K-4X100GE-TR
            A9K-400G-DWDM-TR
            A9K-MOD400-SE
            A9K-MOD400-TR
            A9K-MOD200-SE
            A9K-MOD200-TR
            A9K-24X10GE-1G-SE
            A9K-24X10GE-1G-TR
            A9K-48X10GE-1G-SE
            A9K-48X10GE-1G-TR
            A9K-12X100GE
            A9K-8X100GE-SE
            A9K-8X100GE-TR
            
            Cisco 15454-M-100G-LC-C
            Cisco 15454-M-100G-ME-C
            Cisco NCS2K-100ME-CK-C
            Cisco NCS2K-100G-CK-C
            Cisco NCS2K-100GS-CK-C
            Cisco 15454-M-100G-LC-C
            Cisco 15454-M-10X10G-LC
            Cisco 40X-10GE-WLO
            Cisco NCS2K-100ME-CKC
            Any high end Cisco A9K or ASR – numerous models.
            Cisco A9K-8X100GE-TR
            Cisco a9k-1X100ge-se and or a9k-1X100ge-tr
            Cisco ASR 1000 series
            Part Number Description
            ASR1002-X Cisco ASR 1002-X – router – desktop, rack-mountable
            ASR1001 Cisco ASR 1001
            ASR1002 Cisco ASR 1002 Router
            ASR1002-F Cisco ASR 1002-F – router
            ASR1002-5G/K9 Cisco ASR 1002 – router
            ASR1002-5G-FPI/K9 Cisco ASR 1002 FPI Bundle
            ASR1002-5G-HA/K9 Cisco ASR 1002 HA Bundle
            ASR1002-5G-SEC/K9 Cisco ASR 1002 VPN and Firewall Bundle
            ASR1002-5G-SHA/K9 Cisco ASR 1002 Security HA Bundle
            ASR1002-5G-VPN/K9 Cisco ASR 1002 VPN Bundle
            ASR1002-10G/K9 Cisco ASR 1002 – router
            ASR1002-10G-HA/K9 Cisco ASR 1002 HA Bundle
            ASR1002-10G-SHA/K9 Cisco ASR 1002 Security HA Bundle
            ASR1002-10G-VPN/K9 Cisco ASR 1002 VPN Bundle
            ASR1002F-SEC/K9 Cisco ASR 1002-F VPN and Firewall Bundle
            ASR1002F-VPN/K9 Cisco ASR 1002-F VPN Bundle
            ASR1004 Cisco ASR 1004 Chassis Dual P/S Router
            ASR1004-10G/K9 Cisco ASR 1004 – router
            ASR1004-10G-SEC/K9 Cisco ASR 1004 VPN and Firewall Bundle
            ASR1004-10G-SHA/K9 Cisco ASR 1004 Security HA Bundle
            ASR1004-10G-VPN/K9 Cisco ASR 1004 VPN Bundle – router
            ASR1004-20G-HA/K9 Cisco ASR1004 HA BDL W/ ESP-20G-RP1 SIP10 AESK9 LIC
            ASR1004-20G-SEC/K9 Cisco ASR1004 VPN+FW BUNDLE
            ASR1004-20G-SHA/K9 Cisco ASR1004-20G-SHA/K9 Aggregation Services Router 1004
            ASR1006 Cisco ASR 1006 Dual P/S Router Chassis
            ASR1006-10G-FPI/K9 Cisco ASR 1006 FPI Bundle – router
            ASR1006-10G-HA/K9 Cisco ASR 1006 HA Bundle
            ASR1006-20G-SEC/K9 Cisco ASR 1006 VPN+FW Bundle
            ASR1006-20G-VPN/K9 Cisco ASR 1006 VPN Bundle
            ASR1013
            
            WS-C3850-12S-E
            WS-C3850-12X48U-L
            WS-C3850-12S-S WS-C3850-12X48U-S
            WS-C3850-24XU-L C3850-NM-4-1G
            WS-C3850-12XS-S C3850-NM-4-10G
            WS-C3850-48PW-S ASR1002-X
            WS-C3850-48U-S ASR1002X-CB
            WS-C3850-48U-L SPA-10X1GE-V2
            WS-C3850-24XS-S ASR1000-ESP5
            WS-C3850-48F-S SPA-8X1GE-V2
            WS-C3850-48T-E ASR1001-X
            WS-C3850-48P-S ASR1002-HX
            WS-C3850-48T-S ASR1001-HX
            WS-C3850-12X48U-L ASR1002HX-ACS
            
            WE BUY SOFTWARE! MICROSOFT OFFICE SOFTWARE FROM 2007, 2010, 2012, 2013, 2016 Pro, Standard, Home, Student, Office AND MANY OTHER VERSIONS.
            
            I AM BUYING MICROSOFT OFFICE SOFTWARE FROM 2007, 2010, 2012, 2013, 2016 Pro, Standard, Home, Student, Office AND MANY OTHER VERSIONS.
            
            I BUY NEW AND OPEN BOX. I BUY LICENSES CARDS, PKC CARDS, RETAIL BOXES, OEM PACKS AND OTHERS.
            
            I also buy Microsoft Windows version 7, 8, 8.1 and 10. Also I need Microsoft server packages from 2008 and to 2019. All versions. 
           
            When buying electronics and appliances on websites like Amazon and eBay, consumers will see the following words used to describe an item’s condition:

            New
            New open box
            New Other
            Refurbished
            Manufacturer Refurbished
            Seller Refurbished
            Tested
            Used
            Used Guaranteed
            As-is or not-working
            What do these terms mean and which one should you choose? Here is the breakdown of each:
            
            New means the item has never been used and is in the original un-damaged packaging. The item should have no defects. This item can be sold by the original vendor or manufacturer or by a second-hand seller. Ideally the item is being sold by the original vendor or manufacturer but this is commonly not the case. The reason this is important to the consumer is for the factory warranty. The factory warrant is most commonly only valid for the original purchaser (but each manufacturer has a different policy).
            
            Risks to the consumer: Generally, this is the most reliable item to purchase. There is little chance that the item doesn’t work or has problems. The only real risk to the consumer is they might not have the manufacture-warranty. A “new” item on eBay or Amazon commonly sells for half price of buying it new from the manufacturer. It is up to you how much you value the warranty.
            
            New-open-box item has likely been removed from its box and put back in. The question then is why? Most of the time, the part/item/appliance was not the correct one. The previous customer tried to use it and the item did not fit or serve their purpose. This item is probably in perfect mechanical condition and a safe bet. There is a chance the item was poorly functioning or the customer did not like it for some reason other than incompatibility. Many items in this category were purchased, opened, looked at, and never actually used or tested.
            
            Risks to the consumer: Again, there is a small chance of issues. Likely a very good item for a fraction of the original price but the warranty will certainly be void and there is the slight possibly that this is a defective unit. The eBay or Amazon seller will almost always give a full refund if this is the case. The real risk here is when the person buying the item “NEEDS IT TO WORK NOW”. A common situation for businesses in manufacturing and service repairs. For them, paying the extra price for a completely new unit might be worth the tradeoff.
            
            New other is the same situation as “new open box” but the box is probably missing entirely. There is a little more suspicion as the history of this item and the questions now are if it is actually new and what makes it new if there is no box. Those questions are up to the seller to define. Some of these items were “tested”, meaning used for a bit.
            
            Risks to the consumer: Same as a “new open box” but with the added possibility that you are indeed purchasing a slightly-used item.
            
            Refurbished is now the real gray-areas of the gray market start to show. Unfortunately, there is no real definition for what “refurbished means”. This can mean any of the following things:
            
            This was a defective unit from the factory that was repaired
            This was a used item that was “fixed”
            This item was thoroughly rebuilt and all the wear-terms replaced (ideal situation)
            It was tested (for example, plugged in), cleaned, and listed on eBay
            Or it can mean absolutely nothing was done
            Many industrial-electronic and consumer-appliance items listed on eBay are marked as refurbished with almost no definition of what that actually is.
            
            Risks to the consumer: You may be getting a mint condition item, an old piece that has been repaired many times, or a new unit with an unprofessional fix on a defect. The seller will generally not describe the item in detail. If buying something in this condition, it is very important that the seller offers a warranty.
            
            Manufacturer Refurbished, if buying a refurbished item, look for one to be manufacturer refurbished. The original manufacturer will have the best tools and resources to make repairs. These are generally good items that will last long time but the quality is never quite as good as a brand-new one. These will almost always come with a good warranty.
            
            Seller Refurbished is the same as just saying “refurbished”. Who and to what quality of repairs were done? Look at seller ratings closely. The condition of this item is really unknown. Many sellers in China will post “refurbished” on everything they sell to try to add value. Luckily, they will usually give you a refund if it doesn’t work but that is not always the case and some sellers will try to find a way to blame you or the shipping carrier for the issue.
            
            Tested means that the item was plugged in, turns on, and appears to work. Sellers will commonly state things like 100% or fully tested. However, modern electronics and appliances have hundreds or thousands of features that could not possibly all be tested. Actually, this is just another used item.
            
            Risks to the customer: The item might appear to work at first, but then will not function properly for you. Hopefully the seller will accept a return if it does not work.
            
            Used means the item is being sold knowingly that it has been used. The seller should (and will in most cases) describe the condition. Whether it has scratches, worn parts, faded color and so on should be disclosed. When the item is posted as “used”, the seller is not claiming to have reconditioned or tested it. Usually, the stated condition is accurate and this is the main benefit of buying a “used” item vs a “refurbished” or “tested” item.
            
            Risks to the customer: Is worse case, the seller lied or didn’t know about the condition of the item. If you buy it and have an issue, they may not give you a refund. Looking at seller ratings in important here. Buying used items is most beneficial to the customer when that customer is an expert on the item being bought. Knowing the product well, will help you find great bargains on used items but if you cannot spot the signs of a bad product, you might overpay for junk.
            
            Used and Guaranteed, here this seller is not making any false claims on the condition or trying to add value by stating “refurbished”. The item’s condition is most likely going to be described to the best of the seller’s knowledge. This means that the seller does not know the condition exactly (but few ever do). The guarantee means that though this item is used, the seller will take responsibility if the item does now work correctly and give you a refund. Used with a guarantee is commonly sold with a 30day or longer warranty. Sellers doing this want customers to be happy with the products.
            
            Risks to the customer: The biggest risk here is a product that is broken. It can happen and will happen. Old products and especially electronics will break eventually. The good news is that you will get your money back and the only loss to you is your time invested in the purchase.
            
            As-is or not-working, common sense would say that this is the worse item to get but there is a place for it. A not-working appliance is going to sell for less than the price of one part sold from a dealer. These items are great for fix it yourself type people, will be dirt cheap and sometimes still work perfectly. The gamble is in the customer’s hands:
            
            Risks to the customer: You buy it for parts and the parts you needed were broken. Or, you felt like gambling to see it worked. Well it doesn’t and the seller will never give you a refund for it. The seller does not want to deal with any customer complaints or returns.
            </h2>
            </div>
            </div>
            </div>
            </div>
            )

    }
}

export default about;

import * as React from 'react';
import buetlogo from "../../Logo.png"
import scholar from "../../gs.png"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import propic from "../../Tahsina.jpg"
import "./SideNav.css"
import { FaHome } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa';
import { BiImage } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
import { GiCharacter } from 'react-icons/gi';
import { GiMaterialsScience } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import { FaResearchgate } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import { fontSize } from '@mui/system';
import buetLogoWhite from "../../buetLogoWhite.png"

const drawerWidth = 300;

function SideNav(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div class="">
            {/* <Toolbar /> */}
            <div class="superBack">
                <div className='propic'>
                    <img src={propic} alt="Dr Tahsina" style={{ width: "130px" }} />
                </div>
            </div>

            <div className='text-center mt-2'>
                <h5>Dr. Tahsina Farah Sanam</h5>
                <p style={{ fontSize: "14px" }}>Assistant Professor
                    <br></br>
                    IAT, BUET
                </p>



            </div>

            <Divider />
            <div className="d-flex justify-content-center  p-2">
                <a target="_blank" href="mailto:tahsina@iat.buet.ac.bd"><FiMail style={{ fontSize: "30px", padding: "2px" }} /></a>
                <a target="_blank" href="mailto:tahsina@iat.buet.ac.bd"><FaResearchgate style={{ fontSize: "30px", padding: "2px" }} /></a>
                <a target="_blank" href="https://www.linkedin.com/in/tfsanam/"><FaLinkedin style={{ fontSize: "30px", padding: "2px" }} /></a>
                <a target="_blank" href="https://scholar.google.com/citations?user=GHwoCWQAAAAJ&hl=en"><img src={scholar} style={{ width: "30px", padding: "2px" }} /></a>
                <a target="_blank" href="http://iat.buet.ac.bd/#/faculty-detial/E89DFF50-7895-4E84-9737-54F0D8089CAB"><img src={buetlogo} style={{ width: "30px", padding: "2px" }} /></a>
            </div>
            <Divider />
            <List>
                <div className='colorNav'>
                    <a href="/">
                        <ListItem button>
                            <ListItemIcon>
                                <FaHome className='font' />
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </a>
                </div>

                <div className='colorNav'>
                    <a href="#/about">
                        <ListItem button>
                            <ListItemIcon>
                                <GiCharacter className='font' />
                            </ListItemIcon>
                            <ListItemText primary="About Me" />
                        </ListItem>
                    </a>
                </div>

                <div className='colorNav'>
                    <a href="#/research">
                        <ListItem button>
                            <ListItemIcon>
                                <GiMaterialsScience className='font' />
                            </ListItemIcon>
                            <ListItemText primary="Research" />
                        </ListItem>
                    </a>
                </div>
                <div className='colorNav'>
                    <a href="#/researchgroup">
                        <ListItem button>
                            <ListItemIcon>
                                <BiGroup className='font' />
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Research Group" />
                        </ListItem>
                    </a>
                </div>
                <div className='colorNav'>
                    <a href="#/publication">
                        <ListItem button>
                            <ListItemIcon>
                                <FaRegNewspaper className='font' />
                            </ListItemIcon>
                            <ListItemText primary="Publications" />
                        </ListItem>
                    </a>
                </div>
                <div className='colorNav'>
                    <a href="#/awards">
                        <ListItem button>
                            <ListItemIcon>
                                <FaAward className='font' />
                            </ListItemIcon>
                            <ListItemText primary="Awards & Honors" />
                        </ListItem>
                    </a>
                </div>
                <div className='colorNav'>
                    <a href="#/gallery">
                        <ListItem button>
                            <ListItemIcon>
                                <BiImage className='font' />
                            </ListItemIcon>
                            <ListItemText primary="Gallery" />
                        </ListItem>
                    </a>
                </div>
                <div className='colorNav'>
                    <a href="#/contact">
                        <ListItem button>
                            <ListItemIcon>
                                <RiContactsFill className='font' />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </a>
                </div>


                {/* {['Home', 'About Me', 'Research', 'Research Group', 'Publications'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>

                        <ListItemText primary={text} />


                    </ListItem>
                ))} */}


            </List>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                className="Appbar"
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='flexing'>
                        <div className='buetLogo'>
                            <img src={buetLogoWhite} alt="BUET" style={{padding:"5px", width:"50px"}} ></img>
                        </div>

                        <div>
                            <Typography variant="h6" noWrap component="div">
                                <p style={{padding:"7px"}}>Dr. Tahsina Farah Sanam</p>
                            </Typography>
                        </div>

                    </div>


                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography> */}

            </Box>
        </Box>
    );
}

SideNav.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SideNav;

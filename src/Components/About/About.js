import * as React from 'react';
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
import "./About.css"

export default function About() {
    return (
        <div className='containerText'>
            <Typography paragraph>
                <div>
                    <h3 className="py-3">Education</h3>
                    <div className="text"><b>PhD</b>, May 2020 <br></br>

                        Department of ECE <br></br>

                        Rutgers, The State University of New Jersey, USA</div>

                    <div className="text marginTop"><b>Master of Science in Electrical and Electronic Engineering</b>, 2012 <br></br>

                        Department of EEE <br></br>

                        Bangladesh University of Engineering and Technology (BUET) </div>
                    <div className="text marginTop"><b>Bachelor of Science in Electrical and Electronic Engineering</b>, 2009 <br></br>

                        Department of EEE <br></br>

                        Bangladesh University of Engineering and Technology (BUET)</div>
                    <div className="text marginTop"><b>Higher Secondary Certificate (HSC)</b>, 2003 <br></br>

                        Viqarunnisa Noon College, Dhaka <br></br>

                        (one of the only 20 students in the whole country who got GPA 5.00 out of 5.00 in 2003) </div>
                </div>
                <div>
                    <h3 className="marginTop py-3">Job Experience</h3>
                    <div className="text"><b>PhD</b>, May 2020 <br></br>

                        Department of ECE <br></br>

                        Rutgers, The State University of New Jersey, USA</div>

                    <div className="text marginTop"><b>Master of Science in Electrical and Electronic Engineering</b>, 2012 <br></br>

                        Department of EEE <br></br>

                        Bangladesh University of Engineering and Technology (BUET) </div>
                    <div className="text marginTop"><b>Bachelor of Science in Electrical and Electronic Engineering</b>, 2009 <br></br>

                        Department of EEE <br></br>

                        Bangladesh University of Engineering and Technology (BUET)</div>
                    <div className="text marginTop"><b>Higher Secondary Certificate (HSC)</b>, 2003 <br></br>

                        Viqarunnisa Noon College, Dhaka <br></br>

                        (one of the only 20 students in the whole country who got GPA 5.00 out of 5.00 in 2003) </div>
                </div>




            </Typography>
        </div>
    )
}

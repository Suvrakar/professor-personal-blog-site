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
import "./Contact.css"

export default function Contact() {
    return (
        <div className='containerText'>
            <Typography paragraph>

                Dr. Tahsina Farah Sanam
                <br></br>
                Associate Professor
                <br></br>

                Institute of Appropriate Technology, BUET
                <br></br>

                Dhaka-1000, Bangladesh
                <br></br>

                Email: tahsina@iat.buet.ac.bd
            </Typography>
        </div>
    )
}

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
import "./Home.css"

export default function Home() {
    return (
        <div className='containerText'> 
            <Typography paragraph>
                <div className="text">I am serving as an Assistant Professor in the Institute of Appropriate Technology at Bangladesh University of Engineering and Technology. I completed my PhD from the Department of Electrical and Computer Engineering, Rutgers University, New Jersey in 2020. I earned both my M.Sc. degree in Electrical and Electronics Engineering in 2012, and B.Sc. degree in Electrical and Electronics Engineering in 2009 from Bangladesh University of Engineering and Technology. My research works lie at the intersection of Signal Processing, Machine Learning, Wireless Communication and Internet of Things (IoT). My goal is to establish an independent research career in Bangladesh with multidisciplinary collaborations in the field of healthcare IoT system leveraging the advance AI technologies. I am a member of IEEE, Society of Women Engineering (SWE-USA), and ACM.</div>
                <div className="text marginTop">
                    <h3>Keywords/ Research Interest</h3>

                    Artificial Intelligence, Machine Learning, Deep Neural Network, Internet of Things (IoT), AI Based Healthcare, Localization and Tracking, Smart Home Systems, Speech Processing</div>


                <div className="text marginTop">
                    <h3>Latest News:</h3>

                    <ul>
                        <li>
                            Our paper on AI Based Healthcare Decision Support got accepted in TENSYMP 2022, Mumbai, India
                        </li>
                        <li>
                            Newsletter Editor, IEEE BDS ExCom 2021-2022
                        </li>
                        <li>
                            Appointed as AI Program Committee Member at Virtual GHC 2021, USA
                        </li>
                        <li>
                            Appointed as Secretary, IEEE SPS Bangladesh Chapter 2021, 2022
                        </li>
                        <li>
                            Served as the Central Committee Member of International Robot Olympiad, 2021
                        </li>
                        <li>
                            Organizing Member, IEEE ICTP, 2021
                        </li>
                    </ul>
                </div>

                <div>Thank you for visiting my website.</div>

            </Typography>
        </div>
    )
}

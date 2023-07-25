import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import propic from "../../Tahsina.jpg";
import "./About.css";
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { FaNetworkWired } from 'react-icons/fa';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import { GrUserManager } from 'react-icons/gr';


export default function About() {
  return (
    <div className="containerText">
      <Typography paragraph>
        <div>
          <h3 className="py-3"><FaGraduationCap style={{marginRight:'10px'}}/>Education</h3>
          <div className="text">
            <b>PhD</b>, May 2020 <br></br>
            Department of ECE <br></br>
            Rutgers, The State University of New Jersey, USA
          </div>

          <div className="text marginTop">
            <b>Master of Science in Electrical and Electronic Engineering</b>,
            2012 <br></br>
            Department of EEE <br></br>
            Bangladesh University of Engineering and Technology (BUET){" "}
          </div>
          <div className="text marginTop">
            <b>Bachelor of Science in Electrical and Electronic Engineering</b>,
            2009 <br></br>
            Department of EEE <br></br>
            Bangladesh University of Engineering and Technology (BUET)
          </div>
          <div className="text marginTop">
            <b>Higher Secondary Certificate (HSC)</b>, 2003 <br></br>
            Viqarunnisa Noon College, Dhaka <br></br>
            (one of the only 20 students in the whole country who got GPA 5.00
            out of 5.00 in 2003){" "}
          </div>
        </div>
        <div>
          <h3 className="marginTop py-3"><MdWork style={{marginRight:"10px"}}/>JOB EXPERIENCE</h3>

          <div className="text">
            <b>Associate Professor</b> (June 2023 - Present) <br></br>
            Institute of Appropriate Technology (IAT) <br></br>
            Bangladesh University of Engineering and Technology (BUET)
          </div>

          <div className="text marginTop">
            <b>Assistant Professor</b> (August 2020 - May 2022) <br></br>
            Institute of Appropriate Technology (IAT) <br></br>
            Bangladesh University of Engineering and Technology (BUET)
          </div>

          <div className="text marginTop">
            <b>Teaching Assistant</b> (2015 - Present) <br></br>
            Department of ECE, Rutgers, The State University of New Jersey
          </div>

          <div className="text marginTop">
            <b>Summer Intern</b>, 2018 <br></br>
            Nokia Bell Lab, Murray Hill, New Jersey
          </div>

          <div className="text marginTop">
            <b>Assistant Professor</b> (February 2013 - August 2014) <br></br>
            Institute of Appropriate Technology (IAT) <br></br>
            Bangladesh University of Engineering and Technology (BUET)
          </div>

          <div className="text marginTop">
            <b>Lecturer</b> (October 2011 - February 2013) <br></br>
            Institute of Appropriate Technology (IAT) <br></br>
            Bangladesh University of Engineering & Technology (BUET)
          </div>

          <div className="text marginTop">
            <b>Lecturer</b> (September 2009 - October 2011) <br></br>
            Dept of EEE, Daffodil International University, Dhaka.
          </div>
        </div>

        <div>
          <h3 className="marginTop py-3"><FaNetworkWired style={{marginRight:"10px"}}/>PROFESSIONAL AFFILIATION</h3>

          <ul>
            <li className="text">Member, IEEE (2015-Present)</li>
            <li className="text marginTop">Member, ACM (2017-Present)</li>
          </ul>
        </div>

        <div>
          <h3 className="marginTop py-3"><PiHandbagSimpleBold style={{marginRight:"10px"}}/>PROFESSIONAL SERVICES</h3>

          <ul>
            <li className="text">
              Newsletter Editor, IEEE BDS ExCom 2022-2023
            </li>
            <li className="text marginTop">
              Newsletter Editor, IEEE BDS ExCom 2021-2022
            </li>
            <li className="text marginTop">
              AI Program Committee Member, Virtual GHC 2021, USA
            </li>
            <li className="text marginTop">
              Secretary, IEEE SPS Bangladesh Chapter 2021
            </li>
            <li className="text marginTop">
              Central Committee Member, International Robot Olympiad, 2021
            </li>
            <li className="text marginTop">
              Organizing Member, IEEE ICTP, 2021
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h3 className="marginTop py-3"><GrUserManager style={{marginRight:"10px"}}/>LEADERSHIP EXPERIENCE</h3>

            <ul>
              <li className="text">
                President, 2019-2020
                <br />
                Society of Women Engineers, Graduate Executive Board, Rutgers
                University
              </li>
              <li className="text marginTop">
                Vice President, 2017-2019
                <br />
                Society of Women Engineers, Graduate Executive Board, Rutgers
                University
              </li>
              <li className="text marginTop">
                Vice Chair, 2010-2012
                <br />
                IEEE Women in Engineering, Bangladesh Section
              </li>
            </ul>
          </div>
        </div>
      </Typography>
    </div>
  );
}

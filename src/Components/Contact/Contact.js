import * as React from "react";
import Typography from "@mui/material/Typography";
import "./Contact.css";
import GoogleMaps from "./Map";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="containerText">
      <Typography paragraph sx={{ textAlign: "Left" }}>
        <span style={{ fontWeight: "bold", marginRight: "10px" }}>Dr. Tahsina Farah Sanam</span>
        <br></br>
        <FaGraduationCap style={{ marginRight: "10px" }} />
        Associate Professor
        <br></br>
        <HiOfficeBuilding style={{ marginRight: "10px" }} />
        Institute of Appropriate Technology, BUET
        <br></br>
        <FaAddressBook style={{ marginRight: "10px" }} />
        Dhaka-1000, Bangladesh
        <br></br>
        <MdEmail style={{ marginRight: "10px" }} /> tahsina@iat.buet.ac.bd
      </Typography>
      <br />
      <br />
      <GoogleMaps />
      <br />
      <br />
    </div>
  );
}

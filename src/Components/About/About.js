import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { FaNetworkWired } from 'react-icons/fa';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import { GrUserManager } from 'react-icons/gr';
import aboutData from "./About.json";
import "./About.css";

export default function About() {
  return (
    <div className="containerText">
      <Typography paragraph>
        <div>
          <h3 className="py-3"><FaGraduationCap style={{marginRight:'10px'}}/>Education</h3>
          {aboutData.education.map((edu, index) => (
            <div className="text marginTop" key={index}>
              <b>{edu.degree}</b>, {edu.year} <br/>
              {edu.department && <>{edu.department} <br/></>}
              {edu.institution} <br/>
              {edu.details && <>{edu.details}</>}
            </div>
          ))}
        </div>

        <div>
          <h3 className="marginTop py-3"><MdWork style={{marginRight:"10px"}}/>JOB EXPERIENCE</h3>
          {aboutData.jobExperience.map((job, index) => (
            <div className="text marginTop" key={index}>
              <b>{job.title}</b> ({job.period}) <br/>
              {job.department && <>{job.department} <br/></>}
              {job.institution}
            </div>
          ))}
        </div>

        <div>
          <h3 className="marginTop py-3"><FaNetworkWired style={{marginRight:"10px"}}/>PROFESSIONAL AFFILIATION</h3>
          <ul>
            {aboutData.professionalAffiliation.map((affiliation, index) => (
              <li className="text marginTop" key={index}>
                {affiliation.membership} ({affiliation.period})
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="marginTop py-3"><PiHandbagSimpleBold style={{marginRight:"10px"}}/>PROFESSIONAL SERVICES</h3>
          <ul>
            {aboutData.professionalServices.map((service, index) => (
              <li className="text marginTop" key={index}>
                {service.service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="marginTop py-3"><GrUserManager style={{marginRight:"10px"}}/>LEADERSHIP EXPERIENCE</h3>
          <ul>
            {aboutData.leadershipExperience.map((leadership, index) => (
              <li className="text marginTop" key={index}>
                {leadership.role}, {leadership.period} <br/>
                {leadership.organization}
              </li>
            ))}
          </ul>
        </div>
      </Typography>
    </div>
  );
}

About.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      department: PropTypes.string,
      institution: PropTypes.string.isRequired,
      details: PropTypes.string
    })
  ),
  jobExperience: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      department: PropTypes.string,
      institution: PropTypes.string.isRequired
    })
  ),
  professionalAffiliation: PropTypes.arrayOf(
    PropTypes.shape({
      membership: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired
    })
  ),
  professionalServices: PropTypes.arrayOf(
    PropTypes.shape({
      service: PropTypes.string.isRequired
    })
  ),
  leadershipExperience: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired
    })
  )
};

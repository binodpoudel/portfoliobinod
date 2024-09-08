import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'



const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
           
        
          <span>Skills:-</span>
          
          <span className='about' style={{ color: "orange", fontSize: "0.8rem"  }}>

            Frontend Developer :- HTML, CSS, JavaScript, SCSS, React and React Hooks, React Router, Redux, Context API, BootStraps, Material UI, GitHub team workflow. 
                <br />
                <br />
            Backend Developer :- Node.js, Express.js, PHP, JWT and Authentication methods, Rest APIs.
            <br />
            <br />
            Database:- MongoDB, Mongoose, SQL, MySQL, Docker.
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
      </div>
    </div>
  );
};

export default Works;

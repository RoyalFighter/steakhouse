import React from 'react'
import "./First.css"
import { motion } from "framer-motion";
function First() {
    
  return (
    <div  class="main-div">
        <div class="first-div locked-div" >
        <h1>A Premium <br />And Authentic <br /> Steakhouse</h1>
        <button class="button">Book A Table</button>
      </div>
      <motion.div class="second-div">
<motion.img
src="final pan.png"
alt="Image"
initial={{ rotate: 45 }}
          whileInView={{ rotate: 360 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 1.4, type: "spring" }} ></motion.img>
</motion.div>


    </div>
  )
}

export default First
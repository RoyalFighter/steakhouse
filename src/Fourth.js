import React from 'react'
import "./Fourth.css"
import { motion } from "framer-motion";
function Fourth() {
  return (


<>

   <div class="first">
   <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
    <img src="d1.png" alt="" />
    </motion.div>
    <div class="sub1">
    <h1>Dish 1</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum optio atque hic qui iusto fugiat dolorem a, ea alias iure magnam reiciendis blanditiis! Modi aliquid id cum sit dicta eaque. Rerum perferendis dignissimos ipsum ipsa?</p>
    </div>
    
   </div>
   <div class="second">
    <div class="sub2">
   <h1>Dish 2</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum optio atque hic qui iusto fugiat dolorem a, ea alias iure magnam reiciendis blanditiis! Modi aliquid id cum sit dicta eaque. Rerum perferendis dignissimos ipsum ipsa?</p>
   </div>
   <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
   <img src="d2.png" alt="" />
   </motion.div>
   </div>
   <div class="first">
   <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          
        >
    <img src="d1.png" alt="" />
    </motion.div>
    <div class="sub1">
    <h1>Dish 3</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum optio atque hic qui iusto fugiat dolorem a, ea alias iure magnam reiciendis blanditiis! Modi aliquid id cum sit dicta eaque. Rerum perferendis dignissimos ipsum ipsa?</p>
    </div>
    
   </div>
   <div class="second">
    <div class="sub2">
   <h1>Dish 4</h1>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum optio atque hic qui iusto fugiat dolorem a, ea alias iure magnam reiciendis blanditiis! Modi aliquid id cum sit dicta eaque. Rerum perferendis dignissimos ipsum ipsa?</p>
   </div>
   <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
   <img src="d2.png" alt="" />
   </motion.div>
   </div>
  
   </>
    
  )
}

export default Fourth
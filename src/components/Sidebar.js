import React from 'react'
import {motion} from "framer-motion";

const Sidebar = (children) => {
  return (
    <div>
        <div animte={{width:"200px"}} className="Sidebar"></div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar;
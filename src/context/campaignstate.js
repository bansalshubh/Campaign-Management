import campaignContext from "./campaigncontext";
import { useState, useContext } from "react";

const Campaignstate = (props) => {

    const [newCamp, setnewCamp] = useState({
        title:"",
        desc:"",
        platform:"",
        camp:""
    })

    return (
        <campaignContext.Provider value={{ newCamp,setnewCamp }}>
          {props.children}
        </campaignContext.Provider>
      )
}

export default Campaignstate
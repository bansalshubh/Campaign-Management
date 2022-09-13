import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import campaignContext from '../context/campaigncontext'

const Item = (props) => {

    const context = useContext(campaignContext)
    const { newCamp, setnewCamp } = context;

    const addCamp = async (title,desc,platform,camp) => {
        const response = await fetch(`http://localhost:5000/api/usercampaigns/createcampaign`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, desc,platform,camp })
        });
        const json = await response.json();
        // console.log(json)
    }

    const navigate = useNavigate();
    const handleOnClick = async(title, desc, plat) => {
          let obj = {
            title:title,
            desc:desc,
            platform:plat,
            camp:""
          }
        //   console.log(obj)
          localStorage.setItem('token',JSON.stringify(obj));
          var x = localStorage.getItem('token')
        //   console.log(x)
        //   addCamp(title,desc,plat,"");
        navigate('/products');
    }

    return (
        <div>
            <div className="card" style={{ "width": "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.platform}</p>
                    <button onClick={() => handleOnClick(props.title, props.description, props.platform)} className="btn btn-primary" style={{ "display": `${props.page != "select" ? "none" : "block"}` }}>Choose Campaign</button>
                </div>
            </div>
        </div>
    )
}

export default Item
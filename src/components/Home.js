import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import SelectCampaign from './SelectCampaign';

const Home = () => {

    const [Camp, setCamp] = useState([]);
    const [newCamp, setnewCamp] = useState({})

    const handleOnAnchor = async (platform)=>{
        if(platform == 'All')
        {
            let url = `http://localhost:5000/api/usercampaigns/allusercampaigns`;
            let data = await fetch(url);
            // console.log(data)
            let parsedData = await data.json();
            // console.log(parsedData);
            setCamp(parsedData);
            return;
        }
        const response = await fetch(`http://localhost:5000/api/usercampaigns/fetchcampaigns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({platform})
      });
      const j = await response.json();
    //   console.log(j)
      setCamp(j)
    }

    const handleOnStatus = (status)=>{
        if(status == "Exhausted")
            setCamp([]);
    }

    useEffect(() => {
        async function fetchData() {
            let url = `http://localhost:5000/api/usercampaigns/allusercampaigns`;
            let data = await fetch(url);
            // console.log(data)
            let parsedData = await data.json();
            // console.log(parsedData);
            setCamp(parsedData);
        }
        fetchData();
    }, [])

    const navigate = useNavigate();
    const handleOnClick = (e) => {
        navigate('/selectcamp');
    }

    return (
        <div>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <div className='mt-3'>
                        <h1>Your Campaigns</h1>
                        <p>Check the list of campaigns you created</p>
                    </div>
                    <button className='btn btn-primary' onClick={handleOnClick} style={{ "margin": "auto","marginLeft":"31vw" }}>Create a new Campaign</button>
                </div>
                <div style={{ "display": "flex" }}>
                    <h4 style={{"marginLeft":"50vw","marginTop":"0.2vw"}}>Filter By</h4>
                    <div style={{"marginLeft":"1vw","marginTop":"0.5vw","marginRight":"1vw"}}>Platform</div>
                    <div className="dropdown">
                        <a onClick={()=>handleOnAnchor("All")} className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All Platforms
                            <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a onClick={()=>handleOnAnchor("Google")} style={{"textDecoration":"none","marginLeft":"20px"}} href="#">Google</a></li>
                            <li><a onClick={()=>handleOnAnchor("Facebook")} style={{"textDecoration":"none","marginLeft":"20px"}} href="#">FaceBook</a></li>
                            <li><a onClick={()=>handleOnAnchor("Instagram")} style={{"textDecoration":"none","marginLeft":"20px"}} href="#">Instagram</a></li>
                            <li><a onClick={()=>handleOnAnchor("Youtube")} style={{"textDecoration":"none","marginLeft":"20px"}} href="#">Youtube</a></li>
                        </ul>
                    </div>
                    <div style={{"marginLeft":"1vw","marginTop":"0.5vw","marginRight":"1vw"}}>Status</div>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a onClick={()=>handleOnStatus("Activated")} style={{"textDecoration":"none","marginLeft":"20px"}} href="#">Activated</a></li>
                            <li><a onClick={()=>handleOnStatus("Exhausted")} style={{"textDecoration":"none","marginLeft":"20px"}} href="#">Exhausted</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    {Camp.map((element) => {
                        return <div className="col-md-3 my-3" key={element.title}>
                            {<Item title={element.title} description={element.desc} platform={element.platform} pages="home"></Item>}
                            {/* <h1>{element.title}</h1> */}
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}

export default Home
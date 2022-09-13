import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import SelectCampaign from './SelectCampaign';

const Home = () => {

    const [Camp, setCamp] = useState([]);
    const [newCamp, setnewCamp] = useState({})
    useEffect(() => {
        async function fetchData() {
            let url = `http://localhost:5000/api/campaigns/allusercampaigns`;
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
                    <button className='btn btn-primary' onClick={handleOnClick} style={{ "margin": "auto" }}>Create a new Campaign</button>
                </div>
                <div className="row">
                    {Camp.map((element) => {
                        return <div className="col-md-3 my-3" key={element.title}>
                            {<Item title={element.title} description={element.desc} platform={element.platform}></Item>}
                            {/* <h1>{element.title}</h1> */}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
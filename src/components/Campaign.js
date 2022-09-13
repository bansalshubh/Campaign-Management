import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Item from './Item';

const Campaign = () => {

    const [Camp, setCamp] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let url = `http://localhost:5000/api/campaigns/allcampaigns`;
            let data = await fetch(url);
            console.log(data)
            let parsedData = await data.json();
            console.log(parsedData);
            setCamp(parsedData);
        }
        fetchData();
    }, [])

    return (
        <div>
            <div>
            <div className="container">
                <h1 className='my-4 text-center'>Ad Campaigns</h1>
                <div className="row">
                    {Camp.map((element) => {
                        return <div className="col-md-3 my-3" key={element.title}>
                            {<Item title={element.title} description = {element.desc} platform = {element.platform} page="camp"></Item>}
                            {/* <h1>{element.title}</h1> */}
                        </div>
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Campaign
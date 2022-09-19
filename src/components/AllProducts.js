import React, { useEffect, useState } from 'react'
import AllProductItem from './AllProductItem';

const AllProducts = () => {
    const [Camp, setCamp] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let url = `http://localhost:5000/api/campaigns/allproducts`;
            let data = await fetch(url);
            // console.log(data)
            let parsedData = await data.json();
            // console.log(parsedData);
            setCamp(parsedData);
        }
        fetchData();
    }, []);
    return (
        <div>
            <div>
                <div className="container">
                    <h1 className='my-4 text-center'>Products</h1>
                    <div className="row">
                        {Camp.map((element) => {
                            return <div className="col-md-3 my-3" key={element.title}>
                                {<AllProductItem title={element.title} price={element.price}></AllProductItem>}
                                {/* <h1>{element.title}</h1> */}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductItem = (props) => {

async function fetchData(title) {
    const response = await fetch(`http://localhost:5000/api/campaigns/fetchproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title})
      });
      const json = await response.json();
      return json;
}
const navigate = useNavigate();
const handleOnClick = async(title)=>{
    const json = await fetchData(title);
    var x = localStorage.getItem('token');
    localStorage.removeItem('token');
    let obj = JSON.parse(x)
    // console.log(obj)
    title = obj.title;
    let desc = obj.desc;
    let platform = obj.platform;
    let camp = json[0]._id;
    // console.log(json[0]._id)
    const response = await fetch(`http://localhost:5000/api/usercampaigns/createcampaign`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title,desc,platform,camp})
      });
      const j = await response.json();
      console.log(j)
      navigate('/');
}

  return (
    <div>
        <div>
            <div className="card" style={{ "width": "18rem;" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.price}</p>
                    <button onClick={() => handleOnClick(props.title)} className="btn btn-primary">Select Product</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
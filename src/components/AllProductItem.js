import React from 'react'

const AllProductItem = (props) => {
    return (
        <div>
            <div>
                <div className="card" style={{ "width": "18rem;" }}>
                <img src={process.env.PUBLIC_URL+`images/${props.title}.png`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductItem
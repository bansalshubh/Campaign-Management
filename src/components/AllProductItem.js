import React from 'react'
import zock1 from '../images/Best raw topping cake.png'

const AllProductItem = (props) => {
    return (
        <div>
            <div>
                <div className="card" style={{ "width": "18rem;" }}>
                <img src={zock1} class="card-img-top" alt="..."/>
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
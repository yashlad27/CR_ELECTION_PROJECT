import React from "react";
import './card.css';

function card(props) {
    return (
        <div className="card-container">
            <div className="image-container">
            <img src = {props.imageURL} alt=""/>
            </div>

            <div className="card-content">
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <p>{props.body}</p>
            </div>
            </div>

            <div className="btn">
                <button>
                        VOTE ME!
                </button>
            </div>

        </div>
    )
}

export default card;
import React from "react";
import './card.css';

function card({title, imageURL, body}) {
    return (
        <div className="card-container">
            <div className="image-container">
            <img src = {imageURL} alt = "image" />
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
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
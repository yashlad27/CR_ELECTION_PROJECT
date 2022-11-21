import React from 'react';

// class Card extends React.Component {
//     render()
// }

const Card = (props) => {

    const {name, email, id} = props;
    return (
        // <h1>ROBOFRIENDS</h1>
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h1>ROBOFRIENDS</h1>
            {/* <img alt='robots' src = 'https://robohash.org/test?200x200'></img> */}
            <img alt='robots' src = {`https://robohash.org/${id}?200x200`} />
            <div>
                {/* <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p> */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
import React from 'react'
import student_card from "../data/student_info";
import './MainContent'

const MainContent = () => {
    console.log(student_card);

    const listItems = student_card.map((item) => 
    <div className='card' key={item.id}>

        <div className='card_img'>

            <img src="https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=6&m=1016744034&s=170667a&w=0&h=rO1167wSKkLSCFER6c7vjmceJrtyutZW6cF8XSX4bmk=" 
            alt="student_profile_pic"
            />

        </div>

        <div className='card_header'>
            <h2>{item.student_name}</h2>
            <h2>{item.ERP}</h2>
            <h2>{item.Panel}</h2>
            <h2>{item.Year}</h2>
            <h2>{item.Department}</h2>
            <h3>{item.Quote}</h3>
            <div className='btn'>Vote Me!</div>
        </div>

    </div>
    );
    return(
        <div className='main_content'>
            {/* <h3>CR Candidates</h3> */}
            {listItems};
        </div>
    )
}

export default MainContent;
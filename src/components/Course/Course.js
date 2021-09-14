import React from 'react';
import './Course.css';
import { Button } from 'react-bootstrap';
const Course = (props) => {
    const {name,instructor,price,image}=props.course;
    return (
        <div className="course">
            <div>
                <img src={image} alt="Nice"/>
            </div>
            
            <div>
                <h1 className="course-name">Name:{name}</h1>
                <h1>Instructor:{instructor}</h1>
                <h1>Price:{price}</h1>
                <Button variant="warning" onClick={()=> props.handler(props.course)}>Enroll Now</Button>
            </div>
        </div>
    );
};

export default Course;
import React, {useState} from 'react';
import Course from '../Course/Course';
import courseData from '../../fakeData/courseData';
import Cart from '../Cart/Cart';
import Header from '../Header/Header'
import "./Shop.css"
const Shop = (props) => {
    const [state, setstate] = useState(courseData)
    const [cart,setCart]=useState([])

    const onChangeHandler=(d)=>{
        const newCart =[...cart,d]
        setCart(newCart)

    }
    return (
        <div className="shop">
            
            <div className="course-container">
                {
                    state.map((course)=>
                        <Course course={course}  handler={onChangeHandler}/>
                        )
                }
            </div>

            <div>
                <Cart cart={cart} />
            </div>
            
        </div>
    );
};

export default Shop;
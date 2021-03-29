import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment, decrement } from "./Actions";

function Counter(){
   
   
    const [count, setCount] = React.useState(0);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
        setCount(count - 1);
      
      };
    const handleDecrement = () => {
        dispatch(decrement());
        setCount(count - 1);
      };
    
    
 return(
            <div>
                <h3> {`Count: ${count}`} </h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={handleIncrement}> Increment </button>
                    <button onClick={handleDecrement}> Decrement </button>
                </div>
            </div>
           


        );
    
}

export default Counter;
//<h3> {`Count: ${count}`} </h3>
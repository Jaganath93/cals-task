import { useDispatch, useSelector } from "react-redux";
import { getValue, setValue } from "../Redux/slices/input1";
import { store } from "../Redux/Store";


export const Calculator = ()=>{

    const dispatch = useDispatch();
    // const selector = useSelector(setValue)    

    return(
        <div>
            <h1>Calculator</h1>
            <div style={{display:'flex', justifyContent:'center'}}>
                <input placeholder="Input 1" value={getValue()}/>
                <input placeholder="Input 2"/>
                <p style={{marginLeft:'10px'}}>k</p>
            </div>
            <div style={{border:'2px solid',height:'100px', marginLeft:'600px', marginRight:'600px', marginTop:'50px'}}>
                <div>
                    <button onClick={(e)=> dispatch(setValue(e.detail))}>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <div>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <div>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                </div>
                <div>
                    <button>C</button>
                    <button>S</button>
                </div>
            </div>
        </div>
    );
};
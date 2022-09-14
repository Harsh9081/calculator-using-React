import "./styles/main.css";
import {useRef} from 'react';
import {useState} from 'react';

function Ex1(){
    let no1 = useRef();
    let no2 = useRef();
    const [answer,setans] = useState(0);
    const add =()=>{
        let num1 = no1.current.value;
        let num2 = no2.current.value;
        setans(Number(num1)+Number(num2));
    }
    const sub = ()=>{
        let num1 = no1.current.value;
        let num2 = no2.current.value;
        setans(num1-num2);
    }
    const mul = ()=>{
        let num1 = no1.current.value;
        let num2 = no2.current.value;
        setans(num1*num2);
    }
    const div = ()=>{
        let num1 = no1.current.value;
        let num2 = no2.current.value;
        setans(num1/num2);
    }
    return (
        <div className="container">
            <h1>Calculator app</h1>
            <span>No1 <input ref={no1}></input></span>
            <span>No2 <input ref={no2}></input></span>
            <h2>Answer is :-{answer}</h2>
            <span><button onClick={add}>Addition</button><button onClick={sub}>Subtraction</button><button onClick={mul}>Multiplication</button><button onClick={div}>Division</button></span>
        </div>
    );
}
export default Ex1;
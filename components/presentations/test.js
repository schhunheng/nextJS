import React ,{useState,useEffect} from 'react'
const Example = (props) => {
    const [count, setCount]=useState(0);

    useEffect(()=>{
        document.title=`clicked ${count} times`
    })
    function sum(){
        setCount(count+1);
    }
    return ( 
        <>
            <p>{count}</p>
            <button onClick={sum}>Click here</button>
            <img src={props.url} />
        </>
     );
}
 
export default Example;
import React, {useState, useEffect, useContext} from 'react';
import Example from './Example';

const ExampleContext = React.createContext();


function ExampleProvider(props){
    const [num, setNum] = useState(7);
    const aObj = {number: num, addOne:() => setNum(num+1)};
    return (
        <ExampleContext.Provider value = {aObj}>
         {props.children}
        </ExampleContext.Provider>
    )
}

function One(props){
    const myNum = useContext(ExampleContext);
    return (
        <div>
            <h1>{myNum.number}</h1>
            <button onClick = {myNum.addOne}>Add One</button> 
        </div>
    )
}

function Two(props){
    return(
        <div>
            <One/>
        </div> 
    )
}

function Pass(){
    const [num, setNum] = useState(7);
    return(
        <div>
            <h1>Context API Example</h1>
            <ExampleProvider>
            <Two/>
            </ExampleProvider>
        </div>
    )
}

export default Pass;
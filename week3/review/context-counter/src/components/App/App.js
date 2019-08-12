import React from 'react';

fuction App = () =>{
    const [counter, setCounter] = React.useState(0);
    return(
        <div>
            <button onClick={()=>setCounter(counter => counter +1)}>
                increment
            </button>
            {counter}
            <button onClick={()=>setCounter(counter => counter - 1)}>
                decrement
            </button>
        </div>
    )    
}

export default App;
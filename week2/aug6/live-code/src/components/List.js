import React, {useState, useEffect} from 'react';

function Number(props){
    function handleClick(props){
        props.remove(props.id)
    }
    return(
        <div>
        {props.num} <button onCLick ={handleClick} >Delete</button>
        </div>
    )
}

function List(){

    const [list, setList] = useState([1, 3, 8]);
    const[value, setValue] = useState("");

    function handleChange(e){
        setValue(e.target.value);
    }

    function addItem(e){
        e.preventDefault();
        setList([...list, value]);
        setValue("");
    }

    function handleRemove(id){
        const newList = list.filter((item , index ) => item !== id)
        setList(newList);
    }
    return(
        <div>
        <h1>My List</h1>
        <ul>
            {list.map((item, index) => (
                 <Number key = {index} num = {item} id = {index} 
                 remove ={handleRemove}/>
            ))}
        </ul>
        
        <form onSubmit = {addItem}>
            <input type = "text" onChange = {handleChange} value = {value}/>
            <input type = "submit"/>
        </form>

        </div>
    )
}

export default List
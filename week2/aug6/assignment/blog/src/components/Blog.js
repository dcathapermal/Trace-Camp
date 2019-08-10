import React, {useState, useEffect} from "react";


function Blog(){

    const[title, setTitle] = useState("")
    const[post, setPost] = useState("")


    const [blog, setBlog] = useState([
        {
            title: "Title2",
            post: "The second blog post"
        },
        {
            title: "sample 3",
            post: "ye mum"
        }
    
    ]);

    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handlePost(e){
        setPost(e.target.value);
    }

    // function addBlog(e){
    //     e.preventDefault()
    //     setBlog([...blog, {title: {title}, post: {post}}]);
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        setBlog(blog.concat([{title: title, post: post}]))
    }

    return (
    <div>
        <h1>Blog Page</h1>
        <form>
            <input type = "text" placeholder = "Enter Title" onChange = {handleTitle}
            value = {title} />
            <input type = "text" placeholder = "Enter Blog Text" onChange = {handlePost}
            value = {post}/>
            <button onClick = {onSubmit}>Submit</button>
        </form>
        {blog.map(item => (
            <div> 
                <h2>{item.title}</h2>
                <p>{item.post}</p>
            </div>
    ))}
    </div>
     )
}

function Pages(){
    return(
        <BrowserRouter>
        <div>
            <nav>
                <NavLink to ="/"> Home</NavLink>
                <NavLink to ="/about/">About</NavLink>
                <NavLink to ="/contact/">Contact</NavLink>
            </nav>
        <Route path = "/" exact component = {Blog} />
        <Route path = "/about" component = {Blog} />
        <Route path = "/contact" component = {Blog} />
        </div>
        </BrowserRouter>
    );
}

export {Blog, Pages}
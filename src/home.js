import { useState ,useEffect} from "react";
import BlogList from "./blogList";


const Home = () => {

  

    const [blogs,setBlogs]= useState(
        [
            {id:1,title:'My First Blog',content:'This is my first blog post',author:'menza'},
            {id:2,title:'My Second Blog',content:'This is my second blog post',author:'menza'},
            {id:3,title:'My Third Blog',content:'This is my third blog post',author:'Mariama'}
        ]
        
    )
    
    
    
    const handleDelete = (id) => {
        const newBlogs =blogs.filter(blog=> blog.id !== id)
        setBlogs(newBlogs)
    };

    //this function useEffect is called everytime the state changes and have to re-render , the empty array at the end will help to just apply this function first time we render 
    useEffect(() => {
        console.log("use effect");
        
    },[]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author=== 'menza')} title="Menza's Blogs"/> */}
        </div>
    )
}
export default Home;
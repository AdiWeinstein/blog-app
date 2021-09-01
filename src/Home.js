
import BlogList from './BlogList';
import useFetch_customHook from './useFetch_customHook';



function Home() {
   const {data: blogs, isPending} = useFetch_customHook("http://localhost:8000/blogs")
   // npx json-server --watch data/db.json --port 8000

    // const handleDelete = (id) => {
    //     const newBlogList = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogList) 
    // }

    return (
        <div className='home'>
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title='All Blogs'  />}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
            
        </div>
    );
}

export default Home

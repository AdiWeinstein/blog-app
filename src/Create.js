import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [ author, setAuthor] = useState('Adi')
    const history = useHistory(); //go back and forward and also redirect to another route

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        
        fetch("http://localhost:8000/blogs" , {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            history.push('/') // rout to homePage after creating a new blog
        });

        
    }
    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type='text'
                required
                value= {title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value= {body}
                onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                 <label>Blog author:</label>
                 <select 
                 value= {author}
                 onChange = {(e) => setAuthor(e.target.value)}>
                     <option value="Adi">Adi</option>
                     <option value="Tal">Tal</option>
                 </select>
                 <button>Add blog</button>
                 <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p>
            </form>
        </div>
    )
}

export default Create

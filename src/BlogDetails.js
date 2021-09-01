import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch_customHook from './useFetch_customHook'

function BlogDetails() {
    const { id } = useParams()
    const {data: blog , isPending} = useFetch_customHook("http://localhost:8000/blogs/" + id)
    const history = useHistory()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id , {
            method: "DELETE",
        }).then(() => {
            history.push('/');
        })

    }
    return (
        <div className='blog-details'>
            {isPending && <div>Loading...</div>}
            {blog && (
                <articale>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </articale>
            )}
        </div>
    )
}

export default BlogDetails

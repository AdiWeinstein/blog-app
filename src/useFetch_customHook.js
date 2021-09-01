import React, { useEffect, useState } from 'react'

function useFetch_customHook(url) {
    const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true)

useEffect(() => {
    fetch(url)
    .then(res => {
        console.log("res",res)
        if(!res.ok){
            throw Error('could not fetch the data for that resource')
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        setData(data)
        setIsPending(false)
 
    })

}, [url])
    return { data, isPending }
}

export default useFetch_customHook

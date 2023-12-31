import { useEffect, useState } from "react";

export function useFetch (url,options = {}){
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)
    const [errors, setErrors] = useState(null)

    /**Dès que le composant est monté on va faire le chargement */
    useEffect(() =>{
        fetch(url,{
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        }).then(r=> r.json()).then(data => {
            setLoading(false)
            setData(data)
        }).catch((e) => {
            setErrors(e)
        }).finally(() =>{
            setLoading(false)
        })
    },[])

   

    return {
        loading,
        data,
        errors
    }
}
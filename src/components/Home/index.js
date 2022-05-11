import HomeCard from '../HomeCard'
import { useState, useEffect } from 'react'
import axios from 'axios'




function Home(){
    function getSuggestion(){
        const promise = axios.get("http://192.168.7.20:5000/suggestions")
        promise.then((response)=>{
            setSuggestion(response.data)
            console.log(response)
        })
    }

    const [suggestion, setSuggestion] = useState({image:'', description:'', route:''})

    useEffect(getSuggestion, [])

    return <HomeCard 
            image = {suggestion.image}
            description = {suggestion.description}        
            route = {`/coffees/${suggestion.product_id}}`}/>
}

export default Home
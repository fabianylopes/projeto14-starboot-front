import HomeCard from '../HomeCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'

import { Main } from './style'

function Home() {
    function getSuggestion() {
        const promise = axios.get("http://localhost:5000/suggestions")
        promise.then((response) => {
            setSuggestion(response.data)
            console.log(response)
        })
        
    }

    const [suggestion, setSuggestion] = useState({ image: '', description: '', route: '' })

    useEffect(getSuggestion, [])

    return (
        <>
            <Navbar />
            <Main>
                <section>
                    <HomeCard
                        image={suggestion.image}
                        title={"INDICAÇÃO DO ESPECIALISTA"}
                        description={suggestion.description}
                        route={`/coffees/${suggestion.product_id}`} />
                </section>

                <section>
                    <HomeCard
                        image={"https://www.starbucks.com.br/public/img/coffee/whole-bean-banner.jpg"}
                        title={"CONHEÇA NOSSOS CAFÉS"}
                        description={"Independente do seu gosto ou paladar, encontrará um café Starboot® perfeito para você."}
                        route={`/coffees`} />
                </section>

            </Main>
        </>
    )
}

export default Home
import { useState, useEffect } from 'react';

import { Main } from './style';
import Navbar from '../Navbar';
import HomeCard from '../HomeCard';
import api from '../../services/api';

function Home() {

    function getSuggestion() {
        api.showSuggestion().then((response) => setSuggestion(response.data));
        
    }

    const [suggestion, setSuggestion] = useState({ image: '', description: '', route: '' })

    useEffect(getSuggestion, [])

    return (
        <>
            <Navbar color={false} />
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
    );
}

export default Home;
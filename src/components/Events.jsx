import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {Load} from "./load";

export const Events = () => {

    const [inSide, setInside] = useState([])
    const [loaded, setLoaded] = useState(false)

    const fetchData = useCallback(() => {
        axios.get('https://www.wp.cdricart-dev.fr/wp-json/wp/v2/posts?categories=23')
            .then((response) => {
                setInside(response.data)
                setLoaded(true);
            })
            .catch(error => console.log('Erreur ' + error))
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return <section className="page-oeuvre">
            <div className="container-text-card">
                <h2>Événements</h2>
                <span className="tiret"/>
            </div>
        {loaded ?
        <div className="container-events">
                {inSide.map((post, index) => (
                    <div className="event" key={index}>
                        <div className="text">
                            <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                            <span className="tiret"/>
                        </div>
                        <div className="text-image">
                            <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                        </div>
                    </div>
                ))}
            </div>
        :
            <Load/>
    }
    </section>
}
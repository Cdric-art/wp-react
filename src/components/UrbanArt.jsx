import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {Load} from "./load";

export const UrbanArt = () => {

    const [urban, setUrban] = useState([])
    const [loaded, setLoaded] = useState(false)

    const fetchData = useCallback(() => {
        axios.get('https://www.wp.cdricart-dev.fr/wp-json/wp/v2/posts?categories=2')
            .then((response) => {
                setUrban(response.data)
                setLoaded(true);
            })
            .catch(error => console.log('Erreur ' + error))
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    if (loaded) {
        return <section className="page-oeuvre">
            <div className="container-text-card">
                <h2>Oeuvres en extérieur</h2>
                <span className="tiret" />
            </div>
            <div className="container-oeuvre">
                {urban.map((post, index) => (
                    <div className="card" key={index}>
                        <h2 className="card-title" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                        <p className="card-text" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                    </div>
                ))}
            </div>
        </section>
    } else {
        return <Load />
    }

}
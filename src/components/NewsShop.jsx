import React from 'react';
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Load} from "./load";

const { REACT_APP_CONSUMER_KEY, REACT_APP_CONSUMER_SECRET } = process.env;

export const NewsShop = () => {

    const [news, setNews] = useState([])
    const [loaded, setLoaded] = useState(false)

    const fetchData = useCallback(() => {
        axios.get(`https://www.wp.cdricart-dev.fr/wp-json/wc/v3/products?orderby=date&per_page=3&consumer_key=${REACT_APP_CONSUMER_KEY}&consumer_secret=${REACT_APP_CONSUMER_SECRET}`)
            .then((response) => {
                setNews(response.data)
                setLoaded(true);
            })
            .catch(error => console.log('Erreur ' + error))
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loaded) {
        return <div className="shop-news">
            {
                news.map((product, index) => (
                    <div key={index} className="news">
                        <h2 className="card-title">{product.name}</h2>
                        <span className="tiret"/>
                        <p dangerouslySetInnerHTML={{__html: product.price_html}}/>
                        <a href={product.permalink} className="link">Vers la boutique</a>
                        <figure>
                            <img src={product.images[0].src} alt={product.name}/>
                        </figure>
                    </div>
                ))
            }
        </div>
    } else {
        return <Load/>
    }
}

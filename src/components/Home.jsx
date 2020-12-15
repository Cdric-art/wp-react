import React from 'react';
import inside from "../images/inside1.jpg";
import inStreet from "../images/street6.jpg";
import {NewsShop} from "./NewsShop";

export const Home = () => {

    return <section className="home">
        <div className="part">
            <div className="text">
                <h2>
                    Inencadrable est l’un des adjectifs qui colle le mieux à la peau de Artiste.
                </h2>
                <span className="tiret"/>
                <p>
                    D’abord parce que son terrain d’intervention privilégié est la rue, et ce depuis l’adolescence dijonnaise.
                    Dans le milieu du graffiti en premier lieu, puis dans la sphère de l’art urbain par le biais du pochoir et de l’affiche.
                    Ensuite, parce qu’il s’inscrit en marge de tout académisme qui voudrait qu’un mot soit dans le dictionnaire.
                    Contrairement à ce que certains se plaisent à dire, pour ce créateur pluridisciplinaire l’art ne doit pas être encadré.
                    Il doit pouvoir s’affranchir de ses cimaises pour asséner des vérités qui font barrage au politiquement correct,
                    et proposer une alternative à une discipline purement décorative. Selon lui, il n’y a pas d’initiative artistique sans engagement,
                    pas d’engagement sans action, pas d’action sans combat, et c’est pourquoi tout ce qui sort des clous lui va comme un gant – de boxe !
                    Mais il serait simpliste de seulement limiter son art à un pugilat visuel dans la mesure où il induit plusieurs niveaux d’interprétation.
                    Il y a indéniablement une fragilité sous sa force de frappe, une poétique du discours qui rend la violence de ses uppercuts un peu moins durs.
                    L’enfant-symbole espiègle ou frondeur, en porte-parole éclairé, arbore les couleurs de l’insurrection pour donner le ton
                    mais sa vulnérabilité en est le corollaire.
                </p>
            </div>
            <div className="text-image">
                <img src={inside} alt="Inside"/>
            </div>
        </div>
        <div className="part">
            <div className="text-image">
                <img src={inStreet} alt="InStreet"/>
            </div>
            <div className="text">
                <h2>
                    Son combat
                </h2>
                <span className="tiret"/>
                <p>
                    Artiste le mène au gré de portraits qu’il décline sur toutes sortes de supports, en rue mais également en atelier.
                    Il utilise aussi bien les objets de récupération pour réaliser ses pochoirs que le papier pour ses sérigraphies, collages et affiches.
                    Talonnant sans relâche l’actualité et les travers de notre civilisation, il milite en permanence dans un jeu d’action/réaction.
                    Une remarque malencontreuse d’un élu politique, une cause qui le touche, un fait divers qui le choque, un crime qui l’insupporte…
                    Sont autant de raisons de répondre à coups de punchlines percutantes sur les murs des cités.
                    Si les personnages masqués sont légion dans son portfolio, c’est notamment pour mieux illustrer
                    les conditions de vie d’une population opprimée que les gouvernements musèlent : les clandestins, migrants, ouvriers, scandent des slogans revendicatifs
                    dans un cri muet pour contrer l’indifférence et les injustices dont ils sont les victimes. Masqués, nous le sommes plus que jamais dans un avenir
                    incertain où la nature se venge des abus commis par l’homme à coups de virus. Cela, quand le peuple, en bon « dernier de cordée »,
                    ne se retrouve pas gazé et matraqué par une police d’état toujours plus répressive, cynique et aveugle.
                </p>
            </div>
        </div>
        <div className="shop-news-title">
            <h2>Nouveautés en boutique</h2>
            <span className="tiret" />
        </div>
        <NewsShop />
    </section>

}
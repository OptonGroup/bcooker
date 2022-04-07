import React, {useState} from "react";
import {useParams} from "react-router-dom"
import {ExportCardsList} from "../pages/Home"
import back from "../temp/back.svg";
import {ReactComponent as Save} from "../temp/save.svg";
import {Footer} from "./Footer"
import {ReactComponent as Times} from '../temp/time.svg';
import {ReactComponent as Chart} from '../temp/bar-chart.svg';
import {ReactComponent as Serving} from '../temp/serving.svg';


export const Dish = () => {
    const params = useParams();
    const cardId = params.id;
    const cards = ExportCardsList();
    const card = cards[cardId];
    const [saved, changeSave] = useState(false);
    
    if(card===undefined)
        return <h2>Нихрена не найдено</h2>;
    else
        return(
            <div>
                <div id="dish">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand ms-2" href="/"><img src={back} alt=""/></a>
                            <h3 className="mt-1">{card.name}</h3>
                            <span className="navbar-brand" onClick={() => changeSave(!saved)}><Save className={`save ${saved ? "saved" : ""}`}/></span>
                        </div>
                    </nav>

                    <div className="dish-back">
                        <span className="dish-span mt-4" ></span>
                        <img className="dish-img mt-4" src={card.img} alt=""/>
                        <div className="dish-img-description d-flex justify-content-center">
                            <div className="d-flex flex-column">
                                <Times fill="white" alt=""/>
                                <p>{card.time} Min</p>
                            </div>
                            <div className="d-flex flex-column">
                                <Serving fill="white" alt=""/>
                                <p>{card.serving} Servings</p>
                            </div>
                            <div className="d-flex flex-column">
                                <Chart fill="white" alt=""/>
                                <p>{card.kcal} Kcal</p>
                            </div>
                        </div>
                    </div>
                    <div className="dish-description">
                        <span></span>
                        <h2 className="title">Ingredients</h2>
                        {card.ingredients.map((ingredient, ind) => (
                            <p className="text" key={ind}>{ingredient}</p>
                        ))}
                        <h2 className="title">Directions</h2>
                        {card.directions.map((direction, ind) => (
                            <p className="text" key={ind}>{direction}</p>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
            
        )
};
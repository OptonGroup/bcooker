import React from "react";
import { NavLink } from 'react-router-dom'
import times from '../temp/time.svg';
import chart from '../temp/bar-chart.svg';

export const Cards = ({cards, findFilter}) => {
    return(
        <div className="cards w-100 pt-5 pb-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {cards.map(card => {
                        if (card.name.toLowerCase().search(findFilter.toLowerCase()) !== -1){
                            return(
                                <NavLink to={`/${card.id}`} className="card" key={card.id}>
                                    <img className="card-img" src={card.img} alt={card.name}/>
                                    <h3 className="card-text text-center">{card.name}</h3>
                                    <div className="card-inf justify-content-center">
                                        <div className="time">
                                            <img className="time-img" src={times} alt=""/>
                                            <p className="time-text">{card.time} min</p>
                                        </div>
                                        <span></span>
                                        <div className="chart">
                                            <img className="chart-img" src={chart} alt=""/>
                                            <p className="chart-text">{card.kcal} kcal</p>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }
                    })}
                </div>  
            </div>
        </div>
        
    )
}
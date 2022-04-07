import React, {useState} from "react"
import {Cards} from "../components/Cards"
import {Footer} from "../components/Footer"
import {ReactComponent as Search} from "../temp/search.svg";

const cards = [
    {id: 0, name: "Avocado Salad", time: 30, serving: 2, kcal: 90, 
      ingredients: ["1 1⁄2 lbs shrimp, peeled & deveined", "1⁄2 cup oil", "1 egg, beaten", "1 cup all-purpose flour", "1⁄2 cup milk", 
          "3⁄4 teaspoon seasoning salt", "1⁄4 teaspoon salt", "oil (for deep frying)"
        ],
      directions: ["Preheat oil to 350 degrees.", "Combine 1/2 cup oil and egg; beat well.", "Add remaining ingredients except oil for frying and stir until well blended.", 
                      "Dip shrimp into batter to coat.", "Drop shrimp into hot oil and fry for 30-60 seconds or until golden brown."],
      img: require("../temp/AvocadoSalad.png")},
    {id: 1, name: "Corn Soup", time: 30, serving: 2, kcal: 90,
      ingredients: ["1 1⁄2 lbs shrimp, peeled & deveined", "1⁄2 cup oil", "1 egg, beaten", "1 cup all-purpose flour", "1⁄2 cup milk", 
          "3⁄4 teaspoon seasoning salt", "1⁄4 teaspoon salt", "oil (for deep frying)"
        ],
      directions: ["Preheat oil to 350 degrees.", "Combine 1/2 cup oil and egg; beat well.", "Add remaining ingredients except oil for frying and stir until well blended.", 
                      "Dip shrimp into batter to coat.", "Drop shrimp into hot oil and fry for 30-60 seconds or until golden brown."],
      img: require("../temp/CornSoup.png")},
    {id: 2, name: "Vegetable Salad", time: 30, serving: 2, kcal: 90,
      ingredients: ["1 1⁄2 lbs shrimp, peeled & deveined", "1⁄2 cup oil", "1 egg, beaten", "1 cup all-purpose flour", "1⁄2 cup milk", 
        "3⁄4 teaspoon seasoning salt", "1⁄4 teaspoon salt", "oil (for deep frying)"
      ],
      directions: ["Preheat oil to 350 degrees.", "Combine 1/2 cup oil and egg; beat well.", "Add remaining ingredients except oil for frying and stir until well blended.", 
                      "Dip shrimp into batter to coat.", "Drop shrimp into hot oil and fry for 30-60 seconds or until golden brown."],
      img: require("../temp/VegetableSalad.png")},
    {id: 3, name: "Salmon Steam", time: 30, serving: 2, kcal: 90,
      ingredients: ["1 1⁄2 lbs shrimp, peeled & deveined", "1⁄2 cup oil", "1 egg, beaten", "1 cup all-purpose flour", "1⁄2 cup milk", 
        "3⁄4 teaspoon seasoning salt", "1⁄4 teaspoon salt", "oil (for deep frying)"
      ],
      directions: ["Preheat oil to 350 degrees.", "Combine 1/2 cup oil and egg; beat well.", "Add remaining ingredients except oil for frying and stir until well blended.", 
                      "Dip shrimp into batter to coat.", "Drop shrimp into hot oil and fry for 30-60 seconds or until golden brown."],
      img: require("../temp/SalmonSteam.png")},
    {id: 4, name: "Fried Shrimp", time: 30, serving: 2, kcal: 90,
      ingredients: ["1 1⁄2 lbs shrimp, peeled & deveined", "1⁄2 cup oil", "1 egg, beaten", "1 cup all-purpose flour", "1⁄2 cup milk", 
        "3⁄4 teaspoon seasoning salt", "1⁄4 teaspoon salt", "oil (for deep frying)"
      ],
      directions: ["Preheat oil to 350 degrees.", "Combine 1/2 cup oil and egg; beat well.", "Add remaining ingredients except oil for frying and stir until well blended.", 
                      "Dip shrimp into batter to coat.", "Drop shrimp into hot oil and fry for 30-60 seconds or until golden brown."],
      img: require("../temp/FriedShrimp.png")},
    {id: 5, name: "Egg Boil Bread", time: 30, serving: 2, kcal: 90,
      ingredients: ["1 1⁄2 lbs shrimp, peeled & deveined", "1⁄2 cup oil", "1 egg, beaten", "1 cup all-purpose flour", "1⁄2 cup milk", 
        "3⁄4 teaspoon seasoning salt", "1⁄4 teaspoon salt", "oil (for deep frying)"
      ],
      directions: ["Preheat oil to 350 degrees.", "Combine 1/2 cup oil and egg; beat well.", "Add remaining ingredients except oil for frying and stir until well blended.", 
                      "Dip shrimp into batter to coat.", "Drop shrimp into hot oil and fry for 30-60 seconds or until golden brown."],
      img: require("../temp/EggBoilBread.png")},
  ]

export function ExportCardsList() {
  return cards;
}

export const Home = () => {
  const [find, setFind] = useState("");
  return (
    <div>
      <div id="home" className="pt-4">
        <div className="container">
          <h1>Find Your Food</h1>
          <div className="searchbar mt-4">
            <input className="search_input" type="text" name="" placeholder="Search..." value={find} onChange={e => setFind(e.target.value)}/>
            <a href="/#" className="search_icon"><Search width="60%" height="100%"/></a>
          </div>
          <Cards cards={cards} findFilter={find}/>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}
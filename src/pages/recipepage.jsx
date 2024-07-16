import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { recipeName } = useParams();
  const [healthLabels, setHealthLabels] = useState([]);
  const [recipe, setrecipe] = useState({
    image: "",
    calories: 0,
    ingredients: [],
  });
  const apiID = "4f25baaf";
  const apiKey = "7190dce63df4eeeb337a1da50da55a75";

  const getrecipe = async (recipeName) => {
    const url = `https://api.edamam.com/search?q=${recipeName}&app_id=${apiID}&app_key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // const ingredients = data.hits[0].recipe.ingredients.map((line) => line.food);
      if (data && data.hits) {
        if (data.hits.length > 0) {
          setHealthLabels(data.hits[0].recipe.healthLabels);
          setrecipe({
            image: data.hits[0].recipe.image,
            calories: data.hits[0].recipe.calories,
            // ingredients: ingredients,
          });
        } else {
          setHealthLabels([]);
        }
      }

      console.log(data);
      // console.log(ingredients)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getrecipe(recipeName);
  }, [recipeName]);

  return (
    <div>
      <header className="w-full h-[100vh] ">
        <div className="relative w-full h-full">
          <img
            src={recipe.image}
            alt="imgs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-2 z-4 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 mt-12">
          <div className="flex justify-center items-center">
            <div className="text-white text-5xl ">
              <h1>{recipeName}</h1>
            </div>
          </div>
        </div>
      </header>
          <div className=" bg-slate-900 text-slate-400 body ">
              <h3 className="text-2xl ml-3 text-green-600 font-bold">Health Labels:</h3>
            <div className="my-3 mx-10"> 
              <ul>
                {healthLabels.map((label, index) => (
                  <li key={index}>{label}</li>
                ))}
              </ul>
            </div>
            
          </div>
    </div>
  );
};

export default RecipeDetail;
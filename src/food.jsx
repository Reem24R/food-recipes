import { useRef, useEffect, useState } from "react";
import './food.css'
import {Banner1,Banner2,Banner3,Banner4,Banner5} from './imgs';
// import {useNavigate} from 'react-router-dom'
// import Recipepage from './recipepage';
// import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
// import { Banner1 } from "./imgs";'./imgs/index';
export default function Food() {
  const images=[Banner1,Banner2,Banner3,Banner4,Banner5]
  const query = "chicken";
  // const [recipeName, setRecipeName] = useState('');
  const [foodname, setfoodname] = useState({
    q:"",
    to:0,
    from:0,
    recipeData: []
  });
  const apiID = "4f25baaf";
  const inputref = useRef();
  const apikey = "7190dce63df4eeeb337a1da50da55a75";

  const search = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${apiID}&app_key=${apikey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const recipeData = data.hits.map(hit => hit.recipe);
      setfoodname({
        q: data.q,
        hits: data.hits,
        from: data.from,
        to: data.to,
        recipeData: recipeData
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
 
  useEffect(() => {
    search(query);
    // setRecipeName(query);
  }, []);

  return (
    <div >
      {/* header */}
      <header className="w-full h-[100vh] ">
        <div className="relative w-full h-full">
        <img src={images[Math.floor(Math.random()*images.length)]} alt="imgs" className="w-full h-full object-cover" />
        </div>
      
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-2 z-4 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 mt-12">

      <h1 className="logo">Food Recipes</h1>
      <div className="flex justify-center
      items-center">
      <div className="bg-slate-200 rounded-full my-10">

      <input type="text" ref={inputref} className="bg-slate-200 w-[200px] h-[40px] rounded-xl outline-none ml-3"/>
        
      <button onClick={() => search(inputref.current.value)} className=" rounded-full bg-green-500 duration-100 ease-in-out hover:bg-green-700 text-white w-[50px] h-[50px]">click</button>
      </div>
      </div>
      </div>
      </header>
      
      {/*  */}
      <div className="bg-black w-full h-full">

     <div className="w-full text-center text-green-600 text-4xl font-bold">
       Food Name: {foodname.q} <br />
      </div>
        <div className="recipes">

        
       <div className="countainer my-10">
        <div className="row flex justify-between items-center">

   
     {
       foodname.recipeData.length > 0 && foodname.hits.map((hit,index)=>
        <div className="card  p-0 col-4 bg-slate-900 text-white rounded-xl my-4 flex flex-col mx-3" style={{width:'18rem'}} key={index}>
        
        
         
      <img src={hit.recipe.image} alt="img" className="card-img-top rounded-xl h-[170px]"  />
          
       <div className="card-body mt-3 ml-3">
         <h5 className="card-title">{hit.recipe.label}</h5>
        
      <Link to ={`/recipe/${hit.recipe.label}`} className="btn btn-primary bg-green-500 rounded-md w-[200px]  h-[30px] my-3"> view</Link>
         
       </div>
     </div>
      ) 
    }
    </div>
    </div>
    </div>
</div>
   
    </div>
  );
  
}

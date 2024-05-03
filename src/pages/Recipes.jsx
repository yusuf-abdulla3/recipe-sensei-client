import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import Stepper from "../components/Stepper";
import RecipeModal from "../components/RecipeModal";

export default function Recipes () {
  const [isAuth, setIsAuth] = useState(false);
  const [modal, setModal] = useState({name: "", videos:"", open: false});

  const recipes = JSON.parse(localStorage.getItem("recipes"))["recipes"]

  useEffect(()=>{
    if(window.localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    } else {
      window.location.href="/";
    }
  }, [isAuth])

  const handleModal = () => {
    setModal({...modal, open: !modal.open})
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto h-full bg-slate-200 px-5 py-5 my-5 md:my-10 justify-center items-center">
    <a href="javascript:history.go(-1)" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5h-12m0 0L5 1m-4 4L5 9"/>
  </svg>
  <span class="ml-2">Back</span>  </a>
    <div className="flex flex-col justify-center items-center gap-4">


  <RecipeModal modal={modal} setModal={setModal}/>


      { recipes &&
        recipes.map((recipe) => {
          return (
          <RecipeCard name={recipe.name} image={recipe.image} ingredients={recipe.ingredients} instructions={recipe.instructions} videos={recipe.video} modal={modal} setModal={setModal}/> 
          )
        })
        }
        </div>
    </div>
    
    <Footer />
    
    </>
  )
}
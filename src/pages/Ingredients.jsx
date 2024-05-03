import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ItemButton from "../components/ItemButton";
import Alert from "../components/Alert";
// import Stepper from "../components/Stepper";
import Gallery from "../components/Gallery";
import axios from "axios";



export default function Ingredients () {

  const [isAuth, setIsAuth] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateRecipe =  async(ingredients) => {
    event.preventDefault();
    setIsLoading(true);
    const url = `${import.meta.env.VITE_DJANGO_URL}/recipes/generate`
    let data = '';

    try {
    const response = await axios.post(
      url,
      {ingredients},
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
       data = JSON.stringify(response.data);
    } catch(error){
      console.log(error)
    } finally {
      setIsLoading(false);
    }
      localStorage.setItem("recipes", data)
      window.location.href="/recipes"
  }


  useEffect(()=>{
    if(window.localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    } else {
      window.location.href="/";
    }
  }, [isAuth])


  return (
    <>
    <Navbar />
    {isAlert && <Alert title="Already added!" subtext="Try adding something else or click next to continue."/>}

    <div className="container mx-auto h-full bg-slate-200 px-5 py-5 my-5 md:my-10">
      {/* <Stepper /> */}
      <h1 className="text-wrap text-2xl font-bold md:my-5">What ingredients do you have today?</h1>
      <SearchBar setIngredients={setIngredients} ingredients={ingredients} setIsAlert={setIsAlert} />
      
      <div className="flex flex-row justify-center mt-2">
       { 
        ingredients &&
          ingredients.map(item => {
            return (
              <ItemButton name={item} key={item} ingredients={ingredients} setIngredients={setIngredients}/>
            )
          })
        }
      </div>

     <Gallery isAlert={isAlert} setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients}/>
     
     <div className="text-end mt-5">
      {!isLoading? 
      <button 
        type="button" 
        className="px-5 py-3 md:mt-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-1/4"
        onClick={() => generateRecipe(ingredients)}
       >
          Generate
          </button>
          : 
          <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Generating...
</button>}
     </div>
    
    </div>
    <Footer />
    
    </>
  )
}
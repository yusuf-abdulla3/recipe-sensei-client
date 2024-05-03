import axios from "axios";
import { useState } from 'react';

const generateRecipe = async(ingredients) => {
  event.preventDefault();

  const [isLoading, setIsLoading] = useState(false);

  const url = `${import.meta.env.VITE_DJANGO_URL}/recipes/generate`
  console.log(url)

  
  const { data } = await axios.post(
    url,
    {ingredients},
    {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    console.log(data)

}

export default generateRecipe;
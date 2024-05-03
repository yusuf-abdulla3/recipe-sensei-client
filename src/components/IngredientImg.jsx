import { useState } from "react"

export default function IngredientImg({imgSrc, description, setIngredients, ingredients, setIsAlert}) {
  const handleClick = () => {
    if (ingredients.includes(description)) {
      setIsAlert(true);
    } else {
      setIsAlert(false);
      setIngredients([...ingredients, description])
    }
  }

  return (
    <div className="hover:brightness-50 transition-brightness duration-300 hover:scale-105 transition-scale duration-75">
        <img className={`h-auto max-w-full rounded-md`} src={imgSrc} alt={description} onClick={handleClick}/>
    </div>
  )
}
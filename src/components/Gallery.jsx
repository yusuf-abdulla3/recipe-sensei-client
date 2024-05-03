import IngredientImg from "./IngredientImg";

export default function Gallery({ingredients, setIngredients, isAlert, setIsAlert}) {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:mt-5">
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg" description="Flour" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" description="Eggs" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg?resize=980:*" description="Strawberries" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://www.visitcompletecare.com/wp-content/uploads/2020/11/shutterstock_1564269901-scaled.jpg" description="Sugar" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://www.seriouseats.com/thmb/Pu7FW1gTrLFGsAgLVkPMrqEGg2E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221205-Brioche-DebbieWee-11-20a59ff36944471f84f95701cef76476.JPG" description="Brioche Bread" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://misterbutcher.ca/cdn/shop/products/fish_460x@2x.png?v=1597108806" description="Salmon" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://embed.widencdn.net/img/beef/4hh1pywcnj/800x600px/Grind_Fine_85.psd?keep=c&u=7fueml" description="Ground Beef" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://www.savoryonline.com/app/uploads/recipes/154194/blanched-broccoli-florets.jpg" description="Broccoli" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://upload.wikimedia.org/wikipedia/commons/2/2f/Chou-fleur_02.jpg" description="Cauliflower" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg" description="Tomato" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg" description="Potato" />
    </div>
    <div>
      <IngredientImg setIsAlert={setIsAlert} ingredients={ingredients} setIngredients={setIngredients} imgSrc="https://blog.wisconsincheeseman.com/wp-content/uploads/sites/10/2022/10/sharp-cheddar-baby-swiss-1-edited-768x697.jpg.webp" description="Cheese" />
    </div>
</div>

  )
}
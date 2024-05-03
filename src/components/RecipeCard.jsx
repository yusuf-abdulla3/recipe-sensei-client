export default function RecipeCard({name, ingredients, instructions, videos, setModal, modal}){

const image = videos["items"][0]["snippet"]["thumbnails"]["high"]["url"]

  
  return(


<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span className="text-center">
        <img class="rounded-t-lg" src={image} alt="recipe image" />
    </span>
    <div class="p-5">
    <span className="text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
    </span>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{ingredients.join(", ")}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-white text-center">{instructions}</p>

        <button
            className="inline-flex justify-center items-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={() => setModal({...modal, name: name, videos: videos, open: !modal.open })}
          >
            Watch Video Instruction Showing Different Styles
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        
    </div>
</div>

  )
}
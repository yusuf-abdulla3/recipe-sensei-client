import { useEffect, useState, lazy } from "react";

import aboutImg from "../assets/about-img.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.css";

export default function About() {
  const [isAuth, setIsAuth] = useState(false);

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
      <div className="flex flex-col mt-10 place-content-center justify-center items-center mx-auto bg-white dark:bg-gray-900 ">
        <h1 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white pt-5">
          About
        </h1>
        <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-7">
          <h1 className="text-lg font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-xl dark:text-white pt-5">
            Ever stare into your fridge, brain blank, wondering what to cook for
            dinner?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-36 dark:text-gray-400">
            We've all been there. Inspiration can be fleeting, and grocery store
            trips can feel like a chore. But what if there was a smarter way to
            turn your pantry staples into delicious meals?
          </p>
        </div>

        <img className="home-img rounded-full mb-7" src={aboutImg}></img>

        <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-7">
          <h1 className="text-lg font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-xl dark:text-white pt-5">
            Enter Recipe Sensei, your AI-powered kitchen companion.
          </h1>
          <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-36 dark:text-gray-400">
            We're here to revolutionize the way you cook. Forget endless recipe
            searches and overflowing grocery lists. Recipe Sensei uses
            cutting-edge AI to unlock the culinary potential hidden within your
            own ingredients.{" "}
          </p>
        </div>

        <div className="px-4 mx-auto max-w-screen-xl text-center container">
          <h1 className="text-lg font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-xl dark:text-white pt-5 pb-3">
            Here's how it works:
          </h1>
          <ul className="text-left">
            <li className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-36 dark:text-gray-400">
              <span className="tracking-tight leading-none text-gray-900 dark:text-white">
                Simply tell us what you have on hand.{" "}
              </span>{" "}
              No need for fancy ingredients or specific measurements. Just list
              your pantry staples, leftovers, or that random jar of something
              you can't quite remember buying.
            </li>
            <li className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-36 dark:text-gray-400">
                Our AI gets to work, creatively combining your ingredients into
                inspiring recipes.
              We take into account dietary restrictions and preferences, so everyone can join the fun.
            </li>
            <li className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-36 dark:text-gray-400">
            Get step-by-step instructions and mouthwatering photos to guide you through the cooking process. We make it easy, even for beginner cooks.
            </li>
          </ul>
          <p className="mb-2 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-36 dark:text-gray-400">
              <span className="tracking-tight leading-none text-gray-900 dark:text-white">
                Recipe Sensei is more than just a recipe generator. It's a gateway to a world of culinary exploration.               
              </span>{" "}
              <ul className="text-left list-disc list-disc sm:px-16 lg:px-25 py-7">
              <li className="mb-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              <span className="tracking-tight leading-none text-gray-900 dark:text-white">
                Reduce food waste:              
              </span>{" "}
              Use up those forgotten ingredients before they spoil.
            </li>
            <li className="mb-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              <span className="tracking-tight leading-none text-gray-900 dark:text-white">
                Save time and money:               
              </span>{" "}
              No more impulse grocery store trips.
            </li>
            <li className="mb-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              <span className="tracking-tight leading-none text-gray-900 dark:text-white">
                Boost your cooking confidence:              
              </span>{" "}
              Discover new flavors and techniques with ease.
            </li>
            <li className="mb-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              <span className="tracking-tight leading-none text-gray-900 dark:text-white">
                Make meal prep a breeze:              
              </span>{" "}
              Plan delicious and varied meals for the week.
            </li>
            <li className=" text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              <span className="tracking-tight leading-none text-gray-900 dark:text-white">
                Rekindle the joy of cooking:
              </span>{" "}
                Rediscover the creativity and satisfaction of preparing a delicious meal from scratch.
            </li>

              </ul>

            </p>  
        </div>

        <div className="flex flex-col space-y-4 pb-7 sm:flex-row sm:justify-center sm:space-y-0">
          
          <a
            href={isAuth? "/ingredients" : "signup"}
            className="inline-flex justify-center items-center  px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
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
          </a>
          {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Learn more
            </a>   */}
        </div>
      </div>
      <Footer />
    </>
  );
}

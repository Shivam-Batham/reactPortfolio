import React, { useState } from "react";
import { Link } from "react-router-dom";
function Projects() {
  const [teckStack,setTeckState] = useState(["react", "Express","MongoDB","Node.Js"])

  
  
  return (
    <div>
      <div>
        <h1>
          Live Projects{" "}
          <span className="w-2 h-2 bg-green-400  rounded-full inline-block">
            {" "}
          </span>
        </h1>
        <hr />

        <div
          className=" mt-2
        border rounded-md w-[95%] m-auto p-2"
        >
          <div className="flex place-content-between">
            <h2>Instant Quiz</h2>
            <h2>
            <Link  to="https://quiz-contest-black.vercel.app/">

              Visit Website
            </Link>
              <span className="w-2 h-2 bg-red-400  rounded-full inline-block m-1">
                {" "}
              </span>
            </h2>
          </div>

          <div className="grid gap-2 grid-cols-6">
            <div className="sm:col-span-2 col-span-6">
              <img className="w-[100%] h-[12rem]" />{" "}
            </div>
            <ul className="sm:col-span-4 col-span-6">
              <li >
                <p className="">
                  <span className="w-1 h-1 bg-gray-100  rounded-full inline-block m-1"></span>
                  Introduced caching mechanisms to enhance performance in the
                  ongoing Laravel project.
                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-gray-100  rounded-full inline-block m-1"></span>
                  Introduced caching mechanisms to enhance performance in the
                  ongoing Laravel project.
                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-gray-100  rounded-full inline-block m-1"></span>
                  Introduced caching mechanisms to enhance performance in the
                  ongoing Laravel project.
                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-gray-100  rounded-full inline-block m-1"></span>
                  Introduced caching mechanisms to enhance performance in the
                  ongoing Laravel project.
                </p>{" "}
              </li>
              <li className="flex">
                <p>
                <span className="w-1 h-1 bg-gray-100  rounded-full inline-block m-1">
                  {" "}
                </span>
                Tech Stack - 
                <ul className="inline" >
                  {teckStack.map((i)=><li className="inline m-2">{i}</li>)}
                </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React,{useState} from 'react'
import { Link } from "react-router-dom";
import quiz from "./quiz.png"
function project() {
  const [teckStack,setTeckState] = useState(["React", "Express","MongoDB","Node.Js"])
  const bgcolorDark = "bg-[#3d3a3a]"
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
          className={`${bgcolorDark} mt-2  rounded-md  w-[95%] m-auto p-2`}

        >
          <div className="flex place-content-between">
            <h2>Instant Quiz</h2>
            <h2>
            <Link className='' to="https://quiz-contest-black.vercel.app/">

              Visit Website
            </Link>
              <span className="w-2 h-2 bg-red-400  rounded-full inline-block m-1">
                {" "}
              </span>
            </h2>
          </div>

          <div className="grid gap-2 grid-cols-6">
            <div className="sm:col-span-2 col-span-6">
              <img src={quiz} className="object-fill w-[100%] h-[12rem]" />{" "}
            </div>
            <ul className="sm:col-span-4 col-span-6">
              <li >
                <p className="">
                  <span className="w-1 h-1 bg-violet-400  rounded-full inline-block m-1"></span>
                  Instant Quiz is a Full-stack web application built using MERN stack that provides a Quick quiz contest.
                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-violet-400   rounded-full inline-block m-1"></span>
                  Allows users to register themselves and enter a 5min quick mock quiz.
                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-violet-400   rounded-full inline-block m-1"></span>
                  Allows users to mark answers of the questions, submit the quiz, providing a clear view of their result.
                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-violet-400   rounded-full inline-block m-1"></span>
                  Atractive Ui , Responsive design, usefull for school for taking short test or optional exams.
                </p>{" "}
              </li>
              <li className="flex">
                <p>
                <span className="w-1 h-1 bg-violet-400  rounded-full inline-block m-1">
                  {" "}
                </span>
                <span className="w-1 h-1 text-violet-400  inline m-1">
                 
                Tech Stack - 
                </span>
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
  )
}

export default project

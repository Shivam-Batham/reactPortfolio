
import React,{useState} from 'react'
import { useContext } from "react";
import { DarkmodeContext } from "../context/Darkmode";
import { Link } from "react-router-dom";
import quiz from "./quiz.png"
import todo from "./todo.png"
function ProjectsContainer() {
  const [teckStack,setTeckState] = useState(["React", "Express","MongoDB","Node.Js"])
  const {darkmode,ToggleDarkMode} = useContext(DarkmodeContext)
  return (
    
    <div>
    <div className={darkmode? "rounded dark-theme":"rounded light-theme"}>
        <h1 className='flex text-violet-500 pl-5 md:text-2xl uppercase font-semibold'>
          Projects{" "}
          <i class='text-green-400 text-xs bx bxs-circle bx-burst mt-2 ml-2'></i>

          {/* <span className="w-2 h-2 bg-green-400  rounded-full inline-block">
            {" "}
          </span> */}
        </h1>
        <hr />

        <div
          className={`card mt-2  rounded-md sm:w-[95%] w-[95%] m-auto p-2 `}

        >
          <div className="flex place-content-between">
            <h2 className='uppercase font-semibold'>Instant Quiz</h2>
            <h2>
            <Link className="btn p-2 border mx-auto my-4 rounded-md px-4" to="https://quiz-contest-black.vercel.app/">

              Visit
            </Link>
              {/* <span className="w-2 h-2 bg-red-400  rounded-full inline-block m-1">
                {" "}
              </span> */}
            </h2>
          </div>

          <div className="mt-4 grid gap-2 grid-cols-6">
            <div className="sm:col-span-2 col-span-6">
              <img src={quiz} className="temp rounded object-fill w-[100%] h-[12rem]" />{" "}
            </div>
            <ul className="sm:col-span-4 col-span-6">
              <li>
                <p className="">
                  <span className="w-1 h-1 bg-blue-400  rounded-full inline-block m-1"></span>
                  Instant Quiz is a Full-stack web application built using MERN stack that provides a Quick quiz contest.
                </p>{" "}
              </li>
              <li>
                <p>
                  <span className="w-1 h-1 bg-red-400   rounded-full inline-block m-1"></span>
                  Allows users to register themselves and enter a 5min quick mock quiz.
                </p>{" "}
              </li>
               
              <li>
                <p>
                  <span className="w-1 h-1 bg-yellow-400   rounded-full inline-block m-1"></span>
                  Atractive Ui , Responsive design, usefull for school for taking short test or optional exams.
                </p>{" "}
              </li>
              <li className="flex">
                <p>
                <span className="w-1 h-1 bg-green-400  rounded-full inline-block m-1">
                  {" "}
                </span>
                <span className="w-1 h-1 text-violet-500  inline m-1">
                 
                Tech Stack - 
                </span>
                <ul className="flex flex-wrap gap-x-4 font-bold" >
                  {/* {teckStack.map((i)=><li className="uppercase inline m-2">{i}</li>)} */}
                  <li className="d">React</li>
                  <li className="o">Express</li>
                  <li className="s">MongoDB</li>
                  <li className="b">Node.js</li>
                </ul>
                </p>
              </li>
            </ul>
          </div>
          
        </div>
        <hr className={ darkmode? " rounded w-[98%] m-auto dark-theme border-blue-500 mt-2":"rounded w-[98%] m-auto mt-2 light-theme border-blue-500 "} />
        <div
          className={`card mt-2  rounded-md sm:w-[95%] w-[95%] m-auto p-2 `}

        >
          <div className="flex place-content-between">
            <h2 className='uppercase font-semibold'>Todo App</h2>
            <h2>
            <Link className="btn p-2 border mx-auto my-4 rounded-md px-4" to="https://shivam-batham.github.io/TodoBuild/">

              Visit
            </Link>
              {/* <span className="w-2 h-2 bg-red-400  rounded-full inline-block m-1">
                {" "}
              </span> */}
            </h2>
          </div>

          <div className="mt-4 grid gap-2 grid-cols-6">
            <div className="sm:col-span-2 col-span-6">
              <img src={todo} className="temp rounded object-fill w-[100%] h-[12rem]" />{" "}
            </div>
            <ul className="sm:col-span-4 col-span-6">
              <li>
                <p className="">
                  <span className="w-1 h-1 bg-blue-400  rounded-full inline-block m-1"></span>
                  Allows users to create tasks easily by entering a Todo and features like Create, Read, Update, Delete todos</p>{" "}
              </li>
              <li className="flex">
                <p>
                <span className="w-1 h-1 bg-green-400  rounded-full inline-block m-1">
                  {" "}
                </span>
                <span className="w-1 h-1 text-violet-500  inline m-1">
                 
                Tech Stack - 
                </span>
                <ul className="flex flex-wrap gap-x-4 font-bold" >
                  {/* {teckStack.map((i)=><li className="uppercase inline m-2">{i}</li>)} */}
                  <li className="d">JavaScript</li>
                  <li className="b">React js</li>
                  <li className="b">localStorage</li>
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

export default ProjectsContainer;

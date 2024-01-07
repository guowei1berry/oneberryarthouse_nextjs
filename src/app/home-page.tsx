'use client'
// import { Link } from '@chakra-ui/next-js'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import DecorCard from "./components/card";
import VideoPlayerComp from "./components/videoplayer";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {

    const [counter, iscounter] = useState(0)

    const count1 = () =>{
        iscounter(counter+1)
        console.log(counter)
    }

  return (
    <div>
      
      <VideoPlayerComp url="https://www.youtube.com/watch?v=N8ztlNMtwUU"/>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <div>
            <h1 className="fw-bolder" style={{ fontSize: "60px" }}>
              Null City.
            </h1>
            13 January, 2022
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="pe-5">
              <h2 className="d-inline">0</h2>
              <sup>°C</sup>
              <p className="text-info">Cloudy</p>
            </div>
            <div>
              {/* <img src="/1.png" alt="" width={100} draggable="false" /> */}
            </div>
          </div>
          <hr />
          <div className="d-md-flex justify-content-between align-items-center mt-4">
          <Link href="/timestamp">
            <button className="btn btn-success border-0 save-btn px-4 py-3">
             Timestamp
            </button>
            </Link>
            <Link href="/history">
              <button className="btn btn-danger border-0 history-btn px-4 py-3 ms-auto">
                My History
              </button>
            </Link>

            <DecorCard/>

            <Link href="/nested/imnested">
              <button className="btn btn-danger border-0 history-btn px-4 py-3 ms-auto">
                Go nested
              </button>
            </Link>
            <Link href={`/dynamic/${counter}`} >
              <button className="btn btn-danger border-0 history-btn px-4 py-3 ms-auto">
                dynamic slug
              </button>
            </Link>
            <Link href="/useuser">
              <button className="btn btn-danger border-0 history-btn px-4 py-3 ms-auto">
              useuser
              </button>
            </Link>
            <h1 className="text-3xl font-bold underline"> testing here</h1>

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={count1}> click here ={counter} </button>
          </div>
        </div>
      </div>
    </div>
  )
}


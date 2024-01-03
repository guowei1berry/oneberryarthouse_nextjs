import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Testrouterobject from "./testrouterobject";

export default function Home() {
    const router = useRouter()
    const [counter, iscounter] = useState(0)

    const count1 = () =>{
        iscounter(counter+1)

    }
  return (
    <div>
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
            <Link href="/nested/imnested">
              <button className="btn btn-danger border-0 history-btn px-4 py-3 ms-auto">
                Go nested
              </button>
            </Link>
            <Link href="/nested/:slug">
              <button className="btn btn-danger border-0 history-btn px-4 py-3 ms-auto">
                dynamic slug
              </button>
            </Link>
            <Link href="/useuser">
              <button className="btn btn-danger border-0 history-btn px-4 py-3 ms-auto">
              useuser
              </button>
            </Link>
            <button type="button" onClick={() => router.push('/about')}>
           router.push //userouter
            </button>

            <Testrouterobject href={counter} children={counter} />
            <button onClick={count1}> click here ={counter} </button>
          </div>
        </div>
      </div>
    </div>
  );
}
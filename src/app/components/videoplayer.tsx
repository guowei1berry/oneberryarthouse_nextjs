'use client'

import React from 'react'
import ReactPlayer from 'react-player/youtube'
import {useState} from 'react'
import {useEffect} from 'react'

export default function VideoPlayerComp({url}){

const [hasWindow, setHasWindow] = useState(false);

useEffect(() => { if (typeof window !== "undefined") { setHasWindow(true); } }, []);

return ( <> {hasWindow && <ReactPlayer url={url} />} </> )

}



// Then it's called out on page.js like this:


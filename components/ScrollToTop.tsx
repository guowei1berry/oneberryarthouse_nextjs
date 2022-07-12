import React, { useEffect, useState,useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed'
function ScrollToTop(props) {



  const handleBackClick= (event) => {

    // const node = document.getElementById(props.node)
    // console.log("node",node)
    // console.log("node",node)
    // console.log("titleRef.current",titleRef.current)
    // titleRef.current.scrollIntoView({ behavior: 'smooth' })

    console.log("props.node",props.node)
    scrollIntoView(props.node.current, {
        scrollMode: 'if-needed',
        behavior:"smooth",
        block: 'start',
        // inline: 'nearest',
      })
  }
  // function handleSubmit(e) {
    // event.preventDefault();    console.log('You clicked submit.');
  // }

  return (
    <div>

          
            <button onClick={handleBackClick}>Back to the top</button>
    </div>
  );
}

export default ScrollToTop;
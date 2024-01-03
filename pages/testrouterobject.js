import { useState, useEffect } from "react";
import { useRouter } from 'next/router'


export default function testrouterobject({ children, href }) {
    const router = useRouter()

    const style = {
        marginRight: 10,
        color: router.asPath === href ? 'red' : 'black',
      }

    const handleClick = (e) => {
        e.preventDefault()
        router.push("/nested/"+href)
      }
    return (
        <>
        
        <div>testrouterobject</div>
        <button href={href} onClick={handleClick} style={style}>
      {children}
    </button>
        </>


    )

}
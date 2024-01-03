import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'



export default function Testrouterobject({ countchild, href }: any) {
    const router = useRouter()
    // const pathname = usePathname()
    // const searchParams = useSearchParams()!

    // const style = {
    //     marginRight: 10,
    //     color: router.asPath === href ? 'red' : 'black',
    //   }

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push("/nested/href")
      }
    return (
        <>
        
        <div>testrouterobject</div>
        <button ref={href} onClick={handleClick} //style={style}
        >
      {countchild}
    </button>
        </>


    )

}

'use client'
// import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function Dynamic() {
    // const router = useRouter()
    // const { pid } = router.query
    // console.log("router.query",router.query)
    const searchParams = useSearchParams()
    const {pid}: any = searchParams.get('')
    
    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
    return (
        <>
        Search: {pid}
        {/* <p>Post: {pid}</p> */}
        <div>dynamic ^^</div>
        </>


    )

}
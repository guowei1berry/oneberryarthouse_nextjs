
// import { useRouter } from 'next/navigation'
// import { useSearchParams } from 'next/navigation'

export default function Dynamic({params}:any) {

    
    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
    return (
        <>
        <p>Post: {params.pid}</p>
        <div>dynamic ^^</div>
        </>


    )

}
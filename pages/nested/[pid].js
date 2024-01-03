
import { useRouter } from 'next/router'

export default function dynamic() {
    const router = useRouter()
    const { pid } = router.query
    console.log("router.query",router.query)
    return (
        <>
        <p>Post: {pid}</p>
        <div>dynamic ^^</div>
        </>


    )

}
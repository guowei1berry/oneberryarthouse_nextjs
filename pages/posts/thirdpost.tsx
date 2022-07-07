import Link from "next/link"
import Newlayout from "../../components/Newlayout"

// import testimg from '../../public/images/test-image.jpg' 
export default function thirdpost() {
  
  
  return(
  <>

  <Newlayout>
  {/* <img src="/images/test-image.jpg" alt="Your Name" height="400" ></img> */}
  <h1>third Post</h1>
  <Link href="/">
  <a>Back to home</a>
  </Link>
  </Newlayout>
  </>
  )
  }
  
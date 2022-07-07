import Link from "next/link"
import ImageOne from "../../components/imageOne"
import Layout from "../../components/Layout"

// import testimg from '../../public/images/test-image.jpg' 
export default function secondpost() {
  
  
  return(
  <>
  <Layout home ={false}>
  <ImageOne/>
  
  {/* <img src="/images/test-image.jpg" alt="Your Name" height="400" ></img> */}
  <h1>second Post</h1>
  {/* <Link href="/">
  <a>Back to home</a>
  </Link> */}
  </Layout>
  </>
  )
  }
  

  
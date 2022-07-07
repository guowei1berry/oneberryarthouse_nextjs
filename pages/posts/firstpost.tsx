import Link from "next/link"
import Layout from '../../components/Layout';

export default function FirstPost() {


    return (
    <Layout>
    <h1>First Post</h1>
    <Link href="/">
    <a>Back to home</a>
  </Link>
    </Layout>
    )
  }
  
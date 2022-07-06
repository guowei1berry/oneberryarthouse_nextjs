import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { User } from '../interfaces'

type Props = {
  data: Number
}

//const Counter = ({ data }: Props) => (
const Counter = (props) => {

  const counted = props.count

  return (

    <div>
      <Link href={`/posts/${counted}`} >
        <a className={styles.card}>
          {/* <h2>counted&rarr;</h2> */}

          data: ${counted}

        </a>
      </Link>

    </div>
  )

}

export default Counter

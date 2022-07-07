import { useState } from 'react'
import styles from '../styles/Button.module.css'

export function Button() {
    const [bool, setBool] = useState(false)

    const render = () =>{
        setBool(!bool)
        console.log(bool)
    }
  
    return (

    //{
        bool ? 
        (<button
        onClick={()=>render()}
        type="button"
        // Note how the "error" class is accessed as a property on the imported
        // `styles` object.
        // className={styles.error}
      >
        Ok
      </button>)
      :
        
    (<button
        onClick={() =>render()}
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>)
    //}
  )
}

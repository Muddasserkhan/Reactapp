import React, { useEffect } from 'react'

const FunctionComponent = (props) => {
    useEffect(()=>{
        console.warn("Functional Component");
    },[props.count, props.count2])
    return (
        <>
            <h1>Count 1: {props.count}</h1>
            <h1>Count 2: {props.count2}</h1>
        </>
  )
}

export default FunctionComponent

import React from 'react'
import Feedback from './Feedback'
import { useContext } from 'react'
import FeedbackContext from './Context/FeedbackContext'

const FeedbackList = () => {

  const {feedback} = useContext(FeedbackContext)
  // console.log(useContext(FeedbackContext))
  if(feedback.length === 0){
    return <h1 style={{textAlign:"center",margin:"50px"}}>No Feedback yet</h1>
  }
  return (
    <div>
        {feedback.map((item)=>(
                <Feedback key={item.id} item={item}   />
        ))}
    </div>
  )
}

export default FeedbackList

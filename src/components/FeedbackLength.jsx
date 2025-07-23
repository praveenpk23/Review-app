import React from 'react'
import { useContext } from 'react'
import FeedbackContext from './Context/FeedbackContext'
const FeedbackLength = () => {

  const {feedback} = useContext(FeedbackContext)

  return (
    <div style={{margin:"10px"}}>
      <h3 className='feedback-length'>Length : ({feedback.length})</h3>
    </div>
  )
}

export default FeedbackLength

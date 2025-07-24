import React from 'react'
import { useContext } from 'react'
import FeedbackContext from './Context/FeedbackContext'
import FeedbackTheme from './Context/FeedbackTheme'
const FeedbackLength = () => {

  const {feedback} = useContext(FeedbackContext)
  const {theme} = useContext(FeedbackTheme)

  return (
    <div style={{margin:"10px"}}>
      <h3 className='feedback-length ' style={{color:`${theme === 'dark' ? 'white':"black"}`}}  >Length : ({feedback.length})</h3>
    </div>
  )
}

export default FeedbackLength

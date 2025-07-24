import React from 'react'
import Feedback from './Feedback'
import { useContext } from 'react'
import FeedbackContext from './Context/FeedbackContext'
import FeedbackLength from './FeedbackLength'
const FeedbackList = () => {

  const {feedback,loading} = useContext(FeedbackContext)
  // console.log(useContext(FeedbackContext))
  // if(feedback.length === 0){
  //   return <h1 style={{textAlign:"center",margin:"50px"}}>No Feedback yet</h1>
  // }
  return (
    <>
    
      {loading ? (
        <div style={{display:"flex",justifyContent:"center"}}>
      <p className='Loading '> Loading.... </p> 
    </div>
      ) : (
        <div>
        <FeedbackLength  />
        {feedback.map((item)=>(
                <Feedback key={item.id} item={item}   />
        ))}
         </div>
      )}
    </>
  )
}

export default FeedbackList

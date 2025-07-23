import { useState,createContext } from "react";

const FeedbackContext = createContext();
// console.log(FeedbackContext)


export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback] = useState([
        
        {
        id:1,
        text:"This is context 1"
        },
        {
        id:2,
        text:"This is context 2"
        },
        {
        id:3,
        text:"This is context 3" 
        },
        {
        id:4,
        text:"This is context 4" 
        },
        
        
    ])
    const handleAddText=(text)=>{
  console.log(text)
  const newId = feedback.length+1
  console.log(newId)
  text.id=newId
  console.log(text)
  const updatedFeedback = [text,...feedback]
  console.log(updatedFeedback)
  setFeedback(updatedFeedback)
}

const handleDelete =(id)=>{

  if(window.confirm("Are you sure to delete !")){
      setFeedback(feedback.filter((item)=>(item.id !== id)))
  }
}


    return(
        <FeedbackContext.Provider value={{feedback,handleDelete,handleAddText}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;
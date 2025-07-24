import Card from "./Shared/Card"
import Button from './Shared/Button'
import { useState,useContext, useEffect } from "react"
import FeedbackContext from "./Context/FeedbackContext"
import FeedbackTheme from "./Context/FeedbackTheme"
const FeedbackForm = () => {

    const [isDisabled,setIsDisabled] = useState(true)
    const [text,setText] = useState("")
    const [message,setMessage] = useState("")
    const {handleAddText,feedbackEdit,handleUpdateText,setFeedbackEdit} = useContext(FeedbackContext)
    const {theme} = useContext(FeedbackTheme)
    const handleText =(e)=>{
    const inputValue = e.target.value;
    setText(inputValue); // update state
        if(inputValue === ""){
            setIsDisabled(true)
            setMessage(null)
        }else if(inputValue !== "" && inputValue.trim().length < 10){
            setIsDisabled(true)
            setMessage("Text should be minimum 10 letters")
        }else {
            setIsDisabled(false)
            setMessage(null)
        }
    }

    const handleTextAdd =(e)=>{
        e.preventDefault();
       if(text.trim() !==""){
         const newFeedback = {
            text:text
        }

        if(feedbackEdit.edit === true){
            handleUpdateText(feedbackEdit.item.id,newFeedback)
        }else{
            handleAddText(newFeedback)
        }

       setText("")
       setIsDisabled(true)
       }
    }
        useEffect(()=>{
        console.log("im here from useEffect")
            if(feedbackEdit.edit === true){
                setText(feedbackEdit.item.text)
                setIsDisabled(false)
                console.log(feedbackEdit)
            }
       },[feedbackEdit])

  const hanldeCancelEdit = () =>{
   
        setFeedbackEdit({item:{},edit:false})
        setText("")
        setIsDisabled(true)
  }
  return (
      <Card reverse={theme ==='light' ? true : false} >
      <form onSubmit={handleTextAdd} >
        <h1>Add feedback</h1>
        <div className="input-group">
            <input placeholder="Please enter the feedback" type="text" value={text} onChange={handleText}  />
        </div>
         {message && (<p style={{marginTop:"20px"}} className="error"> {message} </p>)}
         <div className="btn-group">
             <Button  type="submit" version =  {feedbackEdit.edit === true ? "secondary" : "primary"} isDisabled={isDisabled}>
               {feedbackEdit.edit === true ? "Edit" : " Send"}
            </Button>
             {feedbackEdit.edit === true && 
             <button className="btn btn-danger" onClick={hanldeCancelEdit}>
                Cancel
             </button>
             }
         </div>
        {/* {text} */}
       
      </form>
    </Card>
  )
}

export default FeedbackForm

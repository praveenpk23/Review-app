import Card from "./Shared/Card"
import Button from './Shared/Button'
import { useState,useContext } from "react"
import FeedbackContext from "./Context/FeedbackContext"
import FeedbackTheme from "./Context/FeedbackTheme"
const FeedbackForm = () => {

    const [isDisabled,setIsDisabled] = useState(true)
    const [text,setText] = useState("")
    const [message,setMessage] = useState("")
    const {handleAddText} = useContext(FeedbackContext)
    const {theme} = useContext(FeedbackTheme)
    const handleText =(e)=>{
    const inputValue = e.target.value;
    setText(inputValue); // update state
        if(inputValue == ""){
            setIsDisabled(true)
            setMessage(null)
        }else if(inputValue !== "" && inputValue.trim().length < 10){
            setIsDisabled(true)
            setMessage("Text should be minimum 10 letters")
        }else {
            setIsDisabled(false)
            setMessage(null)
        }
                // setText(e.target.value)
    }

    const handleTextAdd =(e)=>{
        e.preventDefault();
       if(text.trim() !==""){
         const newFeedback = {
            text:text
        }
       handleAddText(newFeedback)
       setText("")
       setIsDisabled(true)
       }

    }
  return (
      <Card reverse={theme ==='light' ? true : false} >
      <form onSubmit={handleTextAdd} >
        <h1>Add feedback</h1>
        <div className="input-group">
            <input placeholder="Please enter the feedback" type="text" value={text} onChange={handleText}  />
            <Button  type="submit" version="primary" isDisabled={isDisabled}>
                Send
            </Button>
        </div>
        {/* {text} */}
        {message && (<p className="error"> {message} </p>)}
      </form>
    </Card>
  )
}

export default FeedbackForm

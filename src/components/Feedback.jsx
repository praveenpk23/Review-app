import Card from './Shared/Card'
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from 'react';
import FeedbackContext from './Context/FeedbackContext';
import FeedbackTheme from './Context/FeedbackTheme';
import { FaEdit } from "react-icons/fa";
const Feedback = ({item}) => {
  const {handleDelete,handleSetFeedbackEdit} = useContext(FeedbackContext)
  const {theme} = useContext(FeedbackTheme)



  return (
    <Card reverse={theme ==='light' ? true : false} >

            <div className="display-text">
              <h2>  {item.text} </h2>
            </div>
            <button className='delete'onClick={()=>{handleDelete(item.id)}}>
              <FaTrashAlt color='red'  size={"18px"}  />
            </button>
            
             <button className='edit' onClick={()=>{handleSetFeedbackEdit(item)}}>
              <FaEdit color='green' size={"22px"} />
            </button>
                    
    </Card>
  )
}

export default Feedback

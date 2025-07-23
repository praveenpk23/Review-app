import Card from './Shared/Card'
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from 'react';
import FeedbackContext from './Context/FeedbackContext';
import FeedbackTheme from './Context/FeedbackTheme';
const Feedback = ({item}) => {
  const {handleDelete} = useContext(FeedbackContext)
  const {theme} = useContext(FeedbackTheme)



  return (
    <Card reverse={theme ==='light' ? true : false} >

            <div className="display-text">
              <h2>  {item.text} </h2>
            </div>
            <button className='delete' onClick={()=>{handleDelete(item.id)}}>
              <FaTrashAlt color='red' />
            </button>
                    
    </Card>
  )
}

export default Feedback

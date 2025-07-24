import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackLength from './components/FeedbackLength'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackProvider } from './components/Context/FeedbackContext'
import {FeedbackThemeProvider} from "./components/Context/FeedbackTheme"
const App = () => {
  return (
    <FeedbackThemeProvider>
        <FeedbackProvider>
         <Header  text="Pk" bgColor="blue" textColor="white" />
            <div className="container-global">
              <FeedbackForm  />
              <FeedbackList  />
            </div>
        </FeedbackProvider>
    </FeedbackThemeProvider>
   
  )
}

export default App

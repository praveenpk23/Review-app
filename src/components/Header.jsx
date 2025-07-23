import FeedbackTheme from "./Context/FeedbackTheme"
import {  useContext } from "react"
const Header = ({text = "Review App",bgColor,textColor}) => {

  const {handleTheme,theme} =  useContext(FeedbackTheme)
  // console.log(useContext(FeedbackTheme))
  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor,
  }

  const handleThemeSetting =()=>{
      if(theme === "light"){
        handleTheme('dark')
      }
      else if (theme === "dark"){
        handleTheme('light')
      }
  }

    // console.log(text)
  return (
   <header style={headerStyle}  className="Header">
     <div  className="container header-c" >
      <h1>{text}</h1>
       <div style={{display:"flex",gap:"10px"}}>
        <button className={`btn btn-${theme === "light" ? "dark":"light"}`}  onClick={()=>{handleThemeSetting()}}  >
       {theme==="light" ? "Dark Mode":"Light Mode"}
      </button>
      {/* <button className="btn btn-secondary"  onClick={()=>{handleThemeSetting("dark")}} >
        dark
      </button> */}
       </div>
    </div>
     
   </header>
  )
}

export default Header



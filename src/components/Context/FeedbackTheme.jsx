import { useState,createContext, useEffect } from "react";

const FeedbackTheme = createContext();

export const FeedbackThemeProvider =({children})=>{
const themeStore = localStorage.getItem("theme") !== null ? localStorage.getItem("theme"):"light"
    console.log(localStorage.getItem('theme'))
    const [theme,setTheme] = useState(themeStore);

    const handleTheme=(value)=>{
       
        if(value){
            if(value === "dark"){
                setTheme("dark")
                setThemeLocal('dark')
                // console.log(theme)
                //    handleSetTheme()
            }
            else if(value === 'light'){
                setTheme("light")
                setThemeLocal('light')
                // console.log(theme)
                // handleSetTheme()
            }
        }
    }

useEffect(()=>{

    // setTheme(themeStore)
     if(theme == 'dark'){
        document.body.style.backgroundColor = "#100f0f";
        }else if(theme == "light"){
        document.body.style.backgroundColor = "white";            
        }

},[theme])

const setThemeLocal=(value)=>{

    if(value === 'dark' || value === "light"){
        localStorage.setItem('theme',value)
    }
}

//     const handleSetTheme=()=>{
       
//     }
// handleSetTheme()
    return (
        <FeedbackTheme.Provider value={{handleTheme,theme}} >
            {/* <div className={`${theme ? "dark" : "light"}  `}> */}
            {children}
            {/* </div> */}
        </FeedbackTheme.Provider>
    )
}

export default FeedbackTheme;
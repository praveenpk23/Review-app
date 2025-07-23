
const Card = ({children,reverse=false}) => {
  return (
    <div className={`card ${reverse && "reverse"}`}>
      {children}
    </div>
  )
}

export default Card

import QueryInput from "./QueryInput"
import SendButton from "./SendButton"

const Footer = () => {
  return (
    <div className="footer">
        <h3>Get answers to your cannabis questions!</h3>
        <div className="user-input-container">
          <QueryInput />
          <SendButton />
        </div>
        
    </div>
  )
}

export default Footer
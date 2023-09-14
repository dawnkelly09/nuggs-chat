'use client'
const SendButton = () => {
  const handleChat = () => {
    console.log('Send button clicked')
  }
  return (
    <div>
      <button class="btn-darkmode" onClick={handleChat}>Send</button>
    </div>
  )
}

export default SendButton
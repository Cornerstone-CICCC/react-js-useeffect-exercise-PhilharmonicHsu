import { useState, useEffect } from 'react'
import './App.css'

type Color = 'red' | 'blue'

function App() {
  const [message, setMessage] = useState<String>('');
  const [like, setLike] = useState<number>(0);
  const [color, setColor] = useState<Color>('red')

  useEffect(()=> {
    console.log(message)
  }, [message])


  const handleClickSendMessage = () => {
    setMessage('Hello from React!')
  }

  useEffect(() => {
    console.log(like)
  }, [like])

  const handleClickeLike = () => {
    setLike(prev => prev + 1)
  }

  useEffect(() => {
    console.log(color)
  }, [color])

  const handleClickChangeColor = () => {
    setColor(prevColor => (prevColor === 'red') ? 'blue' : 'red')
  }

  return (
    <div>
      <h2>Message Logger</h2>
      <button onClick={handleClickSendMessage}>Send Message</button>
  
      <h2>Like Counter</h2>
      <button onClick={handleClickeLike}>Like</button>
  
      <h2>Color Box</h2>
      <button onClick={handleClickChangeColor}>Change Color</button>
      <div style={{ width: 100, height: 100 }}>Color Box</div>
    </div>
  );
}

export default App

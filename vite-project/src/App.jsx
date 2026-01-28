import Youtube from "./Youtube"

function App() {
  const username = "Aditya"

  return (
    <>
      <h1>Vite React App {2 + 2}</h1>
      <h1>Vite React App {username === 'Aditya' ? 'yes' : 'no'}</h1>
      <Youtube />
    </>
  )
}

export default App

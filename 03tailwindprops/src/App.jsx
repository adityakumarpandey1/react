import Card from './components/Card'
import image from './assets/system-architecture.png'

function App() {
  return (
    <div className="min-h-screen flex gap-6 items-center justify-center">
      <Card
        image={image}
        title="System Architecture"
        description="This diagram explains the overall system architecture."
      />

      <Card
        image={image}
        title="Backend Design"
        description="This card shows how backend services communicate."
      />
    </div>
  )
}

export default App

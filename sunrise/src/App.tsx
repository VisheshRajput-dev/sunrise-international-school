import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Vite + React + shadcn/ui</h1>
          <div className="space-y-4">
            <Button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
            <p className="text-muted-foreground">
              Edit <code className="bg-muted px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

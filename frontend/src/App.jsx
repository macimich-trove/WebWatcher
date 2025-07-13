import { useState, useContext } from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//Import third party state management
//Import custom hooks for fetching site dom structure and screenshot data
//

function App() {
  //0 Light, 1 Dark  
  const [theme, setTheme] = useState(0)
  const [count, setCount] = useState(0)



return (
   
<>

<Card>
  <CardHeader>
    <CardTitle>Vite + React</CardTitle>
    <CardDescription>Card Description</CardDescription>
     </CardHeader>
  <CardContent>
        <div  className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>

</CardContent>



  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

     
   </>
 
  
)


}

export default App

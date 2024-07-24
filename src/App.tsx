import { useState } from "react";
import POS  from "@/components/POS";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  
        <POS />
        {/* <BarComp /> */}
   
    </>
  );
}

export default App;

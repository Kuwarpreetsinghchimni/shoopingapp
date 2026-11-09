import { useEffect } from 'react';
import { useState }from 'react';
import './App.css';



function App(){

  const [data, setData] = useState([])

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setData(json))
})

  return ( 
<div>
    {
      data.map((item)=>{
        return(
          <h1>{item.title}</h1>
        )
      })
    }

</div>
  );
}

export default App;

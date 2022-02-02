import React,{useState,useEffect} from "react";
import Loader from "./components/Loader";
import Quote from "./components/Quote";




const  initialQuote ={
  text:'',
  author:''
}





function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setloading] = useState(false);

  //fetch que trae elementos random 
  const updateQuote  = async () =>{
  setloading(true);

    const url   = 'https://www.breakingbadapi.com/api/quote/random';
    const res   = await fetch(url);
    const [data]  = await res.json();
    console.log(data);

    const {author, quote:text}=data 
    setQuote(
      {
        text,
        author
      }
    )
    setloading(false);
  }

  
 
   useEffect( () => {
    updateQuote();
  
   
  }, []);
  





  return (
    <div className="app" >

     <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo" />

     <button onClick={()=> updateQuote()}>Obtener nueva frase</button>
      {loading ? <Loader/>: <Quote quote={quote}/>}

    
    
    </div>
  );
}

export default App;

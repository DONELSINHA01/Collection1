import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';


const API= "https://fakestoreapi.com/products"
function App() {

  let[user,setUser]= useState([]);
  
  let[manipulateUser,setManipulateUser]=useState([]);

  

const fetchUsers = async(url)=>{
  try{
    const res = await fetch(url);
    const data = await res.json();

    setUser(data);
    
  }
  catch(e){
    console.log(e);
  }
}

//calling the api using useEffect hook
  useEffect(()=>{
    
    fetchUsers(API);
  },[])

  let userNum=(event)=>{
     
    user.map((i,index)=>{
      return i[index];
    });
  }
  
  


  return (
    <div className="App">
      
      <div className='area'>
        
          <Card className="userCard" users={user} />
        
      </div>
    </div>
  );
}

export default App;

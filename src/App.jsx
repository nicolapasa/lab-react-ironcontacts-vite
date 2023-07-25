import { useState } from "react";
import "./App.css";
import data from './contacts.json'
function App() {

   const [contacts, setContact]=useState(data.slice(0,5))
   
   const handleClick=()=>{

     const randomActorKey=Math.floor(Math.random()*data.slice(6).length)
     const remainsActor=data.slice(6)

     const randomActor=remainsActor[randomActorKey]
     setContact([randomActor, ...contacts])
     
   }

   const sortByName=()=>{
    
        setContact([...contacts.sort((a, b)=>(a.name < b.name) ? 1: (a.name > b.name) ? -1 : 0).reverse()])
   }
   const sortByPopularity=()=>{
    setContact([...contacts.sort((a, b)=>(a.popularity < b.popularity) ? 1: (a.popularity > b.popularity) ? -1 : 0)])
   }

  const deleteContact=id=>{
       setContact([...contacts.filter(contact=>contact.id != id)])

  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleClick} >add contact</button>
          <button onClick={sortByName} >sort by name</button>
          <button onClick={sortByPopularity} >sort by popularity</button>
      <table className="table">
        <thead className="table-header">
          <th className="header__item">Picture</th>
          <th className="header__item">Name</th>
          <th className="header__item">Popularity</th>
          <th className="header__item">Won an Oscar</th>
          <th className="header__item">Won an Emmy</th>
          <th className="header__item">actions</th>
        </thead>
        <tbody >
     
          {contacts.map(actor=>
          <>
             <tr className="table-row">
             <td className="table-data"><img src={actor.pictureUrl} alt="" height={'50px'} /></td>
             <td className="table-data">{actor.name}</td>
             <td className="table-data">{actor.popularity}</td>
             { actor.wonOscar ?     <td className="table-data">🏆</td> :    <td className="table-data"></td> }
             { actor.wonEmmy ?      <td className="table-data">🏆</td> :    <td className="table-data"></td>  }
             <td className="table-data"><button onClick={()=>deleteContact(actor.id)} >delete</button></td>  
             </tr>
        </>
         )}
        
        </tbody>
      </table>
  
    </div>
  );
}

export default App;

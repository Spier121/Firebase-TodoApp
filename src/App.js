import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel  } from '@material-ui/core';
import './App.css';
import Todo from './Components/Todo';
import db from './firebase'
import firebase from 'firebase'
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] =useState('');
  useEffect(()=> {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().todo))

    })
  },[])
  const  addTodo = (event) =>{
    event.preventDefault()
   db.collection('todos').add({
     todo:input,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
   })
    setInput('')
}
  return (
    <div className="App">
      <h1>Helllo World</h1>
    <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
        <Input value={input} onChange = {event => setInput(event.target.value)} />
      </FormControl>
        <Button disabled={!input} type="submit" onClick ={addTodo} variant="contained" color="primary">
           Add Todo
       </Button>
    </form>

      <ul>
      {todos.map(todo => (
        <Todo text={todo}/>
      ))}
      </ul>
    </div>
  );
}

export default App;

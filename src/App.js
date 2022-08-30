import logo from './logo.svg';
import './App.css';
import {useState} from 'react';// import useState function from react package
// npm install react -> internet(npmjs.org) download , local project save 
// use import {} from '<packagename>';

function GetListItem(text){
  return (
    <li>{text}</li>
  );
}

// react js New Tag or componet -> function 
function AddTodo({addButtonHandler}){

  var [todoText, setTodoText] = useState('');

  const addButtonHandlerHelper = e =>{
    e.preventDefault();
    
  };

  return (

    <form >
      <label htmlFor="todo_text">Text</label><br/>
      <input type="text"
         id="todo_text" 
         name="todo_text" 
         value={todoText}
         onChange = { e=> setTodoText(e.target.value)}
         /><br/>
  
      <input type="submit" value="Add"
        onClick={addButtonHandler}
        />
    </form> 
  );

}
function App() {

  var name = "Jigs";
  var todoList = ['html class', 'css class', 'javascript class', 'react class'];
  return (
    <div className="App">
      <h1>Todo SF</h1>

      <AddTodo/>
      <ul>
        {
          todoList.map( (text,index) => <li key={index}>{text}</li>)
        }  
      </ul>     
    </div>
  );
}

export default App;

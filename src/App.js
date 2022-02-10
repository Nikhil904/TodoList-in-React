import React, { useState } from 'react';
import TodoList from './TodoList';
const App = () =>{
  const [inputList,SetinputList] = useState();
  const[Items,SetItems] = useState([]);
  const itemEvent = (event) =>{
    SetinputList(event.target.value);
  }
  const listofItems = () =>{
    SetItems( (oldItems) => {
      return [...oldItems,inputList];
    });
    SetinputList('');
  }
  const deleteList = (id) => {
    console.log('Item Deleted');
    SetItems((oldItems) => {
      return oldItems.filter( (arrEle,index) => {
          return index!== id;
      })
    })
  }
  return(
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
        <button onClick={listofItems}>Add</button>

        <ol>
         {
           Items.map( (itemval,index) => {
             return <TodoList id = {index} key = {index} text = {itemval} onSelect = {deleteList}/>
           })
         }
          {/* <li>{inputList}</li> */}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;

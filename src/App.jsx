import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/Items';
import ToDoTitle from './components/ToDoTitle';
import ToDoAdd from './components/ToDoAdd';
import { useState } from 'react';
import Welcome_msg from './components/Welcome_msg';

function App() {

  const [data, setData] = useState([]);
  
  const addNewData = (newItem, newDate) => {
    // console.log(`new item is : ${newItem}, Date : ${newDate}`);
    let addNewData = [...data, {
      name: newItem,
      dueDate: newDate
    }
    ];
    setData(addNewData);
  }

  const deleteItem = (selectedItem) => {
    const result = data.filter(item => item.name !== selectedItem)
    // console.log(`delete item`);
    setData(result);
  }

  return (
    <center className='todo-main-container'>
      <ToDoTitle />
      <div className="container text-center">
        <div className="todo_container">
          <ToDoAdd newData={addNewData} />
        </div>
        {data.length === 0 ? <Welcome_msg /> :
          <div className="todo_container">
            <Items data={data} onDeleteItem={deleteItem} />
          </div>
        }
      </div>
    </center>
  )
}

export default App

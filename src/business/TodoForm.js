import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');

function handleChange(e) {
    setInput(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input
  });
  
  setInput("");
};
    return (
        <div>
           <form className="Todo-form" onSubmit={handleSubmit}>
               <input type="text" placeholder="Add a task" value={input}
               name="text" className="todo-input" onChange={handleChange} />
               <button className="Todo-Button">
                    Add Task
                </button>
            </form> 
        </div>
    )
};

export default TodoForm

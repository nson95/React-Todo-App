import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');

const focus = useRef(null);

useEffect(() => {
focus.current.focus()
})

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
    <form className="Todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a task" 
                value={input} name="text" 
                className="todo-input" 
                onChange={handleChange} 
                ref={focus}/>
            <button className="Todo-Button">
            Add Task
        </button>
    </form> 
    )
};

export default TodoForm

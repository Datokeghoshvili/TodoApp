import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent  action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value)
          // clear fom after submision
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Text Here' />
    <button type="submit" className='todo-btn'>Click For Add</button>
  </form>
  )
}

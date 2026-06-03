import React, { useEffect, useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem('todos') || '[]') } catch { return [] }
  })
  const [text, setText] = useState('')

  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])

  function add(e) {
    e.preventDefault()
    const v = text.trim()
    if (!v) return
    setTodos([{ id: Date.now(), text: v, done: false }, ...todos])
    setText('')
  }

  function toggle(id) { setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t)) }
  function remove(id) { setTodos(todos.filter(t => t.id !== id)) }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={add} className="form">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Nova tarefa..." />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="list">
        {todos.map(t => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span>{t.text}</span>
            </label>
            <button className="delete" onClick={() => remove(t.id)}>×</button>
          </li>
        ))}
      </ul>

      <footer>
        <small>{todos.length} tarefa(s)</small>
      </footer>
    </div>
  )
}

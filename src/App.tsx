import React from 'react';
import { Stack, Button } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import Todos from './pages/Todos';
import Photos from './pages/Photos';
import TodoItemId from './components/TodoComponents/TodoItemId';

const App = () => {

  return (
    <>
      <Stack spacing={2} direction="row">
        <Link style={{ textDecoration: 'none' }} to="/photos"><Button variant="contained">Photos</Button></Link>
        <Link style={{ textDecoration: 'none' }} to="/todos"><Button variant="contained">Todos</Button></Link>
      </Stack>

      <Routes>
        <Route path="/photos" element={<Photos/>} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/todos/todo/:id" element={<TodoItemId/>} />
      </Routes>
    </>
  )
}

export default App;

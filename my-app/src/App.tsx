import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { FormEntries } from './FormEntries';
import { NotFound } from './NotFound';
import { Form } from './Form';
// import { EditForm } from './EditForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<FormEntries />} />
          <Route path="form" element={<Form />} />
          <Route path="form/:id" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

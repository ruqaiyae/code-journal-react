import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { FormEntries } from './FormEntries';
import { NotFound } from './NotFound';
import { Form } from './Form';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Form />} />
          <Route path="entries" element={<FormEntries />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

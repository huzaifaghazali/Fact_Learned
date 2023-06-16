import { useState } from 'react';
import {
  Header,
  CategoryFilter,
  NewFactForm,
  FactList,
} from './Components/index';

import './style.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(!showForm);

  return (
    <>
      <Header showForm={showForm} handleShowForm={handleShowForm} />
      {showForm && <NewFactForm />}
      <main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;

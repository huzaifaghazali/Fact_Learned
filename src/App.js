import {
  Header,
  CategoryFilter,
  NewFactForm,
  FactList,
} from './Components/index';

import './style.css';

function App() {
  return (
    <>
      <Header />
      <NewFactForm />
      <main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;

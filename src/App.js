import {
  Header,
  CategoryFilter,
  NewFactForm,
  FactList,
} from './Components/index';

import './style.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <NewFactForm />
      <main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
    </div>
  );
}

export default App;

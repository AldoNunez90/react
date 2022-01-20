import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer />
      <ItemCount stock= {5} initial= {1} />
    </div>
  );
}

export default App;

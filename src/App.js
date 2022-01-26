import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetails from './components/ItemDetails/ItemDetails'


function App() {
  return (
    <div className='app'>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetails />
    </div>
  );
}

export default App;

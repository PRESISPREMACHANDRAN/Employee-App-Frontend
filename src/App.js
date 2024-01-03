
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddData from './Components/AddData';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import Delete from './Components/Delete';
import ViewAll from './Components/ViewAll';

function App() {
  return (
<BrowserRouter>
<Routes>

  <Route path='/' exact element={<AddData/>}/>
  <Route path='*' exact element={<NotFound/>}/>
  <Route path='/search' exact element={<Search/>}/>
  <Route path='/delete' exact element={<Delete/>}/>
  <Route path='/viewAll' exact element={<ViewAll/>}/>

</Routes>
</BrowserRouter>
  );
}

export default App;

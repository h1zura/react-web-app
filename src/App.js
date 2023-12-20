import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/main_page/MainPage';

import ElementsPage from './pages/elements_page/ElementsPage'
import ElementPage from './pages/elements_page/ElementPage'
import ButtonsPage from './pages/elements_page/ButtonsPage';
import LoadersPage from './pages/elements_page/LoadersPage';
import CheckboxPage from './pages/elements_page/CheckboxPage';
import InputsPage from './pages/elements_page/InputsPage';
import RadioPage from './pages/elements_page/RadioPage';
import FormsPage from './pages/elements_page/FormsPage';
import TogglePage from './pages/elements_page/TogglePage';
import CardsPage from './pages/elements_page/CardsPage';
import PatternsPage from './pages/elements_page/Patterns';

function App() {
  return (
    <div className="App">
         <Router>
          <Routes>
            <Route path='/' exact element={<><Header/><MainPage/><Footer/></>}/>
            <Route path='/ElementsPage/:id' exact element={<><ElementPage/><Footer/></>}/>
            <Route path='/ElementsPage' exact element={<><ElementsPage/><Footer/></>}/>
            <Route path='/MainPage' exact element={<><Header/><MainPage/><Footer/></>}/>
            <Route path="/ButtonsPage" exact element={<><ButtonsPage/><Footer/></>}/>
            <Route path="/LoadersPage" exact element={<><LoadersPage/><Footer/></>}/>
            <Route path="/InputsPage" exact element={<><InputsPage/><Footer/></>}/>
            <Route path="/CheckboxPage" exact element={<><CheckboxPage/><Footer/></>}/>
            <Route path="/RadioPage" exact element={<><RadioPage/><Footer/></>}/>
            <Route path="/FormsPage" exact element={<><FormsPage/><Footer/></>}/>
            <Route path="/TogglePage" exact element={<><TogglePage/><Footer/></>}/>
            <Route path="/CardsPage" exact element={<><CardsPage/><Footer/></>}/>
            <Route path="/PatternsPage" exact element={<><PatternsPage/><Footer/></>}/>
          </Routes>
         </Router>
    </div>
  );
}

export default App;

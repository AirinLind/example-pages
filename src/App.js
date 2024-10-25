import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import {Routes, Route, useLocation} from 'react-router-dom'
import ProductListPage from "./pages/ProductListPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";

function App() {

  // useLocation - возвращает объект с инофрмацией текущей локации
  // Может использоваться для useEffect в качестве зависимости или условий для условного оператора
  const location = useLocation()
  console.log(location)

  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="/products" element={<ProductListPage/>}/>
          <Route path="/products/:id" element={<ProductPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
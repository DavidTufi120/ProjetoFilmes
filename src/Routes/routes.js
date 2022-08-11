import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filme from '../Pages/Filme';
import Home from '../Pages/Home';
import Header from '../components/Header';
import Error from '../Pages/Error';
import Favorites from '../Pages/Favorites';

function RoutesApp() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/favoritos" element={<Favorites/>}/>
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="*" element={<Error/>} />
            </Routes>

        </BrowserRouter>
    )

}

export default RoutesApp
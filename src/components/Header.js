import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detaildune from './Detaildune';
import Detailjoker from './Detailjoker';
import Detailinfinite from './Detailinfinite';
import Detaileverything from './Detaileverything';
import Detaillightyear from './Detaillightyear';
import Detailmorbius from './Detailmorbius';
import Detailantman from './Detailantman';
import Detailavenger from './Detailavenger';
import Detailbatman from './Detailbatman';
import Detailsuperman from './Detailsuperman';
import Detailspiderman from './Detailspiderman';
import Detailrobinhood from './Detailrobinhood';
import './style.css';
import Navigasi from './Navigasi';
import './style.css';
const Header = () => {
    return (
        <div className="header">
            <Navigasi />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="Dune" element={<Detaildune />} />
                    <Route index element={<Home />} />
                    <Route path="Joker" element={<Detailjoker />} />
                    <Route index element={<Home />} />
                    <Route path="Infinite" element={<Detailinfinite />} />
                    <Route index element={<Home />} />
                    <Route path="Everything" element={<Detaileverything />} />
                    <Route index element={<Home />} />
                    <Route path="Lightyear" element={<Detaillightyear />} />
                    <Route index element={<Home />} />
                    <Route path="Morbius" element={<Detailmorbius />} />
                    <Route index element={<Home />} />
                    <Route path="Batman" element={<Detailbatman />} />
                    <Route index element={<Home />} />
                    <Route path="Superman" element={<Detailsuperman />} />
                    <Route index element={<Home />} />
                    <Route path="Spiderman" element={<Detailspiderman />} />
                    <Route index element={<Home />} />
                    <Route path="Robinhood" element={<Detailrobinhood />} />
                    <Route index element={<Home />} />
                    <Route path="Antman" element={<Detailantman />} />
                    <Route index element={<Home />} />
                    <Route path="Avenger" element={<Detailavenger />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Header;
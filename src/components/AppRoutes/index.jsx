import { HashRouter, Route, Routes } from 'react-router-dom';

import DefaultLayout from '../../layouts/DefaultLayout';
import Home from '../../pages/Home';
import ModalDemo from '../../pages/ModalDemo';
import ScrollDemo from '../../pages/ScrollDemo';
import Profile from '../../pages/Profile';

function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile />}
                    />
                    <Route
                        path="/modal-demo"
                        element={<ModalDemo />}
                    />
                    <Route
                        path="/scroll-demo"
                        element={<ScrollDemo />}
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;

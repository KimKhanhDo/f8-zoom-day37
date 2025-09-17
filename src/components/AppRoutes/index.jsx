import { HashRouter, Route, Routes } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';
import ModalDemo from '@/pages/ModalDemo';
import ScrollDemo from '@/pages/ScrollDemo';
import Profile from '@/pages/Profile';
import PerformanceDemo from '@/pages/PerformanceDemo';
import FocusDemo from '@/pages/FocusDemo';
import HOCDemo from '@/pages/HOCDemo';
import PageLayout from '@/layouts/PageLayout ';
import RenderPropsDemo from '@/pages/RenderPropsDemo';
import CustomHooksDemo from '@/pages/CustomHooksDemo';
import ScrollToTop from '@/components/ScrollToTop';

function AppRouter() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route
                        index
                        element={<Home />}
                    />
                </Route>

                {/* Page Layout */}
                <Route element={<PageLayout />}>
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
                    <Route
                        path="/performance-demo"
                        element={<PerformanceDemo />}
                    />
                    <Route
                        path="/focus-demo"
                        element={<FocusDemo />}
                    />
                    <Route
                        path="/hoc-demo"
                        element={<HOCDemo />}
                    />
                    <Route
                        path="/render-props-demo"
                        element={<RenderPropsDemo />}
                    />
                    <Route
                        path="/custom-hooks-demo"
                        element={<CustomHooksDemo />}
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;

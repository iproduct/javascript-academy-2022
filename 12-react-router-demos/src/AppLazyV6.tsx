import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const About = React.lazy(() => import('./pages/About'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

export default function App() {
    return (
        <div>
            <h1>Lazy Loading Example</h1>
           <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="about"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <About />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="dashboard/*"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <Dashboard />
                            </React.Suspense>
                        }
                    />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/messages">Messages (Dashboard)</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary, LoadingDisc } from "./Components";

import "./App.css";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

function App() {

    return (
        <Router>
            <ErrorBoundary>
                <Routes>
                    {/* Root */}
                    <Route path="/" element={<Suspense fallback={<LoadingDisc />}><Home /></Suspense>} />
                    {/* Store */}
                    <Route path="/store" element={<Suspense fallback={<LoadingDisc />}><Store.Page /></Suspense>} />
                    <Route path="/store/limited" element={<Suspense fallback={<LoadingDisc />}><Store.Page category={<Store.Limited />} /></Suspense>} />
                    <Route path="/store/shirts" element={<Suspense fallback={<LoadingDisc />}><Store.Page category={<Store.Shirts />} /></Suspense>} />
                    <Route path="/store/accessories" element={<Suspense fallback={<LoadingDisc />}><Store.Page category={<Store.Accessories />} /></Suspense>} />
                    <Route path="/store/digital" element={<Suspense fallback={<LoadingDisc />}><Store.Page category={<Store.Digital />} /></Suspense>} />
                </Routes>
            </ErrorBoundary>
        </Router>
    );
}

export default App

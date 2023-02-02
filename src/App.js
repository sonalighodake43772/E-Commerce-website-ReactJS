import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CartItem from "./pages/CartItem"


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="cart" element={<CartItem />} />

                       
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

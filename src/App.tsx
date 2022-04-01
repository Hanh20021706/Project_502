import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/admin/Dashboard';
import ProductsForm from './page/admin/ProductsForm';
import ProductsList from './page/admin/ProductsList';
import HomePage from './page/HomePage';
import AdminLayout from './page/layouts/AdminLayout';
import WebstieLayout from './page/layouts/WebstieLayout';
import ProductDetail from './page/ProductDetail';
import ProductsPage from './page/ProductsPage';

function App() {
    return (
        <div className="App">
            <Routes>
                {/* client */}
                <Route path="/" element={<WebstieLayout/>}>
                        <Route index element={<HomePage/>}/>

                        {/* products */}

                        <Route path="products" >
                                <Route index element={<ProductsPage/>}/>
                                <Route path=":id" element={<ProductDetail/>}/>
                        </Route>
                </Route>

                {/* admin */}

                <Route path="admin" element={<AdminLayout />}>
                        <Route index element={<Dashboard/>}/>

                        {/* products */}

                        <Route path="products" >
                                <Route index element={<ProductsList/>}/>
                                <Route path="add" element={<ProductsForm/>}/>
                        </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

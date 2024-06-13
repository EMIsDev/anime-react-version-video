import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Footer from "./components/Footer";
import {AppRouter} from "./routes/AppRouter";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
        <AppRouter/>
        <Footer/>
    </>
);




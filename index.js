import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from "./App";
import './style.css';
const root=createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  </>
)

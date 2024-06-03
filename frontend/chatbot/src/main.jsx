import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChatPage} from "./routes/ChatPage";

//routes
const router = createBrowserRouter([
  {
    path: "/chat",
    element: <ChatPage />
  }
])

//render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

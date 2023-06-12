import React from 'react'
import ReactDOM from 'react-dom/client'

// import Home from './components/screens/home/Home.jsx'
import './assets/styles/_index.scss'
import Router from './routes/Routes.jsx'

// import Layout from './components/layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)

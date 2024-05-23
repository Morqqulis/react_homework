import Footer from '@layout/Footer.jsx'
import Header from '@layout/Header.jsx'
import '@styles/index.scss'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className={`wrapper `}>
        <Header />
        <App />
        <Footer />
    </div>
)

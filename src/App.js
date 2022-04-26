import './App.css';
import Header from './My components/Header';
import {Todos} from './My components/Todos';
import {Footer} from './My components/Footer';

function App() {
    return (
        <>
            <Header title="My Todos List" searchBar={true}/>
            <Todos/>
            <Footer/>
        </>
    );
}

export default App;

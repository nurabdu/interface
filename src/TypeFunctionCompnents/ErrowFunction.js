import { React } from 'react';
import AnonimFunction from './AnonimFunction';

const App = () => {
    return (
        <div>
            <Header/>
        </div>
    );
}

// let name = "Beknur"

const Header = () =>{
    return(
        <div>
            <AnonimFunction/>
            <a href="asda">Home</a>
            <a href="asda">Messages</a>
            <a href="asda">Friends</a>
            <a href="asda">Guests</a>
        </div>
    );
}

export default App;
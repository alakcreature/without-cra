import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <p>Hello from Wanderland</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

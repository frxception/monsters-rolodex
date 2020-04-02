import React from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello frxnoob',
            monsters: [
                {
                    name: 'Frakensntein',
                    id: 'm1'
                },
                {
                    name: 'Dracula',
                    id: 'm2'
                },
                {
                    name: 'Zombie',
                    id: 'm3'
                }
            ]
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp=> resp.json())
            .then( users => this.setState({ monsters: users}))
        
    }

    render() {
        return (
            <div className="App">
                <CardList monsters={this.state.monsters}>
                </CardList>
            </div>
        );
    }
}

export default App;

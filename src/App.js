import React from 'react';
import CardList from './components/card-list/card-list.component'
import { Search } from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [], //note: initialize array value
            searchQuery: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp=> resp.json())
            .then( users => this.setState({ monsters: users}))

    }

    render() {
        const { monsters, searchQuery } = this.state;
        const filtMonsters = monsters.filter( m =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase())    
        )
        return (
            <div className="App">
                <Search placeholder='search your monster' 
                        handleChange={ e => {
                            console.log('@App: synthetic event: ', e)
                            this.setState({searchQuery: e.target.value}, ()=> console.log('@App async query state: ', this.state));
                            //NOTE: Is synchoronus event hence the delay value of the state
                            console.log('@App: sync search query state: ', this.state)
                        }}/>
                
                <CardList monsters={filtMonsters}>
                </CardList>
            </div>
        );
    }
}

export default App;

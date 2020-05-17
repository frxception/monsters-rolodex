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
        
        //NOTE: This ensures that the 'this' keyword will be binded in this function if youre not using arrow function (lexical scope)
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp=> resp.json())
            .then( users => this.setState({ monsters: users}))

    }
    
    handleChange = (e) => { //NOTE: using arrow funciton will automatically bind 'this' (no need to use bind --- automaticall does lexical scoping)
        console.log('@App: synthetic event: ', e)
        this.setState({searchQuery: e.target.value}, ()=> console.log('@App async query state: ', this.state));
        //NOTE: Is synchoronus event hence the delay value of the state
        console.log('@App: sync search query state: ', this.state)
    }

    render() {
        const { monsters, searchQuery } = this.state;
        const filtMonsters = monsters.filter( m =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase())    
        );
        
        return (
            <div className="App">
                <h1>Monster Rolodex (fRX)</h1>
                <Search placeholder='search your monster'  handleChange={this.handleChange}/>
                <CardList monsters={filtMonsters}>
                </CardList>
            </div>
        );
    }
}

export default App;

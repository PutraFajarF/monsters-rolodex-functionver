import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  console.log('render');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonster(newFilteredMonster)
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        className='monster-search-box' 
        placeholder='search monsters' 
        onChangeHandler={onSearchChange} 
      />
      <CardList monsters={filteredMonster} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters : [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return {monsters: users}
//       }))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchField}
//     })
//   }

//   render() {
//     const{ monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//           className='monster-search-box' 
//           placeholder='search monsters' 
//           onChangeHandler={onSearchChange} 
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;

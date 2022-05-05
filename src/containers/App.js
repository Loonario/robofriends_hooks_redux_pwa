import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { getRobots } from '../reducers';

//import { setSearchField } from '../actions';

//import {setSearchField} from '../actions';
//import { searchRobots } from '../reducers';

// const mapStateToProps = state => {
//     return {
//         searchField: state.searchField
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSearchChange: (event) => dispatch(setSearchField(event.target.value))
//     }
// }


function App () {
    //const [robots, setRobots] = useState([]);
    //const [searchfield, setSearchfield] = useState('');
    const {searchField} = useSelector((state) => state.roboSearch);
  // const [searchField, onSearchChange] = useState('');
  
  const dispatch = useDispatch();
    const {robots} = useSelector((state) => state.roboSearch);
  
    useEffect(() => {
      dispatch(getRobots());
  }, [])  

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {setRobots(users)});
    // }, [])

    // const onSearchChange = (event) => {
    //     setSearchfield(event.target.value);
    //     }
        
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
       return !robots.length ?
       
            <h1>Loading...</h1> :
         (
        <div className = 'tc'>
        <h1 className = "f1" >RoboFriends</h1>
        <SearchBox />
        <Scroll>
        <CardList robots = {filteredRobots} />
        </Scroll>
        </div>
    )    
};

export default App;
// connect(mapStateToProps, mapDispatchToProps)
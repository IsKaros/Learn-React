import React from 'react';
import SearchBar from './searchBar'
import Goods from './goods'
class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <SearchBar></SearchBar>
        <Goods></Goods>
      </div>
     );
  }
}
 
export default GoodsList;
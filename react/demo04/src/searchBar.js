import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue:''  }
    this.changeSearchValue = this.changeSearchValue.bind(this)
  }
  changeSearchValue(e){
    this.setState({searchValue:e.target.value})
  }
  render() { 
    return (
    <div>
      <input placeholder="Search..." 
             value = {this.searchValue}
             onChange={this.changeSearchValue}
             className="search"
      ></input>
      <p>
      <input type="checkbox" value="" />
      only show product in stock
      </p>
      
    </div>  );
  }
}
 
export default SearchBar;
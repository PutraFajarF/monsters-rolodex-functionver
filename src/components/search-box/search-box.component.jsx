import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return(
      <div>
        <input 
          className={`search-box ${className}`}
          type='search' 
          placeholder= {placeholder}
          onChange={onChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBox;
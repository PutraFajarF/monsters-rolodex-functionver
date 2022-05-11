import './search-box.styles.css';

const SearchBox = ({onChangeHandler, className, placeholder}) => (
  <div>
    <input 
      className={`search-box ${className}`}
      type='search' 
      placeholder= {placeholder}
      onChange={onChangeHandler}
    />
  </div>
)
export default SearchBox;
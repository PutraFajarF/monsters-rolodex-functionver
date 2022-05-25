import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({onChangeHandler, className, placeholder}: SearchBoxProps) => (
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
import React, { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue(''); // Сбрасываем поле ввода
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormBtn}>
          <span className={css.SearchFormBtnLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

// import React, { Component } from 'react';
// import css from './Searchbar.module.css';

// export class Searchbar extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleChange = (e) => {
//     this.setState({ inputValue: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.inputValue);
//     this.setState({ inputValue: '' });
//   };

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormBtn}>
//             <span className={css.SearchFormBtnLabel}>Search</span>
//           </button>

//           <input
//             className={css.SearchFormInput}
//             type="text"
//             value={this.state.inputValue}
//             onChange={this.handleChange}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

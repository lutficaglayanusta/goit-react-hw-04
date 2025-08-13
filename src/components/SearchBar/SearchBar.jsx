import toast from "react-hot-toast";
import css from "./SearchBar.module.css"

const SearchBar = ({onSubmit}) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const input = e.target.elements.image.value

    if (input.trim() === "") {
      toast.error("Please fill in the all field.",{duration: 1000})
      return
    }

    onSubmit(input)
    

    e.target.reset()
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="image"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

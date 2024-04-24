import PropTypes from "prop-types";

export const NavBar = ({index, setIndex, list}) => {
  const handlePreviousClick = () => {
    setIndex(index - 1)
  }

  const handleNextClick = () => {
    setIndex(index + 1)
  }

  return (
    <div>
      {index > 0 ? <button onClick={handlePreviousClick}>Previous</button> : ''}
      {index < list.length - 1 ? <button onClick={handleNextClick}>Next</button> : ''}
    </div>
  )
}

NavBar.propTypes = {
  setIndex: PropTypes.func,
  index: PropTypes.number,
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }))
}

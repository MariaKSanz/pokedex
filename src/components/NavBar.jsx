import PropTypes from "prop-types";

export const NavBar = ({setIndex, list}) => {

  const handleClick = (index) => {
    setIndex(index)
    if (index === 3) {
      alert("pika pikachu!!!")
    }
  }



  return (
    <div>
        {list.map((element, index) => (
          <button key={element.name} onClick={() => handleClick(index)}>
            {element.name}
          </button>
        ))}
    </div>
  )
}

NavBar.propTypes = {
  setIndex: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }))
}

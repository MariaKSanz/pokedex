import PropTypes from "prop-types";
import styles from './PokemonCard.module.css'

function PokemonCard({pokemon}) {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc !== undefined ? <img
        src={pokemon.imgSrc}
        alt={pokemon.name}
        className={styles.cardImg}
      /> : <p>???</p> }
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  })
}
export default PokemonCard;

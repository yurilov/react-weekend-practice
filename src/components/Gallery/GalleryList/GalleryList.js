import propTypes from "prop-types";
import { GalleryListItem } from "../GalleryListItem/GalleryListItem";

export const GalleryList = ({ movies, toggleWatched, onClick }) => {
  return (
    <ul>
      {movies.map(({ img, title, id, isWatched }) => (
        <GalleryListItem
          img={img}
          title={title}
          id={id}
          key={id}
          isWatched={isWatched}
          toggleWatched={toggleWatched}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

GalleryList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      img: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isWatched: propTypes.bool.isRequired,
    })
  ),
  toggleWatched: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
};

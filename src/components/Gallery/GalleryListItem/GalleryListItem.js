import propTypes from "prop-types";

export const GalleryListItem = ({
  id,
  img,
  title,
  isWatched,
  toggleWatched,
}) => {
  return (
    <li id={id}>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
      <h2>{title}</h2>
      <p onClick={() => toggleWatched(id)}>Watched: {isWatched.toString()}</p>
    </li>
  );
};

GalleryListItem.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  isWatched: propTypes.bool.isRequired,
  toggleWatched: propTypes.func.isRequired,
};

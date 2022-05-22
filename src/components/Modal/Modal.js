import s from "./Modal.module.css";
import { useEffect, useState } from "react";
const Modal = ({ img, closeModal }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const escHandler = (e) => {
      if (e.code === "Escape") closeModal();
    };
    window.addEventListener("keydown", escHandler);
    return () => {
      window.removeEventListener("keydown", escHandler);
    };
  });

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <div className={s.overlay}>
        <img
          src={`https://image.tmdb.org/t/p/w780${img}`}
          alt="poster"
          onLoad={onLoad}
          style={{ display: loaded ? "block" : "none" }}
        />
        {!loaded && (
          <h1 style={{ color: "white", fontSize: 50 }}>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Modal;

import Close from "../images/closebutton.png";
import React from "react";

function PopupWithForm(props) {
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains(`popup`)) {
        props.onClose();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        props.onClose();
      }
    });
  }, []);
  return (
    <section
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <button className="popup__button-close">
        <img
          className="popup__close"
          src={Close}
          alt="botao de fechar popup"
          onClick={props.onClose}
        />
      </button>
      <form
        className={`form popup-${props.name}__container`}
        name={props.name}
        novalidate
        onSubmit={props.onSubmit}
      >
        <h2 className={`popup-${props.name}__title`}>{props.title}</h2>
        {props.children}
        <button className="popup__button">{props.buttonName}</button>
      </form>
    </section>
  );
}

export default PopupWithForm;

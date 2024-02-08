import Close from "../images/closebutton.png";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup-image ${props.card ? "popup_opened" : ""}`}
    >
      <button className="popup__button-close" onClick={props.onClose}>
        <img
          className="popup__close popup__close-image"
          src={Close}
          alt="botao de fechar popup"
        />
      </button>
      <div className="popup-image__container">
        <img
          className="popup-image__zoom"
          src={props.card ? props.card.link : ""}
          alt={props.card ? props.card.name : ""}
        />
        <p className="popup-image__name">{props.card ? props.card.name : ""}</p>
      </div>
    </section>
  );
}

export default ImagePopup;

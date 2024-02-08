import Close from "../images/closebutton.png";

function PopupWithForm(props) {
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
      >
        <h2 className={`popup-${props.name}__title`}>{props.title}</h2>
        {props.children}
        <button className="popup__button">Salvar</button>
      </form>
    </section>
  );
}

export default PopupWithForm;

import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopupOpen(props) {
  const name = React.useRef();
  const link = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlaceSubmit({
      name: name.current.value,
      link: link.current.value,
    });
  }
  return (
    <PopupWithForm
      name="add"
      title="Novo local"
      buttonName="Criar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Título"
        id="title-input"
        className="popup-add__input-title popup__input"
        minlength="2"
        maxlength="30"
        ref={name}
        required
      />
      <span className="popup-add__error popup__message-error title-input-error"></span>
      <input
        type="url"
        placeholder="Link da imagem"
        id="link-input"
        className="popup-add__input-link popup__input"
        ref={link}
        required
      />
      <span className="popup-add__error popup__message-error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopupOpen;

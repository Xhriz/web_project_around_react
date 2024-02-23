import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="photo-profile"
      title="Alterar a foto do perfil"
      buttonName="Salvar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        placeholder="Link da imagem"
        id="link-photo-input"
        className="popup-photo-profile__input-link popup__input"
        ref={avatarRef}
        required
      />
      <span className="popup__message-error link-photo-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [about, setAbout] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({ name, about });
  }

  return (
    <>
      <PopupWithForm
        name="edit"
        title="Editar perfil"
        buttonName="Salvar"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nome"
          name="name"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="popup__input popup__input_name"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__message-error name-input-error"></span>
        <input
          type="text"
          placeholder="Sobre mim"
          name="about"
          id="text-input"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="popup__input popup__input_description"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__message-error text-input-error"></span>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;

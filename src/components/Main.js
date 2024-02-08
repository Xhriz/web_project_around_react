import EditImage from "../images/botaoedit.png";
import AddImage from "../images/botaoadd.png";
import Pincel from "../images/pincel.png";
import Close from "../images/closebutton.png";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";
import Card from "./Card";
import { api } from "../utils/api";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  AddPlacePopupOpen,
  EditProfilePopupOpen,
  EditAvatarPopupOpen,
  SelectedCard,
  onClose,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((error) => {
        console.error(error);
      });

    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="content">
      <PopupWithForm
        name="add"
        title="Novo local"
        isOpen={AddPlacePopupOpen}
        onClose={onClose}
      >
        <input
          type="text"
          placeholder="Título"
          id="title-input"
          className="popup-add__input-title popup__input"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="popup-add__error popup__message-error title-input-error"></span>
        <input
          type="url"
          placeholder="Link da imagem"
          id="link-input"
          className="popup-add__input-link popup__input"
          required
        />
        <span className="popup-add__error popup__message-error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit"
        title="Editar perfil"
        isOpen={EditProfilePopupOpen}
        onClose={onClose}
      >
        <input
          type="text"
          placeholder="Nome"
          id="name-input"
          className="popup__input popup__input_name"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__message-error name-input-error"></span>
        <input
          type="text"
          placeholder="Sobre mim"
          id="text-input"
          className="popup__input popup__input_description"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__message-error text-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="photo-profile"
        title="Alterar a foto do perfil"
        isOpen={EditAvatarPopupOpen}
        onClose={onClose}
      >
        <input
          type="url"
          placeholder="Link da imagem"
          id="link-photo-input"
          className="popup-photo-profile__input-link popup__input"
          required
        />
        <span className="popup__message-error link-photo-input-error"></span>
      </PopupWithForm>

      <section className="popup popup-trash">
        <button className="popup__button-close">
          <img
            className="popup__close"
            src={Close}
            alt="botao de fechar popup"
          />
        </button>
        <form className="popup-trash__container">
          <h2 className="popup-trash__title">Tem certeza?</h2>
          <button className="popup__button popup-trash__button">Sim</button>
        </form>
      </section>

      <section className="profile">
        <div className="profile__img">
          <img
            className="profile__photo"
            src={userAvatar}
            alt="Foto de perfil do usuário"
            onClick={onEditAvatarClick}
          />

          <div className="profile__overlay-photo">
            <img
              className="profile__photo-edit"
              src={Pincel}
              alt="pincel para ediçao da foto do perfil"
            />
          </div>
        </div>
        <div className="profile__text">
          <h1 className="profile__name">{userName}</h1>
          <img
            className="profile__button-edit"
            src={EditImage}
            alt="Botao para editar perfil"
            onClick={onEditProfileClick}
          />
          <h2 className="profile__description">{userDescription}</h2>
        </div>
        <img
          className="profile__button-add"
          src={AddImage}
          alt="Botao para adicionar foto no perfil"
          onClick={onAddPlaceClick}
        />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              card={card}
              name={card.name}
              link={card.link}
              key={card._id}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
        <template id="template-card" />
        <ImagePopup card={SelectedCard} onClose={onClose}></ImagePopup>
      </section>
    </main>
  );
}
export default Main;

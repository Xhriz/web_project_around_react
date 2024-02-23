import EditImage from "../images/botaoedit.png";
import AddImage from "../images/botaoadd.png";
import Pincel from "../images/pincel.png";
import React from "react";
import ImagePopup from "./ImagePopup.js";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  SelectedCard,
  onClose,
  onCardClick,
  cards,
  cardLike,
  onConfirmClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__img">
          <img
            className="profile__photo"
            src={currentUser.avatar}
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
          <h1 className="profile__name">{currentUser.name}</h1>
          <img
            className="profile__button-edit"
            src={EditImage}
            alt="Botao para editar perfil"
            onClick={onEditProfileClick}
          />
          <h2 className="profile__description">{currentUser.about}</h2>
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
              onCardLike={cardLike}
              onConfirmClick={onConfirmClick}
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

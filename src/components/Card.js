import React from "react";
import Trash from "../images/Trash.png";
import Like from "../images/like.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `elements__trash ${
    isOwn ? "elements__trash" : "elements__trash-hidden"
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__like ${
    isLiked ? "elements__button-like_click" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
    <li className="elements__card" key={props._id}>
      <img
        className={cardDeleteButtonClassName}
        src={Trash}
        alt="botao de excluir no formato de uma lixeira"
        onClick={() => props.onConfirmClick(props.card._id)}
      />
      <img
        className="elements__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="elements__text">
        <h2 className="elements__title">{props.name}</h2>
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        >
          <img
            className="elements__button-like"
            src={Like}
            alt="botao de curtir"
          />
        </button>
        <p className="elements__number-likes">{props.card.likes.length}</p>
      </div>
    </li>
  );
}
export default Card;

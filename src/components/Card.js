import Trash from "../images/Trash.png";
import Like from "../images/like.png";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__card" key={props._id}>
      <img
        className="elements__trash"
        src={Trash}
        alt="botao de excluir no formato de uma lixeira"
      />
      <img
        className="elements__image"
        src={props.link}
        alt="imagem do card"
        onClick={handleClick}
      />
      <div className="elements__text">
        <h2 className="elements__title">{props.name}</h2>
        <button type="button" className="elements__like">
          <img
            className="elements__button-like"
            src={Like}
            alt="botao de curtir"
          />
        </button>
        <p className="elements__number-likes"></p>
      </div>
    </li>
  );
}
export default Card;

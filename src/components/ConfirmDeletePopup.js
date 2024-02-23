import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onCardDelete(props.cardId);
  }
  return (
    <>
      <PopupWithForm
        name="trash"
        title="Tem certeza?"
        buttonName="Sim"
        isOpen={props.cardId}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      ></PopupWithForm>
    </>
  );
}

export default ConfirmDeletePopup;

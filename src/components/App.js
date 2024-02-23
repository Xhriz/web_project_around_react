import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import React from "react";
import EditProfilePopup from "./EditProfile.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopupOpen from "./AddPlacePopup.js";
import ConfirmDeletePopup from "./ConfirmDeletePopup.js";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [EditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [EditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [AddPlacePopupOpens, setAddPlacePopupOpen] = React.useState(false);
  const [SelectedCard, setSelectedCard] = React.useState(null);
  const [selectedCardToDelete, setSelectedCardToDelete] = React.useState("");
  const [CurrentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(setCurrentUser)
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

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleConfirmDeleteClick(cardId) {
    setSelectedCardToDelete(cardId);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard(null);
    setSelectedCardToDelete("");
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === CurrentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => console.log(error));
  }

  function handleCardDelete(cardId) {
    api
      .removeCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));
        setSelectedCardToDelete("");
      })
      .catch((error) => console.log(error));
  }

  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo(name, about)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((error) => {
        console.log(error);
      });
  }

  function handleUpdateAvatar(avatar) {
    api
      .editAvatar(avatar)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAddPlaceSubmit(name, link) {
    api
      .addCard(name, link)
      .then((newCard) => setCards([newCard, ...cards]))
      .then(closeAllPopups)
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={CurrentUser}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onClose={closeAllPopups}
          SelectedCard={SelectedCard}
          onCardClick={handleCardClick}
          onConfirmClick={handleConfirmDeleteClick}
          cards={cards}
          cardLike={handleCardLike}
        />
        <EditProfilePopup
          isOpen={EditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={EditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopupOpen
          isOpen={AddPlacePopupOpens}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <ConfirmDeletePopup
          cardId={selectedCardToDelete}
          onClose={closeAllPopups}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import React from "react";

function App() {
  const [EditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [EditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [AddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [SelectedCard, setSelectedCard] = React.useState(null);

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

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        EditProfilePopupOpen={EditProfilePopupOpen}
        AddPlacePopupOpen={AddPlacePopupOpen}
        EditAvatarPopupOpen={EditAvatarPopupOpen}
        SelectedCard={SelectedCard}
        onClose={closeAllPopups}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;

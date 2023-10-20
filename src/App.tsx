import React from "react";
import "./App.css";
import Home from "./components/Home/home";
import { Contacts } from "./components/Contacts/contacts";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact/contact";
import NotFound from "./components/NotFound/notFound";
import { NewContact } from "./components/NewContact/newContact";
import { Nav } from "./components/Nav/nav";

// Ścieżki aplikacji
// strona główna = "/"
// strona lista kontaktów = "/contacts"
// strona pojedynczego kontaktu = "/contacts/:id" - "/id"
// strona pojedynczego produktu = "/products/:id" - "/id"
// strona do tworzenia nowego kontaktu = "/contacts/new" - dobrze
// strona do tworzenia nowego kontaktu = "/new" - słabo
// strona do tworzenia nowego produktu = "/new" - słabo

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="/contact/new" element={<NewContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Contacts /> */}
    </div>
  );
}

export default App;

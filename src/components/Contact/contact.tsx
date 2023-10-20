import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ItemType } from "../Contacts/contacts";
import { useParams } from "react-router-dom";

export const Contact = () => {
  const { id } = useParams();

  const [contact, setContact] = useState<ItemType>({
    id: "0",
    firstName: "",
    lastName: "",
  });

  const [idUser, setIdUser] = useState("");

  const getContact = async (id: string) => {
    try {
      const data = await fetch(`https://dummyjson.com/users/${id}`);

      if (!data.ok) throw new Error("Cannot fetch contact");

      const { firstName, lastName } = await data.json();

      const fetchContact: ItemType = {
        id: id,
        firstName,
        lastName,
      };

      setContact(fetchContact);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getContact(id);
      setIdUser(id);
    }
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIdUser(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idUser) {
      getContact(idUser);
      resetForm();
    }
  };

  const resetForm = () => {
    setIdUser("");
  };

  return (
    <div>
      <p>
        <form onSubmit={onSubmit}>
          <label htmlFor="idUser">
            Wyświetl użytkownika nr:
            <input
              type="text"
              id="idUser"
              name="idUser"
              value={idUser}
              onChange={handleInput}
            />
            <button type="submit">Wyświetl</button>
          </label>
        </form>
      </p>
      <p>
        {contact.firstName
          ? `Imię: ${contact.firstName}`
          : "Brak informacji o imieniu"}
      </p>
      <p>
        {contact.lastName
          ? `Nazwisko: ${contact.lastName}`
          : "Brak informacji o nazwisku"}
      </p>
    </div>
  );
};

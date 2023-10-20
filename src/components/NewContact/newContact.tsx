import { ChangeEvent, FormEvent, useState } from "react";

type ContactType = {
  firstName: string;
  lastName: string;
};

export const NewContact = () => {
  // sposob I dla oddzielnych stanów

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
  //     const { value } = event.target;
  //     if (value.length > 0) setFirstName(value);
  // };

  // const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
  //     const { value } = event.target;
  //     if (value.length > 0) setLastName(value);
  // };

  // sposob II dla jednego stanu
  const [contact, setContact] = useState<ContactType>({
    firstName: "",
    lastName: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // reszta kodu do sposobu I oraz II

  // const isValidate = () => firstName.length > 0 && lastName.length > 0;
  const isValidate = () => {
    const { firstName, lastName } = contact;
    return firstName.length > 0 && lastName.length > 0;
  };

  const resetForm = () => {
    // dla sposobu I

    // setFirstName('');
    // setLastName('');

    // dla sposobu II
    setContact({
      firstName: "",
      lastName: "",
    });
  };

  const addUser = async () => {
    // dla sposobu I

    // const newUser = {
    //     firstName,
    //     lastName,
    // }

    // dla sposobu II
    const newUser = contact;

    try {
      const data = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!data.ok) throw new Error("Cannot add new user");

      alert("Pomyslnie utworzono kontakt!");
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidate()) {
      addUser();
    }
  };

  return (
    <>
      <h1>Formularz nowego kontaktu</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">
          Imie:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={contact.firstName}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="lastName">
          Nazwisko:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={contact.lastName}
            onChange={handleInput}
          />
        </label>
        <button type="submit">dodaj</button>
      </form>
    </>
  );
};

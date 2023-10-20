import { useEffect, useState } from "react";

export type ItemType = {
  id: string;
  firstName: string;
  lastName: string;
};

export const Contacts = () => {
  const [list, setList] = useState<ItemType[]>([]);

  const getContacts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/users");

      if (!data.ok) throw new Error("Something wrong!");

      // obiekt zwrotny posiada liste "users"
      const { users } = await data.json();
      // console.log(users);
      setList(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1>Lista kontaktów</h1>
      {list.length > 0 ? (
        <ul>
          {list.map(({ id, firstName, lastName }) => (
            <li key={id}>
              {firstName} - {lastName}
            </li>
          ))}
        </ul>
      ) : (
        <h2>Brak kontaktów</h2>
      )}
    </div>
  );
};

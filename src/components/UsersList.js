import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const usersName = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net"
  },
  {
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info"
  },
  {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz"
  },
  {
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info"
  },
  {
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org"
  },
  {
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "ambrose.net"
  }
];

const UsersList = () => {
  const num = useParams() 
  useEffect(() => {
    usersName.filter((item,index) => {
      if(index === num-1){
        return item;
      }
    })
  },[num])
  return (
    <div>
        <h1>User Details</h1>
        <ul>
        {
          usersName.map((item,index) => {
            return(
              <li key={index}>{item}</li>
            )
          })
        }
        </ul>
    </div>
  )
}

export default UsersList;
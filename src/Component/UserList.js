import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(10);

  const userData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=40");
    setUsers(response.data.results);
  };

  const Loaduser = () => {
    setShow(show + 10);
  };

  useEffect(() => {
    userData();
  }, []);

  const Card = (item, index) => {
    return (
      <div className="d-flex flex-wrap flex-row">
        <div
          style={{ fontSize: "1rem", width: "15vw", padding: "1rem" }}
          className="card m-5"
          key={index}
        >
          <img
            alt="Image"
            className="card-image-top card-header"
            src={item.picture.large}
            width="200"
            height="150px"
          />
          <div className="card-body">
            <p>
              Name : {item.name.title} {item.name.first} {item.name.last}
            </p>
            <p>Email : {item.email}</p>
            <p>Phone : {item.phone}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div className="d-flex flex-wrap flex-row">
          {users.slice(0, show).map(Card)}
        </div>
      </div>
      {show < users.length && (
        <button
          className="btn btn-success text-center"
          style={{ display: "inline-block" }}
          onClick={Loaduser}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default UserList;

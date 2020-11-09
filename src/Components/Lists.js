import React, { useEffect, useState } from "react";
import "../Styles/Lists.css";

function Lists() {
  const [isEdit, setIsEdit] = useState("");
  const [lists, setLists] = useState([]);
  const [list, setList] = useState("");
  const [ListName, setListName] = useState("");

  useEffect(() => {
    getAllLists();
  }, []);

  const getAllLists = async () => {
    let listsData = await fetch("http://localhost:3000/lists/");
    let data = await listsData.json();

    setLists(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newListData = await fetch("http://localhost:3000/lists/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ListName }),
    });

    let newList = await newListData.json();
    console.log(newList);

    getAllLists();
    setListName("");
  };

  return (
    <div className="listslist">
      <h3 className="listslist__title">Lists</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="listsform__input"
          type="text"
          value={ListName}
          placeholder="Create a List"
          onChange={(e) => setListName(e.target.value)}
        />
        <button className="listsform__button" type="submit">
          CREATE
        </button>
      </form>
      {lists.map((list, idx) => {
        return <div key={idx}>{list.ListName}</div>;
      })}
    </div>
  );
}

export default Lists;

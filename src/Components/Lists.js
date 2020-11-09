import React, { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
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

    /* old code with no styling
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
  } */

    return (
        <div className="main">
            <div className="lists">
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
            </div>

            <div className="listslist">
                {lists.map((list, idx) => {
                    return (
                        <div
                            className={list.isComplete ? "lists__item complete" : "lists__item"}
                            key={idx}>
                            <div key={list.id}>
                                {list.ListName}
                            </div>
                            <div className="icons">
                                <RiCloseCircleLine
                                    className="lists__deleteIcon"
                                />
                                <MdModeEdit
                                    onClick={() => setIsEdit({ id: list.id, value: list.ListName })}
                                    className="lists__editIcon"
                                />
                            </div>
                        </div>
                    );
                })}</div>
        </div>
    );
}

export default Lists;

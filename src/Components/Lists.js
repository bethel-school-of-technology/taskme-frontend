import React, { useEffect, useState } from 'react'
import '../Styles/Lists.css'

function Lists() {

    var [isEdit, setIsEdit] = useState("");
    var [lists, setLists] = useState([]);
    var [list, setList] = useState("");

    var [listname, setListName] = useState("");

useEffect(() => {

        getAllLists();
    }, [])

const getAllLists = async () => {
    let listsData = await fetch("http://localhost:3000/lists/")
    let l = await listsData.json();

    setLists(l);
}

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newListData = await fetch("http://localhost:3000/lists/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({listname})
        })

        let newList = newListData.json();

        getAllLists();
    }

    return (
        <div className='listslist'>
            <h3 className="listslist__title">Lists</h3>
            {lists.map((list, idx) => {
                return (
                    <div key={idx}>
                        {list.ListName}
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <input className="listsform__input" type="text" placeholder="Create a List" onChange={e => setListName(e.target.value)} />
                <button className="listsform__button" type="submit">CREATE</button>
            </form>
        </div>
    )
};

export default Lists;

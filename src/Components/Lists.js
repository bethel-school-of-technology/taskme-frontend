import React, { useEffect, useState } from 'react'
import '../Styles/Lists.css'

function Lists() {

    var [isEdit, setIsEdit] = useState("");
    var [lists, setLists] = useState([]);
    var [list, setList] = useState("");

    var [listname, setListName] = useState("");
    var [completed, setCompleted] = useState(false);

    useEffect(() => {
        const getAllLists = async () => {
            let listsData = await fetch("http://localhost:3000/lists/")
            let l = await listsData.json();

            setLists(l);
        }

        getAllLists();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newListData = await fetch("http://localhost:3000/lists/create/", {
            method: "POST",
            body: JSON.stringify({ listname })
        })

        let newList = newListData.json();

        console.log(newList);
    }

    return (
        <div className='lists'>
            <h3>Lists</h3>
            {lists.map((list, idx) => {
                return (
                    <div key={idx}>
                        {list.ListName}
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <label>List Name</label>
                <input type="text" onChange={e => setListName(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
};

export default Lists;

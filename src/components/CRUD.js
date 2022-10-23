import React, { useRef, useState } from 'react'


function CRUD() {
    const list = [
        {
            id: 1, 
            name : "Pooja",
            age: "25",
            poy:"2022"
        },
        {
            id: 2, 
            name: "Sachin",
            age: "27",
            poy:"2022"
        },
        {
            id: 3, 
            name: "Mayur",
            age: "28",
            poy:"2022"
        },{
            id: 4, 
            name: "Atharva",
            age: "20",
            poy:"2022"
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
                <h1 className='stud'>Students Details</h1>
            <table>
            <tr>
                            <th> Name of Student</th>
                            <th>Age</th>
                            <th>Pass Out Year</th>
                            <th>Action</th>
                            </tr>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tbody>
                            {/* <tr>
                            <th> Name of Student</th>
                            <th>age</th>
                            </tr> */}
                           <tr>
                        
                            <td>{current.name}</td>
                            <td>{current.age}</td>
                            <td>{current.poy}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                        </tbody>
                        
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const age = event.target.elements.age.value
         const poy = event.target.elements.poy.value

        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, age: age,poy:poy} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputage(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, age :value} : li
        ))

        setList(newlist)
    }
    function handInputpoy(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, poy :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='Name of Student' value={current.name}/></td>
            <td><input type="text" onChange={handInputage} name='age' value={current.age}/></td>
             <td><input type="text" onChange={handInputpoy} name='Pass Out Year' value={current.poy}/></td> 
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const ageRef = useRef()
     const poyRef=  useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const age = event.target.elements.age.value;
         const poy= event.target.elements.poy.value;
        const newlist = {
            id: 8,
            name,
            age,
             poy
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        ageRef.current.value = ""
         poyRef.current.value = ""

    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input type="text" name="age" placeholder="Enter age" ref={ageRef}/>
            <input type="number" name="poy" placeholder="Enter Pass out Year" ref={poyRef}/> 
            <button type="submit">Add</button>
        </form>
    )
}

export default CRUD;
const Reducer = (state="",action) =>{
    switch(action){
     case NewStudents : return <NewStudents/>
     case StudentEdit : return <StudentEdit/>
     default : return <Students/>
    }
}

export default Reducer;
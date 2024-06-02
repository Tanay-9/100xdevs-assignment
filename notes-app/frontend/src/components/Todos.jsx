const Todos = ({ todo }) => {
    // console.log(todo.length);
    return(
     <>
        {
            todo.map((t,i) => {
                return (
                <div key={i}>
                    <h1>{t.title}</h1>
                    <h1>{t.description}</h1>
                    <button>{t.completed? "completed" : "mark as complete"}</button>
                </div> )
            })
        }
     </>   
    )
}

export default Todos;
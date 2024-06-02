import { useState } from "react";

const CreateTodo = ({ fetchData }) => {
    const [text, setText] = useState('');
    const [desc, setDesc] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const changeText = (e) => {
        setText(e.target.value);
    }
    const changeDesc = (e) => {
        setDesc(e.target.value);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/todo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: text,
                    description: desc
                }),
            });
            const json = await res.json();
            console.log(json);
            if (!res.ok) {
                setError(json.message);
            } else {
                // Clear error and success message
                setError('');
                setSuccessMessage('Note added successfully.');
                // Fetch updated data
                fetchData();
                // Clear input fields after successful submission
                setText('');
                setDesc('');
                // Clear success message after some time
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000); // Clear message after 3 seconds
            }
        } catch (error) {
            console.error('Error adding todo:', error);
            setError('Failed to add note. Please try again later.');
        }
    }

    return (
        <>
            <input type="text" placeholder="title" value={text} onChange={changeText} />
            <input type="text" placeholder="description" value={desc} onChange={changeDesc} />
            <button onClick={submitHandler}>Add a note</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </>
    )
}

export default CreateTodo;

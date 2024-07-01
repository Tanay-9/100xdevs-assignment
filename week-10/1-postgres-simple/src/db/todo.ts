import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        await client.connect();
        const insertTodo = `INSERT INTO todos (userId,title,description) VALUES ($1,$2,$3) RETURNING *`
        const res = await client.query(insertTodo,[userId,title,description]);

        const newTodo = res.rows[0];
        return ({
            title : newTodo.title,
            description : newTodo.description,
            done : newTodo.done,
            id : newTodo.id
        })
    }
    catch(err) {
        console.log('error is',err);
    }
    finally{
        await client.end();
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        await client.connect();
        const updateQuery = `UPDATE todos SET done = TRUE WHERE id = $1 RETURNING *`

        const res = await client.query(updateQuery,[todoId]);
        const updatedData = res.rows[0];
        console.log('result is',res);
        return ({
            title : updatedData.title,
            description : updatedData.description,
            done : updatedData.done,
            id : updatedData.id
        })
    }
    catch(err) {
        console.log('error is',err);
    }
    finally{
        await client.end();
    }
}   

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        await client.connect(); // Connect to the database

        const todosQuery = `SELECT id, title, description, done FROM todos WHERE user_id = $1`; // Query to get todos for the given user ID
        const res = await client.query(todosQuery, [userId]); // Execute the query

        // Map the result rows to an array of todo objects
        return res.rows.map((row: any) => ({
            id: row.id,
            title: row.title,
            description: row.description,
            done: row.done
        }));
    } catch (err) {
        console.error('Error:', err); // Log any errors that occur
        return [];
    } finally {
        await client.end(); // Ensure the database connection is closed
    }
}

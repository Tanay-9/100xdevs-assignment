import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        await client.connect();
        const userQuery = `INSERT INTO users (username,password,name) VALUES ($1,$2,$3) RETURNING *`
        const res = await client.query(userQuery,[username,password,name]);
        
        const newUser = res.rows[0];
        return ({
            username : newUser.username,
            password : newUser.password,
            name : newUser.name
        })
    }
    catch(err) {
        console.log('error',err);
    }
    finally{
       await client.end();
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        await client.connect();

        const getQuery = `SELECT * FROM users WHERE id = $1`
        const res = client.query(getQuery,[userId]);
        console.log('response is',res);

        const user = (await res).rows[0];
        return ({
            username : user.username,
            password : user.password,
            name : user.name
        })
    }
    catch(err) {
        console.log('error is',err);
    }
    finally{
        await client.end();
    }
}

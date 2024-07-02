import { PrismaClient } from '@prisma/client';

import dotenv from 'dotenv'
dotenv.config();
const prisma = new PrismaClient();
const Todo = prisma.todo;
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
    const res = await Todo.create({
        data : {
            userId,
            title,
            description   
        }
    })
    console.log(res);
    return {
        title : res.title,
        description : res.description,
        done : res.done,
        id : res.id
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
    const res = await Todo.update({
        where : {id : todoId},
        data: {
            done : true
        },
        select : {
            title : true,
            description : true,
            done : true,
            id : true
        }
       
    })
    return {
        title : res.title,
        description : res.description,
        id: res.id,
        done : res.done
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
    const res = await Todo.findMany({
        where : {userId : userId},
        select : {
            id : true,
            title : true,
            description : true,
            done : true
        }
    })
    return res;
}
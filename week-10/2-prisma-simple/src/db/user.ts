import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv'

dotenv.config();

const prisma = new PrismaClient();
const User = prisma.user;

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
    const res = await User.create({
        data : {
            username,
            password,
            name
        },
        select : {
            id : true,
            username : true,
            name : true
        }
    })   
    console.log(res);
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
    const result = await User.findFirst({
        where : {id : userId}

        
    })
    console.log(result);
}

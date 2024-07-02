import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

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
        data: {
            username,
            password,
            name
        },
        select: {
           username: true,
           password: true,
           name: true,
           id : true
        }
    });
    
    console.log(res); // For debugging or logging purposes
    return res; // Return the created user object
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
        where: { id: userId },
        select: {
            username: true,
            password: true,
            name: true
        }
    });
    
    // Return an object with username, password, and name
    return {
        username: result?.username,
        password: result?.password,
        name: result?.name
    };
}

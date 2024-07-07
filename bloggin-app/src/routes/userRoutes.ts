import { Hono } from "hono";
import { userSchema } from "../zod/users";
import {z} from 'zod'
export const userRouter = new Hono();

enum StatusCode {

}

userRouter.get('/',(c) => {
    return c.json({
        message : "yeah working"
    })
})

userRouter.post('/signup', async(c) => {
    // type bod = z.infer<typeof userSchema>
    const body: {
        username : string,
        email : string,
        password : string
    } = await c.req.json();
    // console.log(body);
    const result = userSchema.safeParse(body)
    if(!result.success) return c.json({
        message : "error in inputs"
    },404)

    else
    return c.json({
        message : result
    })
})
import { Hono,Context } from 'hono'

export const postRouter = new Hono();

postRouter.get('/',(c) => {
    return c.json({
        message : "yeah postRouter working nice"
    })
})

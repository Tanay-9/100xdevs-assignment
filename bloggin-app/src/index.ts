import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { postRouter } from './routes/postRoutes'
import { userRouter } from './routes/userRoutes'
const app = new Hono()

app.use(cors())

app.route('/api/v1/users',userRouter);
app.route('/api/v1/posts',postRouter);


export default app

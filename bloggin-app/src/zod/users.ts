import { z } from "zod";

export const userSchema = z.object({
    username : z.string(),
    email : z.string().email(),
    password : z.string().min(8,{message : "enter a valid password"})
})
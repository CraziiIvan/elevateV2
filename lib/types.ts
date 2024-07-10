import {z} from "zod"

export const subscribeFormSchema = z.object({
    email: z.string().email(),
})

export type TSubscribeForm = z.infer<typeof subscribeFormSchema>

export const submitFormSchema = z.object({
    name: z.string().min(2),
    url: z.string().url(),
})

export type TSubmitForm = z.infer<typeof submitFormSchema>
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    subscribeFormSchema,
    TSubscribeForm,
} from "@/lib/types"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SubscribeForm({ className }: React.ComponentProps<"form">) {

    const form = useForm({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(subscribeFormSchema),
    })

    function onSubmit(data: TSubscribeForm) {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (  
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                        <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Subscribe</Button>
            </form>
        </Form>
    )
}
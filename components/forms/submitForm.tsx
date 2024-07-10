"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    submitFormSchema,
    TSubmitForm,
} from "@/lib/types"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SubmitForm({ className }: React.ComponentProps<"form">) {

    const form = useForm({
        defaultValues: {
            email: "",
            name: "",
            category: "",
            url: "",
        },
        resolver: zodResolver(submitFormSchema),
    })

    function onSubmit(data: TSubmitForm) {
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
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (  
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                        <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="url"
                    render={({field}) => (  
                        <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                        <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </Form>
    )
}
import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '../ui/calendar'

type DatePicker = {
    label:string;
    description:string;
    placeholder:string;
    field:any;
    style:string;
}

function DatePicker({field,label,description,placeholder,style}:DatePicker) {
  return (

    <FormItem className={`flex flex-col ${style}`}>
        <FormLabel>{label}</FormLabel>
        <Popover>
            <PopoverTrigger asChild>
            <FormControl>
                <Button
                variant={"outline"}
                className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                )}
                >
                {field.value ? (
                    format(field.value, "PPP")
                ) : (
                    <span>{placeholder}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
            <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
            />
            </PopoverContent>
        </Popover>
        <FormDescription>
            {description}
        </FormDescription>
        <FormMessage />
        </FormItem>
  )
}

export default DatePicker
import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'

type TextAreaField = {
    label:string;
    description:string;
    placeholder:string;
    field:any;
    style:string;
}

function TextArea({label,field,description,placeholder,style}:TextAreaField) {
  return (
    <FormItem className={style}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            <Textarea placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>
            {description}
        </FormDescription>
        <FormMessage />
    </FormItem>
  )
}

export default TextArea
import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

type InputField = {
    label:string;
    description:string;
    placeholder:string;
    field:any;
    style:string;
}

function InputField({label,field,description,placeholder,style}:InputField) {
  return (
    <FormItem className={style}>
        <FormLabel>{ label }</FormLabel>
        <FormControl>
            <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>
           {description}
        </FormDescription>
        <FormMessage/>
    </FormItem>
  )
}

export default InputField
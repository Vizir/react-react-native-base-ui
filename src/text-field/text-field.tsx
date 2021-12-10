import React from "react";
import { ITextFieldProps, TextField as NatTextField } from "@naturacosmeticos/natds-web";

export const TextField = React.forwardRef<HTMLTextAreaElement | HTMLInputElement, ITextFieldProps>((props: ITextFieldProps,ref) =>
   <NatTextField {...props} ref={ref} />
)

TextField.displayName = 'TextField';

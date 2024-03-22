import React from 'react';
import {IChildren} from "@/entities/IChildren";

export const DropDown: React.FC<IChildren> = ({ children }) => {
    return(
        <>
            {children}
        </>
    );
}
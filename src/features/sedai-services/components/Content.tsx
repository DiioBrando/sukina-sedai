import React from 'react';
import {IChildren} from "@/entities/IChildren";
import {SideBar} from "@/features/sedai-services/components/SideBar";
import {NavBar} from "@/features/sedai-services/components/NavBar";

export const Content: React.FC<IChildren> = ({ children }) => {
    return(
        <>
            <NavBar/>
        <main className={'flex gap-2.5 w-full'}>
            <SideBar/>
            {children}
        </main>
        </>
    )
}
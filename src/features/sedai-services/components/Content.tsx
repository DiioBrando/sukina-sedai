import React from 'react';
import { IChildren } from "@/entities/IChildren";
import { SideBar } from "@/features/sedai-services/components/SideBar";
import { NavBar } from "@/features/sedai-services/components/NavBar";

export const Content: React.FC<IChildren> = ({ children }) => {
    return(
        <>
            <NavBar/>
        <main className={'flex md:gap-2.5'}>
            <SideBar/>
            {children}
        </main>
        </>
    )
}
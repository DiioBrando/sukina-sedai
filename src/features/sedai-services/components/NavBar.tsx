'use client';
import Link from 'next/link';
import { profileDropDownButton, profileDropDownLink } from '@/data/dropdown-data/profileDropDownItems';
import { Logo } from '../../../../public/icons/Logo';
import { Input } from '@/features/sedai-services/components/Input';
import { Search } from '../../../../public/icons/Search';
import { Button } from '@/features/sedai-services/components/Button';
import { Profile } from '@/features/sedai-services/components/Profile';
import { DropDown } from '@/features/sedai-services/components/DropDown';
import { useClickOutSide } from '@/shared/custom-hooks/useClickOutSide';
import { useState, useRef} from 'react';
import { BorderLine } from '@/shared/BorderLine';
import { Notification } from '../../../../public/icons/Notification';

export const NavBar = () => {
    const [isOpen, setOpen] = useState({
        ProfileDropDown: false,
        NotificationDropDown: false,
        fillNotification: '#000000',
    });

    const elementRef = useRef(null);

    useClickOutSide(elementRef, () => {
            (isOpen.ProfileDropDown && setTimeout(() => setOpen({...isOpen, ProfileDropDown: false}), 100));
            (isOpen.NotificationDropDown && setTimeout(() => setOpen({...isOpen, NotificationDropDown: false}), 100));

        });

    return(
        <header className={'flex justify-between max-h-14 min-h-14 h-full px-2 bg-white'}>
            <div className={'flex items-center w-full min-w-[56px] max-w-64'}>
                <Link href={'/'} className={'scale-125 flex justify-start min-h-14 min-w-14 max-w-14 max-h-14 w-full h-full'}>
                    <Button setting={{
                        image: {
                            svgComponent: {
                                image: <Logo/>,
                                style: 'h-14 w-14 flex items-center p-0'
                            },
                        },
                        styleButton: 'p-0 hover:bg-transparent',
                    }}/>
                </Link>
            </div>
            <div className={'w-full max-w-80'}>
                <div className={'flex items-center justify-center h-full'}>
                    <Input input={{
                    placeholder: 'search favorite anime here',
                    style: 'p-1 px-4 border-r-0 rounded-r-none rounded-md',
                }}/>
                    <Button setting={{
                        image: {
                            svgComponent: {
                                image: <Search/>,
                                style: 'w-[50px] h-[34px] border-customBorderWhite border flex p-1 rounded-md rounded-l-none',
                            },
                        },
                        styleButton: 'p-0 hover:rounded-l-none'
                    }}/>
                </div>
            </div>
            <div className={'w-full min-w-5 max-w-64 flex items-center justify-end'}>
                <div className={'relative flex items-center'}>
                    <Button setting={{
                        image: {
                            svgComponent: {
                                image: <Notification fill={isOpen.fillNotification}/>,
                                style: 'w-8 h-8'
                            },
                        },
                        eventButton: () => setOpen({...isOpen, NotificationDropDown: !isOpen.NotificationDropDown}),
                    }}/>
                    {
                        isOpen.NotificationDropDown && <DropDown>
                        <section ref={elementRef} className={'absolute bottom-0 top-10 right-0 z-50'}>
                            <div className={'border border-b-0 rounded-b-none rounded-lg w-60 max-h-72 overflow-hidden bg-white'}>
                                <div className={'flex justify-between'}>
                                    <Button setting={{
                                    text: 'News',
                                    styleButton: 'hover:rounded-none border-b-2 w-full flex items-center justify-center p-1',
                                }}/>
                                    <Button setting={{
                                        text: 'Anime',
                                        styleButton: 'hover:rounded-none border-b-2 w-full flex items-center justify-center p-1',
                                    }}/>
                                </div>
                            </div>
                            <ul className={'p-4 overflow-hidden overflow-y-auto border border-t-0 rounded-t-none rounded-lg max-h-72 bg-white'}>
                                <p className={'text-lg text-center'}>You&apos;re all caught up. What a pro!</p>
                                <p className={'text-md text-center'}>You have no messages.</p>
                            </ul>
                        </section>
                    </DropDown>
                    }
                </div>
                <div className={'relative flex items-center'}>
                    <Profile handleChange={() => setOpen({...isOpen, ProfileDropDown: !isOpen.ProfileDropDown})}/>
                    {isOpen.ProfileDropDown && <DropDown>
                        <nav ref={elementRef} className={'absolute bottom-0 top-14 right-0 z-50'}>
                            <ul className={'p-4 border w-60 max-h-72 rounded-lg overflow-hidden overflow-y-auto bg-white'}>
                                {
                                    profileDropDownLink.map((link) => (
                                    <li key={link.id} className={'hover:bg-grayTransparent hover:rounded-lg p-1'}>
                                        <Link className={'flex items-center gap-2.5'} href={'/' + link.linkTo}>
                                            <span className={'max-w-5 max-h-5'}>{link.svgComponent}</span>
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))
                                }
                                <BorderLine/>
                                {
                                    profileDropDownButton.map((button) => (
                                    <li key={button.id}
                                        className={'flex items-center hover:bg-grayTransparent hover:rounded-lg p-1 gap-1.5'}>
                                        <Button setting={{
                                            image: {
                                                svgComponent: {
                                                    image: button.svgComponent,
                                                    style: 'w-5 h-5'
                                                },
                                            },
                                            styleButton: 'hover:bg-transparent',
                                        }}/>
                                        <span>{button.name}</span>
                                    </li>))
                                }
                            </ul>
                        </nav>
                    </DropDown>}
                </div>
            </div>
        </header>
    );
}
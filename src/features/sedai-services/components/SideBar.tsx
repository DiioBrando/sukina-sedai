'use client';
import {Home} from '../../../../public/icons/Home';
import Link from 'next/link';
import {Following} from '../../../../public/icons/Following';
import {Recommended} from '../../../../public/icons/Recommended';
import {ArrowBar} from '../../../../public/icons/ArrowBar';
import {useState} from 'react';
import {Button} from "@/features/sedai-services/components/Button";

export const SideBar = () => {
    const [stateMenu, setStateMenu] = useState({
        isOpen: true,
        rotate: 'rotate-0',
        display: 'flex',
        widthStyleIsOpenSvg: 'w-full justify-end',
        width: 'max-w-max',
    });
    const handleChange = () => {
        if(stateMenu.isOpen) {
            setStateMenu({...stateMenu, rotate: 'rotate-180', display: 'hidden', isOpen: false, widthStyleIsOpenSvg: 'w-0'});
        } else {
            setStateMenu({...stateMenu, rotate: 'rotate-0', display: 'flex', isOpen: true, widthStyleIsOpenSvg: 'w-full justify-end'});
        }
    }

    return(
      <section className={`${stateMenu.width} min-w-max max-h-max w-full`}>
          <div className={'border border-white bg-white p-2'}>
              <div className={'flex flex-1 flex-col gap-2.5'}>
                  <div className={'hidden md:flex items-center'}>
                      <span className={`hidden text-lg px-1 md:${stateMenu.display}`}>Menu</span>
                      <p className={`hidden md:flex ${stateMenu.widthStyleIsOpenSvg}`}>
                      <Button setting={{
                          eventButton: handleChange,
                          image: {
                              svgComponent: {
                                  image: <ArrowBar/>,
                                  style: `w-5 h-5 ${stateMenu.rotate}`,
                              },
                          },
                          styleButton: 'p-1',
                      }}/> </p>
                  </div>
                  <Link className={'flex items-center gap-1 text-md'} href={'/'}>
                      <Button setting={{
                          image: {
                              svgComponent: {
                                  image: <Home/>,
                                  style: 'w-5 h-5',
                              },
                          },
                          styleButton: 'p-1',
                      }}/>
                      <span className={`md:${stateMenu.display} hidden`}>Home</span>
                  </Link>
                  <Link className={'flex items-center gap-1 text-md'} href={'/following'}>
                      <Button setting={{
                          image: {
                              svgComponent: {
                                  image: <Following/>,
                                  style: 'w-5 h-5',
                              },
                          },
                          styleButton: 'p-1',
                      }}/>
                      <span className={`md:${stateMenu.display} hidden`}>following anime</span>
                  </Link>
                  <Link className={'flex items-center gap-1 text-md'} href={'/recommended'}>
                      <Button setting={{
                          image: {
                              svgComponent: {
                                  image: <Recommended/>,
                                  style: 'w-5 h-5',
                              },
                          },
                          styleButton: 'p-1',
                      }}/>
                      <span className={`md:${stateMenu.display} hidden`}>Recommended anime</span>
                  </Link>
              </div>
          </div>
      </section>
    );
}
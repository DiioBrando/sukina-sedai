import Link from 'next/link';
import { BorderLine } from '@/shared/BorderLine';
import { Button } from '@/shared/component/Button';
import React from 'react';
import {
  IProfileDropDownButton,
  IProfileDropDownLink,
} from '@/entities/data/dropdown-data/model/IProfileDropDownItems';
import { PersonProfile } from '../../../public/icons/PersonProfile';
import { Setting } from '../../../public/icons/Setting';
import { Privacy } from '../../../public/icons/Privacy';
import { Language } from '../../../public/icons/Language';
import { Theme } from '../../../public/icons/Theme';
import { LogOut } from '../../../public/icons/LogOut';
import { useAppContext } from '@/shared/context/page';

export const ProfileItem = ({
  elementRef,
}: {
  elementRef: React.RefObject<HTMLElement>;
}) => {
  const store = useAppContext();
  const { logout, user } = store((state) => ({
    ...state,
    logout: state.logout,
    user: state.user,
  }));
  const profileDropDownLink: IProfileDropDownLink[] = [
    {
      id: 1,
      name: 'Profile',
      linkTo: `profile/${user.login}`,
      svgComponent: <PersonProfile />,
    },
    {
      id: 2,
      name: 'Setting',
      linkTo: 'setting',
      svgComponent: <Setting />,
    },
    {
      id: 3,
      name: 'Privacy Center',
      linkTo: 'privacy',
      svgComponent: <Privacy />,
    },
  ];
  const profileDropDownButton: IProfileDropDownButton[] = [
    {
      id: 1,
      name: 'Language',
      eventButton: () => {},
      svgComponent: <Language />,
    },
    {
      id: 2,
      name: 'Dark Theme',
      eventButton: () => {},
      svgComponent: <Theme />,
    },
    {
      id: 3,
      name: 'Log Out',
      eventButton: () => logout(),
      svgComponent: <LogOut />,
    },
  ];

  return (
    <nav ref={elementRef} className={'absolute bottom-0 top-14 right-0 z-50'}>
      <ul
        className={
          'p-4 border w-60 max-h-72 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900'
        }
      >
        {profileDropDownLink.map((link) => (
          <li
            key={link.id}
            className={'hover:bg-grayTransparent hover:rounded-lg p-1'}
          >
            <Link
              className={'flex items-center gap-2.5'}
              href={'/' + link.linkTo}
            >
              <span className={'max-w-5 max-h-5'}>{link.svgComponent}</span>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
        <BorderLine />
        {profileDropDownButton.map((button) => (
          <li
            key={button.id}
            className={
              'flex items-center hover:bg-grayTransparent hover:rounded-lg p-1 gap-1.5'
            }
          >
            <Button
              setting={{
                image: {
                  svgComponent: {
                    image: button.svgComponent,
                    style: 'w-5 h-5',
                  },
                },
                text: {
                  value: button.name,
                },
                styleButton:
                  'flex flex-row-reverse items-center gap-1.5 hover:bg-transparent',
                eventButton: button.eventButton,
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

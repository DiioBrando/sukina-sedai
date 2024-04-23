import { PersonProfile } from '../../../../public/icons/PersonProfile';
import { Setting } from '../../../../public/icons/Setting';
import { Privacy } from '../../../../public/icons/Privacy';
import { Language } from '../../../../public/icons/Language';
import {
  IProfileDropDownButton,
  IProfileDropDownLink,
} from '@/entities/data/dropdown-data/model/IProfileDropDownItems';
import { Theme } from '../../../../public/icons/Theme';
import { LogOut } from '../../../../public/icons/LogOut';
import { SignUp } from '../../../../public/icons/SignUp';
import { SignIn } from '../../../../public/icons/SignIn';

export const profileDropDownLink: IProfileDropDownLink[] = [
  {
    id: 1,
    name: 'Profile',
    linkTo: 'profile/1',
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
  {
    id: 4,
    name: 'Sign In',
    linkTo: 'login',
    svgComponent: <SignIn />,
  },
  {
    id: 5,
    name: 'Sign Up',
    linkTo: 'registration',
    svgComponent: <SignUp />,
  },
];

export const profileDropDownButton: IProfileDropDownButton[] = [
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
    eventButton: () => {},
    svgComponent: <LogOut />,
  },
];

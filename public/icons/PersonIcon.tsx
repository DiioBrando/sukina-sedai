import Image from 'next/image';


export const PersonIcon = () => {

    return (
       <Image className={'rounded-full'} width={40} height={40} src={'/avatars/ProfileIcon.png'} alt={''}/>
    )
}
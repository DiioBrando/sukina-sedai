import Image from "next/image";

export const AnimeCard = ({ AnimeObjectArray }) => {
    return (
        <div className={'flex flex-col flex-1 w-full h-full max-h-72 max-w-[250px] gap-1.5'}>
            <div className={'max-h-52'}>
                <Image width={250} height={200} src={''} alt={''}/>
            </div>
            <div className={'max-w-[250px] flex flex-col overflow-hidden gap-1.5'}>
                        <span className={'flex flex-1 text-sm'}>
                        За дело! «Звериная тропа» / Путь зверя / Дорога зверя
                        </span>
                <p className={'text-xs'}>TITLE: Year, Tags(max tag 5)</p>
            </div>
        </div>
    );
}
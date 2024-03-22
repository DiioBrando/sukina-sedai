export const Loader = () => {
    return (
        <span className={'relative w-5 h-5 items-center justify-center flex'}>
            <span className={'border border-1 border-t-black rounded-full animate-wiggleDefault w-5 h-5 absolute'}></span>
            <span className={'border border-1  border-t-black rounded-full animate-wiggleSlow w-3 h-3 absolute'}></span>
        </span>
    );
}
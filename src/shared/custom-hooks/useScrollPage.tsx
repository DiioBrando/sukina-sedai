import { useEffect, MutableRefObject } from 'react';

export const useScrollPage = (ref: MutableRefObject<HTMLDivElement | null>) => {
    const handleScrollEvent = (event: WheelEvent) => {
        if (ref.current) {
            const deltaY = event.deltaY || event.detail;
            ref.current?.scrollBy({ top: deltaY, behavior: 'smooth' });
            event.preventDefault();
        }
    };

    useEffect(() => {
        const element = ref.current;

        if (element) {
            if ('onwheel' in document) {
                element.addEventListener('wheel', handleScrollEvent);
            } else {
                element.addEventListener('DOMMouseScroll', handleScrollEvent as EventListener);
            }

            return () => {
                if ('onwheel' in document) {
                    element.removeEventListener('wheel', handleScrollEvent);
                } else {
                    element.removeEventListener("DOMMouseScroll", handleScrollEvent as EventListener);
                }
            };
        }

        return () => {};
    }, [ref]);
};

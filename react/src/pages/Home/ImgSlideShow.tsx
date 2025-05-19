import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react'

export default function ImgSlideShow() {
    const [count, setCount] = useState<number>(1)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount > 3) {
                    return 1
                } else {
                    return prevCount + 1;
                }
            });
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <AnimatePresence mode='wait'>
            <motion.img
                key={count}
                initial={{ position: 'absolute', left: 1000, opacity: 0, }}
                animate={{ opacity: 1, position: 'relative', left: 0, }}
                exit={{ opacity: 0, left: 1000 }}
                transition={{ duration: 1 }}
                src={`/Cars/${count}.png`}
                className='md:w-[55%] sm:w-[90%] md:mt-16 sm:mt-10 z-20 md:block sm:block hidden'
                alt='Sports Car'
            />
        </AnimatePresence>
    )
}

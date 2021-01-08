export const pageAnim = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.5,
        },
    },
};

export const titleRevealAnim = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export const fadeAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 0.75, transition: { ease: "easeOut", duration: 1 } },
};

export const imageAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75,
        },
    },
};

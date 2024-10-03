"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

export function FeatureCard({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const container: Variants = {
        hidden: { opacity: 0, height: 0 },
        show: {
            opacity: 1,
            height: "auto",
            transition: {
                when: "beforeChildren",
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                when: "afterChildren",
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.article className="flex flex-col py-4">
            <motion.div className="flex gap-4 justify-between items-center text-4xl font-semibold">
                <div>{title}</div>
                <motion.button
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-orange-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    +
                </motion.button>
            </motion.div>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        <motion.div variants={item}>
                            <p className="dark:text-zinc-300">{content}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}

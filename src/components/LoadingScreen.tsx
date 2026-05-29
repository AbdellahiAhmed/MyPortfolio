import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 400);
                    return 100;
                }
                return prev + Math.random() * 12;
            });
        }, 90);

        return () => clearInterval(timer);
    }, [onComplete]);

    const pct = Math.round(Math.min(progress, 100));

    return (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col items-center justify-center px-6 transition-opacity duration-500">
            <div className="w-full max-w-sm">
                <div className="font-serif italic text-2xl text-slate-950 dark:text-white mb-6">
                    Abdellahi Ahmed
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                    <div
                        className="absolute inset-y-0 left-0 bg-slate-900 dark:bg-white transition-[width] duration-200 ease-out"
                        style={{ width: `${pct}%` }}
                    />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    <span>Loading</span>
                    <span>{String(pct).padStart(3, '0')} / 100</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;

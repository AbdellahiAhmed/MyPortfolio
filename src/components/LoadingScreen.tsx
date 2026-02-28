import React, { useEffect, useState } from 'react';
import { Network } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-500">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <Network className="h-16 w-16 text-emerald-600 dark:text-emerald-400 relative z-10 animate-bounce" />
            </div>

            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 ease-out relative"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                >
                    <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                </div>
            </div>

            <div className="mt-4 font-mono text-sm text-slate-500 dark:text-slate-400">
                Loading System... {Math.round(Math.min(progress, 100))}%
            </div>
        </div>
    );
};

export default LoadingScreen;

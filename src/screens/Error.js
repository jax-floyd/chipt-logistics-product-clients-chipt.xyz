import React from 'react';

import Button from '../components/ui/Button';

const Error = () => {
    return (
        <div class="flex flex-1 w-full flex-col items-center justify-center">
            <div class="absolute inset-0 z-0 left-4 flex flex-1 border-l border-dashed border-zinc-400 px-4"></div>
            <div class="absolute inset-0 z-0  top-4 flex flex-1 border-t border-dashed border-zinc-400 px-4"></div>
            <div class="absolute inset-0 z-0 right-4 flex flex-1 border-r border-dashed border-zinc-400 px-4"></div>
            <div class="absolute inset-0 z-0 bottom-4 flex flex-1 border-b border-dashed border-zinc-400 px-4"></div>
            <div class="flex relative z-1 flex-1 flex-col items-center justify-center -space-y-16">
                <p class="text-[11.5rem] text-primary-400 font-bold -tracking-wider">404.</p>
                <div class="flex flex-col items-center justify-center space-y-2">
                    <p class="text-xl text-center text-primary-400">Uh oh. The page your requested doesn't exist.</p>
                    <Button
                        title="Go Home"
                        onClick={() => window.location.href = "/"}
                        theme="dark"
                        simplicity="complex"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Error;
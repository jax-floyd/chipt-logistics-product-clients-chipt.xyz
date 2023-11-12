import React from 'react';

const Footer = () => {

    const sections = [
        { name: 'Privacy Policy', href: '/' },
        { name: 'Notice of Collection', href: '/science' },
        { name: 'Do Not Sell My Data', href: '/science' },
        { name: 'Ad Vendor Policy', href: '/partners' },
        { name: 'Terms of Use', href: '/company' },
        { name: 'Advertise', href: '/contact' },
        { name: 'Help Center', href: '/contact' },  
        { name: 'Sitemap', href: '/sitemap' },     
    ];

    return (
        <div class="flex bg-black relative z-10">
            <div class="absolute inset-0 z-0 left-4 flex flex-1 border-l border-dashed border-white px-4"></div>
            <div class="absolute inset-0 z-0 right-4 flex flex-1 border-r border-dashed border-white px-4"></div>
            <div class="absolute inset-0 z-0 bottom-4 flex flex-1 border-b border-dashed border-white px-4"></div>
            <div class="flex relative z-10 flex-col w-full p-8 space-y-2">
                <div class="flex flex-row items-start justify-start space-x-8">
                    {sections.map((section) => (
                        <a href={section.href} class="font-semibold text-[11px] text-white uppercase tracking-widest">{section.name}</a>
                    ))}       
                </div>
                <div class="flex flex-row items-center justify-between">
                    <p class="text-[11px] text-zinc-400 uppercase tracking-widest font-light">© 2023 Chipt, Inc. All rights reserved.</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;
import React, { useState } from 'react';

import Logo from './ui/Logo';
import CentralEmergenceAnimation from './ui/CentralEmergenceAnimation';
import Button from './ui/Button';

const Header = () => {

  const tags = [
    {
      name: 'Home',
      href: '/',
      subsections: [],
    },
    // {
    //   name: 'The Empty Mile Problem',
    //   href: '/the-empty-mile-problem',
    //   subsections: [],
    // },
    // {
    //   name: 'Marketplace',
    //   href: 'marketplace.chipt.xyz',
    //   subsections: [],
    // }
  ];

  return (
    <div class="relative z-10 p-4 mx-auto w-full flex flex-row items-center justify-start bg-gradient-to-t from-transparent via-transparent to-white">
        <div class="flex flex-1 items-center justify-start p-4">
            <div class="hidden sm:flex flex-1 flex-row items-center justify-start space-x-8">
              {tags && tags.length > 0 && tags.map((tag, index) => {
                  return (
                    <a href={tag.href} class="pb-3 pt-3.5 text-black text-[11px] uppercase font-semibold tracking-widest">{tag.name}</a>
                  );
              })}
            </div>
            <div>
              <Button
                title="Sign up for the early access waitlist"
                onClick={() => window.location.href = '/'}
                theme="light"
                simplicity="complex"
                height="short"
              />
            </div>
        </div>
    </div>
  );
};

export default Header;

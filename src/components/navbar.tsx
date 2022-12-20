import React, { useState } from 'react';
import {useRef} from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  Cross1Icon 
} from '@radix-ui/react-icons';
import Link from 'next/link';



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <DropdownMenu.Root onOpenChange={()=>setIsOpen(!isOpen)}>
      
      <DropdownMenu.Trigger asChild >
        <button className="IconButton" aria-label="Customise options" >
         {isOpen?  <Cross1Icon className='text-slate-300 outline-0' /> : <HamburgerMenuIcon className='text-slate-300 outline-0'/> }
        </button>
      </DropdownMenu.Trigger>

  
        <DropdownMenu.Content className="
        DropdownMenuContent 
        w-screen
        bg-cyan-900 my-4 "

        sideOffset={5}>

        <Link href={'/'} className="block px-4 hover:bg-cyan-800 hover:text-cyan-500 text-slate-300">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2" >           
              Home
          </DropdownMenu.Item>
        </Link>
        <Link href={'/sobre'} className="block px-4 hover:bg-cyan-800 hover:text-cyan-500 text-slate-300">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2">           
              Sobre
          </DropdownMenu.Item>
        </Link>
        <Link href={'/titulos'} className="block px-4 hover:bg-cyan-800 hover:text-cyan-500 text-slate-300">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2">           
              Conquistas
          </DropdownMenu.Item>
        </Link>
        <Link href={'/vivencia'} className="block px-4 hover:bg-cyan-800 hover:text-cyan-500 text-slate-300">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2">           
              Vivência Profissional
          </DropdownMenu.Item>
        </Link>
        <Link href={'/contatos'} className="block px-4 hover:bg-cyan-800 hover:text-cyan-500 text-slate-300">
          <DropdownMenu.Item className="DropdownMenuItem outline-0 py-2">           
              Contatos
          </DropdownMenu.Item>
        </Link>        
          
         </DropdownMenu.Content>
      
    </DropdownMenu.Root>
  );
};

export default NavBar;
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from'react';
import { CameraIcon, MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

import Avatar from './Avatar';
import HeaderOPtions from './HeaderOptions';

function Header() {
    const router= useRouter();
    const searchInputRef = useRef(null);

    const search = (e) =>{
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return ;

        router.push(`/search?term=${term}`);
    }

    return (
        <div>
            <header className='sticky top-0 bg-white'>
                <div className='flex w-full p-6 items-center'>
                    <Image
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        className='cursor-pointer'
                        height={40}
                        width={120}
                        onClick={() => router.push('/')}
                    />
                    
                    <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 
                                        rounded-full shadow-lg max-w-3xl items-center'>
                        <input 
                            className='flex-grow w-full focus:outline-none' 
                            type='text' 
                            defaultValue={router.query.term} 
                            ref={searchInputRef} 
                        />
                        <XIcon className='h-7 sm:mr-3  text-gray-500 cursor-pointer transition
                                            duration-100 transform hover:scale-125'
                                            onClick={()=>(searchInputRef.current.value = "")}
                        />
                        <MicrophoneIcon className='mr-2 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
                        <CameraIcon className='mr-2 h-6 hidden sm:inline-flex text-blue-500 pl-1 border-gray-300 cursor-pointer' />
                        <SearchIcon className='mr-2 h-6 hidden sm:inline-flex text-blue-500 pl-1 border-gray-300 cursor-pointer'/> 
                        <button hidden type='submit' onClick={search}>Search</button>
                    </form>
                    
                    <Avatar className="ml-auto" url="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"/>
    
                </div>
                <HeaderOPtions/>
                
            </header>
        </div>
    )
}



export default Header

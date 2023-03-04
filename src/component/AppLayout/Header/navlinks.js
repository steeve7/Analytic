import React from 'react'
import {links} from './mynavlinks'
const navlinks = () => {
   
  return (
   <>
    {links.map((link)=> (
        <div>
            <div className='px-3 text-left md:cursor-pointer group'>
                <div className='flex items-center'>
                <h1 className='py-7'>{link.name}</h1>
                    <span>{link.icon}</span>
                </div>
                
                {link.submenu && 
                    <div>
                        <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                        <div className='py-3'>
                            <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                        </div>
                            <div className='bg-white p-5 grid grid-cols-2 gap-10 items-center'>
                                {
                                    link.sublinks.map((mysublinks) => (
                                        <div>
                                        <div  className='flex items-center space-x-4'>
                                        {mysublinks.Icon && (
                                            <span className='bg-gray-200 p-3 rounded-md'>{mysublinks.Icon}</span>
                                        )}
                                            <h1 className='text-lg font-semibold text-black'>{mysublinks.Head}</h1>
                                        </div>
                                            {mysublinks.sublink.map(slink=>(
                                                <li className='text-sm text-black my-2.5 ml-14'>
                                                    <a href={slink.link}>{slink.name}</a>
                                                </li>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    ))}
   </>
  )
}

export default navlinks

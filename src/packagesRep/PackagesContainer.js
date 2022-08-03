import React from 'react'
import {BsGithub,BsAt} from 'react-icons/bs'


function PackagesContainer(){
    return (
        <div className='w-full text-gray-500 py-12'>
            {/* HEADER SECTION BEGINS  */}
            <div className='W-full text-center '>
                <p className='w-fit mx-auto p-2 rounded-xl'>
                    <BsGithub  className=' w-12 h-12 '/>
                </p>
                <h1 className=' text-3xl font-bold text-gray-300 py-4'>Get started with GitHub Packages</h1>
                <p className=' text-sm font-medium'>Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>

            </div>

            {/* CATEGORY SECTION START */}

            <div className='my-12'>
                <h2 className='text-xl font-bold text-center pb-6'>Choose a registry</h2>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    <div className=' border-[1px] border-gray-800 rounded-lg p-5 w-fit flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <p className='w-fit text-gray-300  p-2 '>
                                <BsGithub  className=' w-5 h-5 '/>
                            </p>
                            <h3 className='ml-1 text-gray-300 text-lg font-bold'>Docker</h3>
                        </div>
                        <p className='text-xs font-medium'>A software platform used for building applications based on containers — small and lightweight execution environments.</p>

                        <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                            <span>
                                Learn more
                            </span>
                        </p>
                        
                    </div>
                    <div className=' border-[1px] border-gray-800 rounded-lg p-5 w-fit flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <p className='w-fit text-gray-300  p-2 '>
                                <BsGithub  className=' w-5 h-5 '/>
                            </p>
                            <h3 className='ml-1 text-gray-300 text-lg font-bold'>NuGet</h3>
                        </div>
                        <p className='text-xs font-medium'>A software platform used for building applications based on containers — small and lightweight execution environments.</p>

                        <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                            <span>
                                Learn more
                            </span>
                        </p>
                        
                    </div>
                    <div className=' border-[1px] border-gray-800 rounded-lg p-5 w-fit flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <p className='w-fit text-gray-300  p-2 '>
                                <BsGithub  className=' w-5 h-5 '/>
                            </p>
                            <h3 className='ml-1 text-gray-300 text-lg font-bold'>Apache Maven</h3>
                        </div>
                        <p className='text-xs font-medium'>A software platform used for building applications based on containers — small and lightweight execution environments.</p>

                        <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                            <span>
                                Learn more
                            </span>
                        </p>
                        
                    </div>
                    <div className=' border-[1px] border-gray-800 rounded-lg p-5 w-fit flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <p className='w-fit text-gray-300  p-2 '>
                                <BsGithub  className=' w-5 h-5 '/>
                            </p>
                            <h3 className='ml-1 text-gray-300 text-lg font-bold'>Apache Maven</h3>
                        </div>
                        <p className='text-xs font-medium'>A software platform used for building applications based on containers — small and lightweight execution environments.</p>

                        <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                            <span>
                                Learn more
                            </span>
                        </p>
                        
                    </div>
                    <div className=' border-[1px] border-gray-800 rounded-lg p-5 w-fit flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <p className='w-fit text-gray-300  p-2 '>
                                <BsGithub  className=' w-5 h-5 '/>
                            </p>
                            <h3 className='ml-1 text-gray-300 text-lg font-bold'>Apache Maven</h3>
                        </div>
                        <p className='text-xs font-medium'>A software platform used for building applications based on containers — small and lightweight execution environments.</p>

                        <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                            <span>
                                Learn more
                            </span>
                        </p>
                        
                    </div>
                    <div className=' border-[1px] border-gray-800 rounded-lg p-5 w-fit flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <p className='w-fit text-gray-300  p-2 '>
                                <BsGithub  className=' w-5 h-5 '/>
                            </p>
                            <h3 className='ml-1 text-gray-300 text-lg font-bold'>Apache Maven</h3>
                        </div>
                        <p className='text-xs font-medium'>A software platform used for building applications based on containers — small and lightweight execution environments.</p>

                        <p  class="w-fit flex items-center py-1.5 px-4  text-xs font-semibold text-gray-300  bg-gray-800 rounded-lg border border-gray-700 cursor-pointer ">
                            <span>
                                Learn more
                            </span>
                        </p>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}


export default PackagesContainer;
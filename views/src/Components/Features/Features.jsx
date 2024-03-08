import React from 'react'
import Feature1 from '../../assets/Feature1.svg'
import Feature2 from '../../assets/Feature2.svg'
import Feature3 from '../../assets/Feature3.svg'
import Feature4 from '../../assets/Feature4.svg'
import { motion } from "framer-motion"

const Features = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-evenly md:gap-11 md:h-[70vh] h-[180vh] border border-black'>
                <div className='feature1 flex justify-center flex-col'>
                    <div className='img-div flex flex-row items-center justify-center'>
                        <motion.div
                            whileHover={{ scale: 1, rotate: 90, transition: { duration: 10 } }}
                            animate={{
                            
                                scale: 1,
                                rotate: 360,
                                
                            }}
                            >
                            < svg xmlns="http://www.w3.org/2000/svg" className='' width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" > <g clip-path="url(#clip0_103_15)"><path fill="rgba(238, 153, 194, 1)" d="M93.68 5.155a10 10 0 0 1 12.64 0l7.933 6.47a10.002 10.002 0 0 0 8.93 1.904l9.856-2.664a10 10 0 0 1 11.533 5.14l4.657 9.21a10 10 0 0 0 7.359 5.364l10.129 1.605a10 10 0 0 1 8.422 9.364l.533 10.39a10 10 0 0 0 4.527 7.865l8.666 5.649a10 10 0 0 1 3.878 11.951l-3.728 9.743a10 10 0 0 0 .943 9.007l5.66 8.746a10 10 0 0 1-1.312 12.49l-7.33 7.359a9.998 9.998 0 0 0-2.792 8.621l1.631 10.299a10.003 10.003 0 0 1-6.284 10.896l-9.61 3.7a10.001 10.001 0 0 0-6.072 6.765l-2.661 10.018a10 10 0 0 1-10.199 7.419l-10.209-.546a10 10 0 0 0-8.328 3.719l-6.438 8.008a10 10 0 0 1-12.361 2.63l-9.086-4.665a10.004 10.004 0 0 0-9.134 0l-9.087 4.665a9.999 9.999 0 0 1-12.36-2.63l-6.438-8.008a10 10 0 0 0-8.328-3.719l-10.209.546a10 10 0 0 1-10.2-7.419l-2.66-10.018a10 10 0 0 0-6.072-6.765l-9.61-3.7a10 10 0 0 1-6.284-10.896l1.631-10.299a10 10 0 0 0-2.792-8.621l-7.33-7.359a10 10 0 0 1-1.312-12.49l5.66-8.746a10 10 0 0 0 .943-9.007l-3.728-9.743a10 10 0 0 1 3.878-11.951l8.666-5.649a10 10 0 0 0 4.527-7.865l.533-10.39a10 10 0 0 1 8.422-9.364l10.129-1.605a10 10 0 0 0 7.359-5.364l4.657-9.21a10 10 0 0 1 11.533-5.14l9.856 2.664a10 10 0 0 0 8.93-1.904l7.933-6.47Z"></path></g></svg>
                        </motion.div>

                        <img src={Feature1} alt="" className=' absolute size-32' />
                    </div>
                    <div className='txt-div justify-center flex items-center'>
                        <p className='text-xl mt-3'>Recharge Yourself</p>
                    </div>
                </div>

                <div className='feature2 flex justify-center flex-col'>
                    <div className='img-div flex flex-row items-center justify-center'>
                        <motion.div
                           whileHover={{ scale: 1, rotate: 90, transition: { duration: 10 } }}
                           animate={{
                           
                               scale: 1,
                               rotate: 360,
                               
                           }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g clip-path="url(#clip0_103_15)"><path fill="rgba(255, 227, 202, 1)" d="M93.68 5.155a10 10 0 0 1 12.64 0l7.933 6.47a10.002 10.002 0 0 0 8.93 1.904l9.856-2.664a10 10 0 0 1 11.533 5.14l4.657 9.21a10 10 0 0 0 7.359 5.364l10.129 1.605a10 10 0 0 1 8.422 9.364l.533 10.39a10 10 0 0 0 4.527 7.865l8.666 5.649a10 10 0 0 1 3.878 11.951l-3.728 9.743a10 10 0 0 0 .943 9.007l5.66 8.746a10 10 0 0 1-1.312 12.49l-7.33 7.359a9.998 9.998 0 0 0-2.792 8.621l1.631 10.299a10.003 10.003 0 0 1-6.284 10.896l-9.61 3.7a10.001 10.001 0 0 0-6.072 6.765l-2.661 10.018a10 10 0 0 1-10.199 7.419l-10.209-.546a10 10 0 0 0-8.328 3.719l-6.438 8.008a10 10 0 0 1-12.361 2.63l-9.086-4.665a10.004 10.004 0 0 0-9.134 0l-9.087 4.665a9.999 9.999 0 0 1-12.36-2.63l-6.438-8.008a10 10 0 0 0-8.328-3.719l-10.209.546a10 10 0 0 1-10.2-7.419l-2.66-10.018a10 10 0 0 0-6.072-6.765l-9.61-3.7a10 10 0 0 1-6.284-10.896l1.631-10.299a10 10 0 0 0-2.792-8.621l-7.33-7.359a10 10 0 0 1-1.312-12.49l5.66-8.746a10 10 0 0 0 .943-9.007l-3.728-9.743a10 10 0 0 1 3.878-11.951l8.666-5.649a10 10 0 0 0 4.527-7.865l.533-10.39a10 10 0 0 1 8.422-9.364l10.129-1.605a10 10 0 0 0 7.359-5.364l4.657-9.21a10 10 0 0 1 11.533-5.14l9.856 2.664a10 10 0 0 0 8.93-1.904l7.933-6.47Z"></path></g></svg>
                        </motion.div>
                        <img src={Feature2} alt="" className=' absolute size-32' />
                    </div>
                    <div className='txt-div justify-center flex items-center'>
                        <p className='text-xl mt-3'>Hand Picked Coffee Beans</p>
                    </div>
                </div>

                <div className='feature3 flex justify-center flex-col'>
                    <div className='img-div flex flex-row items-center justify-center'>
                        <motion.div
                            whileHover={{ scale: 1, rotate: 90, transition: { duration: 10 } }}
                            animate={{
                            
                                scale: 1,
                                rotate: 360,
                                
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g clip-path="url(#clip0_103_15)"><path fill="rgba(129, 104, 157, 1)" d="M93.68 5.155a10 10 0 0 1 12.64 0l7.933 6.47a10.002 10.002 0 0 0 8.93 1.904l9.856-2.664a10 10 0 0 1 11.533 5.14l4.657 9.21a10 10 0 0 0 7.359 5.364l10.129 1.605a10 10 0 0 1 8.422 9.364l.533 10.39a10 10 0 0 0 4.527 7.865l8.666 5.649a10 10 0 0 1 3.878 11.951l-3.728 9.743a10 10 0 0 0 .943 9.007l5.66 8.746a10 10 0 0 1-1.312 12.49l-7.33 7.359a9.998 9.998 0 0 0-2.792 8.621l1.631 10.299a10.003 10.003 0 0 1-6.284 10.896l-9.61 3.7a10.001 10.001 0 0 0-6.072 6.765l-2.661 10.018a10 10 0 0 1-10.199 7.419l-10.209-.546a10 10 0 0 0-8.328 3.719l-6.438 8.008a10 10 0 0 1-12.361 2.63l-9.086-4.665a10.004 10.004 0 0 0-9.134 0l-9.087 4.665a9.999 9.999 0 0 1-12.36-2.63l-6.438-8.008a10 10 0 0 0-8.328-3.719l-10.209.546a10 10 0 0 1-10.2-7.419l-2.66-10.018a10 10 0 0 0-6.072-6.765l-9.61-3.7a10 10 0 0 1-6.284-10.896l1.631-10.299a10 10 0 0 0-2.792-8.621l-7.33-7.359a10 10 0 0 1-1.312-12.49l5.66-8.746a10 10 0 0 0 .943-9.007l-3.728-9.743a10 10 0 0 1 3.878-11.951l8.666-5.649a10 10 0 0 0 4.527-7.865l.533-10.39a10 10 0 0 1 8.422-9.364l10.129-1.605a10 10 0 0 0 7.359-5.364l4.657-9.21a10 10 0 0 1 11.533-5.14l9.856 2.664a10 10 0 0 0 8.93-1.904l7.933-6.47Z"></path></g></svg>

                        </motion.div>
                        <img src={Feature3} alt="" className=' absolute size-32' />
                    </div>
                    <div className='txt-div justify-center flex items-center'>
                        <p className='text-xl mt-3'>Brewing is the key</p>
                    </div>
                </div>

                <div className='feature4 flex justify-center flex-col'>
                    <div className='img-div flex flex-row items-center justify-center'>
                        <motion.div
                            whileHover={{ scale: 1, rotate: 90, transition: { duration: 10 } }}
                            animate={{
                            
                                scale: 1,
                                rotate: 360,
                                
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g clip-path="url(#clip0_103_15)"><path fill="rgba(80, 196, 237, 1)" d="M93.68 5.155a10 10 0 0 1 12.64 0l7.933 6.47a10.002 10.002 0 0 0 8.93 1.904l9.856-2.664a10 10 0 0 1 11.533 5.14l4.657 9.21a10 10 0 0 0 7.359 5.364l10.129 1.605a10 10 0 0 1 8.422 9.364l.533 10.39a10 10 0 0 0 4.527 7.865l8.666 5.649a10 10 0 0 1 3.878 11.951l-3.728 9.743a10 10 0 0 0 .943 9.007l5.66 8.746a10 10 0 0 1-1.312 12.49l-7.33 7.359a9.998 9.998 0 0 0-2.792 8.621l1.631 10.299a10.003 10.003 0 0 1-6.284 10.896l-9.61 3.7a10.001 10.001 0 0 0-6.072 6.765l-2.661 10.018a10 10 0 0 1-10.199 7.419l-10.209-.546a10 10 0 0 0-8.328 3.719l-6.438 8.008a10 10 0 0 1-12.361 2.63l-9.086-4.665a10.004 10.004 0 0 0-9.134 0l-9.087 4.665a9.999 9.999 0 0 1-12.36-2.63l-6.438-8.008a10 10 0 0 0-8.328-3.719l-10.209.546a10 10 0 0 1-10.2-7.419l-2.66-10.018a10 10 0 0 0-6.072-6.765l-9.61-3.7a10 10 0 0 1-6.284-10.896l1.631-10.299a10 10 0 0 0-2.792-8.621l-7.33-7.359a10 10 0 0 1-1.312-12.49l5.66-8.746a10 10 0 0 0 .943-9.007l-3.728-9.743a10 10 0 0 1 3.878-11.951l8.666-5.649a10 10 0 0 0 4.527-7.865l.533-10.39a10 10 0 0 1 8.422-9.364l10.129-1.605a10 10 0 0 0 7.359-5.364l4.657-9.21a10 10 0 0 1 11.533-5.14l9.856 2.664a10 10 0 0 0 8.93-1.904l7.933-6.47Z"></path></g></svg>
                        </motion.div>
                        <img src={Feature4} alt="" className=' absolute size-32' />
                    </div>
                    <div className='txt-div justify-center flex items-center'>
                        <p className='text-xl mt-3'>Talk with our coffee</p>
                    </div>
                </div>

            </div>



        </div >





    )
}

export default Features
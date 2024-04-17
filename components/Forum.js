/* eslint-disable */
import React from 'react'
import { TitleText } from './CustomTexts';

const Forum = () => {
    return (
        <>
            <Desktop />
            <Mobile />
        </>
    )
}

const Desktop = () => {
    return (
        <div className="items-center w-full hidden lg:flex flex-col pt-20">
            <TitleText
                title={<>Open Forum<br className="hidden md:block" /> </>}
                textStyles="text-center"
            />
            <div className='flex pt-10 gap-10'>
                <div className='flex flex-col'>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/binduu.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Prof. Damodaran V K
                        <br />
                        <span className='text-xl'>Director,</span><span className='text-xl'>Team Sustain Pvt Ltd.</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/rahul.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Rizwan Ramzan
                        <br />
                        <span className='text-xl'>CEO, Haris&Co. Academy </span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/images/vishwa.png" alt="ananya" />

                </div>

                <div className="inline-block h-[1500px] min-h-[1em] w-0.5 self-stretch bg-white/10"></div>


                <div className='flex flex-col'>
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Dr. Bindhu Krishnan
                        <br />
                        <span className='text-xl'>Senior Statistician, </span><span className='text-xl'> Data & AI, IBM India Software Labs</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/damo.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Dr. Rahul Satheesh
                        <br />
                        <span className='text-xl'>Assistant Professor</span><span className='text-xl'>Amrita Vishwa Vidyapeetham, Coimbatore</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/Untitled-1.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Vishwanath M P
                        <br />
                        <span className='text-xl'>Marketing Professional, </span><span className='text-xl'>RevOps Manager</span>
                    </p>
                </div>
            </div>
        </div >
    )
}

const Mobile = () => {
    return (
        <div className="items-center w-full lg:hidden flex flex-col pt-20">
            <TitleText
                title={<>Open Forum<br className="hidden md:block" /> </>}
                textStyles="text-center"
            />
            <div className='flex pt-10 gap-2'>
                <div className='flex flex-col'>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/binduu.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Prof. Damodaran V K
                        <br />
                        <span className='text-xl'>Director,</span><span className='text-xl'>Team Sustain Pvt Ltd.</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/rahul.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Rizwan Ramzan
                        <br />
                        <span className='text-xl'>CEO, Haris&Co. Academy </span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/images/vishwa.png" alt="ananya" />

                </div>

                <div className="inline-block h-[1250px] min-h-[1em] w-0.5 self-stretch bg-white/10"></div>


                <div className='flex flex-col'>
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Dr. Bindhu Krishnan
                        <br />
                        <span className='text-xl'>Senior Statistician, </span><span className='text-xl'> Data & AI, IBM India Software Labs</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/damo.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Dr. Rahul Satheesh
                        <br />
                        <span className='text-xl'>Assistant Professor</span><span className='text-xl'>Amrita Vishwa Vidyapeetham, Coimbatore</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/forum/Untitled-1.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Vishwanath M P
                        <br />
                        <span className='text-xl'>Marketing Professional, </span><span className='text-xl'>RevOps Manager</span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Forum;
/* eslint-disable */
import React from 'react'
import { TitleText } from './CustomTexts';

const Speakers = () => {
    return (
        <div className="items-center w-full flex flex-col">
            <TitleText
                title={<>Panel Discussion<br className="hidden md:block" /> </>}
                textStyles="text-center"
            />
            <div className='flex pt-10 gap-10'>
                <div className='flex flex-col'>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/images/ananya.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Umer Abdussalam
                        <br />
                        <span className='text-xl'>CEO, Edapt </span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/images/paulose.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Vishwanath M.P
                        <br />
                        <span className='text-xl'>Marketing Professional, </span><span className='text-xl'>RevOps Manager</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/images/ashuthosh.png" alt="ashuthosh" />

                </div>

                <div className="inline-block h-[1500px] min-h-[1em] w-0.5 self-stretch bg-white/10"></div>

                <div className='flex flex-col'>
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Ananya R
                        <br />
                        <span className='text-xl'>Global Community Manager, </span><span className='text-xl'> She Loves Tech</span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/images/umer abdussalam-1.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Paulose Thomas
                        <br />
                        <span className='text-xl'>Founder of SPT online classes </span>
                    </p>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl' src="/images/vishwa.png" alt="ananya" />
                    <p className='text-4xl h-[300px] flex justify-center flex-col text-white'>Ashuthosh Sarkar
                        <br />
                        <span className='text-xl'>Professor & Executive Director,</span><span className='text-xl'>IIMK LIVE</span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Speakers;
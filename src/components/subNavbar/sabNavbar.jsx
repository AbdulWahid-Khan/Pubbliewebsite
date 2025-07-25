import react from 'react';

import SubNavRight from '../shared/subNavRight';
const SabNavbar = () => {
    return (
        <>
            <div className="main flex justify-between items-center px-6 py-[14px] ">
                <div className="lefttext ">
                    <p className='font-inter text-[20px] font-bold leading-[20px]'>Home</p>
                </div>
                <SubNavRight />
            </div>

        </>
    )
}

export default SabNavbar;
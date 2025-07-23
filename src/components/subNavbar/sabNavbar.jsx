import react from 'react';

import SubNavRight from '../shared/subNavRight';
import { useLocation } from 'react-router-dom';
const SabNavbar = () => {
    const pathname = useLocation().pathname;
    console.log(pathname)
    return (
        <>
            <div className="main flex justify-between items-center px-6 py-[14px] ">
                <div className="lefttext ">

                    {pathname == '/' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Home</p> : pathname == '/compaigns' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Compaign</p> :
                     pathname == '/wallet' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>My Wallet</p> : 
                     pathname == '/shipments' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Shipments</p>:
                        pathname == '/profile' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Profile</p> :
                        pathname == '/settings' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Settings</p> :
                     null}
                </div>
                <SubNavRight />
            </div>

        </>
    )
}

export default SabNavbar;
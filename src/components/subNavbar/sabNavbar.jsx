import react, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import SubNavRight from '../shared/subNavRight';
import { useLocation } from 'react-router-dom';




const SabNavbar = ({aside , setsidebar}) => {
      const [icon, setIcon] = useState()
    const pathname = useLocation().pathname;
    console.log(pathname)
    return (
        <>
            <div className="main flex items-center sm:justify-between p-1 sm:py-[14px] max-w-[1700px] w-full sm:px-3 ">
                <div className="sm:hidden pr-3  items-center ">
                      <button
                        onClick={() => {
                          setIcon(icon === "menu" ? "cross" : "menu");
                          setsidebar(!aside);
                        }}
                        className="text-xl   items-center justify-center"
                      >
                        {icon === "menu" ? <RxCross1  />   : <IoIosMenu />}
                      </button>
                    </div>
                <div className="lefttext max-w-[900px] w-full  ">

                    {pathname == '/' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Home</p> :pathname == '/home' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Home</p> : pathname == '/compaigns' ? <p className='font-inter text-[20px] font-bold leading-[20px]'>Compaign</p> :
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
import React from 'react'
import NitroCircuspage from '../NitroCircus/NitroCircuspage'
import CampaignNav from '../campaignnav/campaignnav'
import CommisionDetails from '../commisiondetails/commisionDetails'

const AffilationPost = () => {
    return (
        <>
            <CampaignNav />
            <div className="main flex items-start px-5 pt-20 pb-10 max-w-[1920px] w-full bg-[rgba(241,241,241,1)]">

                <div className='flex flex-col lg:flex-row  items-start justify-center break-all max-w-[1920px] w-full gap-5 mx-auto  '>
            <div><NitroCircuspage /></div>
                        
                   
                    <div className='max-w-[500px] w-full bg-white '>
                        <CommisionDetails />
                    </div>
                </div>


            </div>



        </>
    )
}

export default AffilationPost

import { Table } from 'antd';
import React from 'react'

const CommisionDetails = () => {
    const dataSource = [
  {
    key: '1',
    product: 'Product',
    date: 'December 29, 2024',
    amount: <p className="font-inter font-medium text-sm text-green-700">$500.00</p>
  },
  {
    key: '2',
   product: 'Product',
    date: 'December 29, 2024',
    amount: <p className="font-inter font-medium text-sm text-green-700">$500.00</p>
  },
  {
    key: '3',
    product: 'Product',
    date: 'December 29, 2024',
    amount: <p className="font-inter font-medium text-sm text-green-700">$500.00</p>
  },
  {
    key: '4',
    product: 'Product',
    date: 'December 29, 2024',
    amount: <p className="font-inter font-medium text-sm text-green-700">$500.00</p>
  }
    ,
    {
        key: '5',
        product: 'Product',
        date: 'December 29, 2024',
        amount: <p className="font-inter font-medium text-sm text-green-700">$500.00</p>
    },
];

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

  return (
    <>
      <div>
        <div className='p-2.5 '>
<h1 className="text-base font-inter  font-bold  my-8">Commission Details</h1>
        
        <div className='flex gap-2.5 '>
            <div className='flex flex-col items-start justify-between max-w-[231px] w-full px-4 py-3.5 border-[1px] border-[rgba(241,241,241,1)] rounded-[8px]'>
                <p className='font-inter font-medium text-lightgrey'>Commision Rate / sale</p>
                <p className='font-inter font-bold text-[26px] '>$ 5.00</p>
            </div>
            <div className='flex flex-col items-start justify-between max-w-[231px] w-full px-4 py-3.5 border-[1px] border-[rgba(241,241,241,1)] rounded-[8px]'>
                <p className='font-inter font-medium text-lightgrey'>Commision Rate / sale</p>
                <p className='font-inter font-bold text-[26px] '>$ 5.00</p>
            </div>
        </div>
        <p className='font-inter font-medium text-base mt-13'>Recent Referrals </p>
        </div>
        <div className='table max-w-[600px] w-full '><Table dataSource={dataSource} columns={columns} pagination={false} /></div>


      
      </div>
    </>
  )
}

export default CommisionDetails

import { Input, Modal } from 'antd'
import React, { useState } from 'react'
import { API } from '../../../../Api';

export default function FindValueDialog({ open, setOpen, data, getData }) {
    const [prevalue, setPrevalue] = useState('')
    const handleCancel = () => {
        setOpen(false);
        setPrevalue('');
    };

    const handleOK = async () => {
        try {
            if (prevalue != '') {
                await API({
                    method: 'POST',
                    url: "AuctionRequest/update-final-status",
                    data: {
                        requestId: data?.requestId,
                        finalValue: prevalue,
                        status: 3,
                        userId: data?.seller?.userId
                    }
                })
                getData();
                handleCancel();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal title="Jewelry" open={open} onOk={handleOK} onCancel={handleCancel}>
            <div className='w-full'>
                <div className='flex items-center '>
                    <label className='pr-2 flex'>Final value: <span className='text-red-600'>*</span></label>
                    <Input className='w-[70%]' type='number' onChange={(e) => setPrevalue(e.target.value)} />
                </div>
            </div>
        </Modal>
    )
}

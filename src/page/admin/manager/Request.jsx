import { CheckOutlined, CloseOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { API } from '../../../Api';
import DetailData from './components/DetailData';
import FindValueDialog from './components/FindValueDialog';

export default function Request() {
    const [dataJewelry, setDataJewelry] = useState([])
    const [open, setOpen] = useState(false)
    const [dataDetail, setDataDetail] = useState()
    const [showPrevalueDialog, setShowPrevalueDialog] = useState(false)
    const [dataJewelryPrevalue, setDataJewelryPrevalue] = useState()
    const getData = async () => {
        try {
            const res = await API({
                method: 'GET',
                url: `AuctionRequest/get-auction-request-by-status/1`,
            })
            if (res.data.data) {
                setDataJewelry(res.data.data)
            }
        } catch (error) { console.log(error) }
    }

    useEffect(() => {
        getData()
    }, [])
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => <img src={text} alt="Jewelry Image" style={{ width: 50, height: 50 }} />,
        },
        {
            title: 'Jewelry Brand',
            dataIndex: 'jewelryBrand',
            key: 'jewelryBrand',
        },
        {
            title: 'Jewelry ID',
            dataIndex: 'jewelryId',
            key: 'jewelryId',
        },
        {
            title: 'Jewelry Name',
            dataIndex: 'jewelryName',
            key: 'jewelryName',
        },
        {
            title: 'Jewelry Code',
            dataIndex: 'jewelryCode',
            key: 'jewelryCode',
        },
        {
            title: 'Material Color',
            dataIndex: 'materialColor',
            key: 'materialColor',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div>
                    <button className='text-xl mx-2' onClick={() => handleShowDetail(record)}>
                        <SnippetsOutlined />
                    </button>
                    <button className='text-xl mx-2' /* onClick={() => handleCancel(record)} */>
                        <CloseOutlined />
                    </button>
                    <button className='text-xl mx-2' onClick={() => handleOk(record)}>
                        <CheckOutlined />
                    </button>
                </div>
            ),
        },
    ];

    const handleShowDetail = (record) => {
        const data = dataJewelry.find(item => item.jewelryId === record.jewelryId)
        const detailData = { ...record, prevalue: data.prevalue }
        setOpen(true);
        setDataDetail(detailData);
    }

    const handleOk = async (record) => {
        const data = dataJewelry.find(item => item.jewelryId === record.jewelryId)
        setShowPrevalueDialog(true)
        setDataJewelryPrevalue(data)
    }

    return (
        <div className='w-[1200px] h-full mx-auto'>
            <Table columns={columns} dataSource={dataJewelry.map(item => {
                return item.jewelry
            })} pagination={{ pageSize: 6 }} />
            <DetailData open={open} setOpen={setOpen} data={dataDetail} />
            <FindValueDialog open={showPrevalueDialog} setOpen={setShowPrevalueDialog} data={dataJewelryPrevalue} getData={getData} />
        </div>
    )
}

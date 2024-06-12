import { Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { API } from '../../../Api';
import { CheckOutlined, CloseOutlined, SnippetsOutlined } from '@ant-design/icons';
import DetailData from './components/DetailData';


const Requirements = () => {
    const [dataJewelry, setDataJewelry] = useState([])
    const [open, setOpen] = useState(false)
    const [dataDetail, setDataDetail] = useState()

    const getData = async () => {
        try {
            const res = await API({
                method: 'get',
                url: `Auction/get-all-request-auction`,
            })
            if (res.data.data) {
                setDataJewelry(res.data.data.map(item => {
                    return item.jewelry
                }))
            }
        } catch (error) { console.log(error) }
    }
    useEffect(() => {
        getData()
    }, [])

    const handleShowDetail = (record) => {
        setOpen(true);
        setDataDetail(record);
    }

    const handleCancel = (record) => {

    }

    const handleOk = (record) => {

    }

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => <img src={'https://www.fortunaauction.com/wp-content/uploads/2018/05/Art-Deco-Cartier-Emerald-Bracelet-1024x683.jpg'} alt="Jewelry Image" style={{ width: 50, height: 50 }} />,
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
                    <button className='text-xl mx-2' onClick={() => handleCancel(record)}>
                        <CloseOutlined />
                    </button>
                    <button className='text-xl mx-2' onClick={() => handleOk(record)}>
                        <CheckOutlined />
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div className='w-[1200px] h-full mx-auto'>
            <Table columns={columns} dataSource={dataJewelry} pagination={{ pageSize: 6 }} />
            <DetailData open={open} setOpen={setOpen} data={dataDetail} />
        </div>
    )
}
export default Requirements;
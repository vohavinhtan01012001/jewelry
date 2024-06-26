import { useEffect, useState } from "react";
import CreateProductDialog from "./components/CreateProductDialog";
import { Table } from "antd";
import { CheckOutlined, CloseOutlined, SnippetsOutlined } from "@ant-design/icons";
import { API } from "../../Api";
import DetailData from "./components/DetailData";

export default function Selling() {
    const [open, setOpen] = useState(false);
    const [dataJewelry, setDataJewelry] = useState([])
    const [dataDetail, setDataDetail] = useState()
    const [openDetail, setOpenDetail] = useState(false)
    const getData = async () => {
        try {
            const res = await API({
                method: 'GET',
                url: `AuctionRequest/get-auction-request-by-status/3`,
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
        const detailData = { ...record, finalValue: data.finalValue }
        setOpenDetail(true);
        setDataDetail(detailData);
    }

    const handleOk = async (record) => {
        try {
            const data = dataJewelry.find(item => item.jewelryId === record.jewelryId)
            await API({
                method: 'POST',
                url: `AuctionRequest/approved?requestId=${data.requestId}`,
            })
            getData();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-full text-center">
            <button onClick={() => setOpen(true)} className="border px-2 py-2 rounded bg-red-500 text-white mb-[20px]">Request A Valuation</button>

            <div className="w-[1200px] mx-auto">
                <Table columns={columns} dataSource={dataJewelry.map(item => {
                    return item.jewelry
                })} pagination={{ pageSize: 6 }} />
            </div>
            <DetailData open={openDetail} setOpen={setOpenDetail} data={dataDetail} />
            <CreateProductDialog
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}

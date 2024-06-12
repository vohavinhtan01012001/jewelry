import { Input, Modal, Select } from 'antd';
import { useState } from 'react';
import { API } from '../../../Api';

const CreateProductDialog = ({ open, setOpen }) => {
    const [form, setForm] = useState()
    const [categoryId, setCategoryId] = useState()

    const handleOk = async () => {
        const data = { ...form, categoryId: categoryId, jewelryId: 1 }
        try {
            await API({
                method: 'post',
                url: `Auction/request-auction`,
                data: {
                    userId: JSON.parse(localStorage.getItem('user')).userId,
                    jewelry: {
                        ...data
                    }
                },
                // headers: { 'Content-Type': 'multipart/form-data' }
            })
            handleCancel();
        } catch (error) {
            console.log(error)
        }
    }

    // const onChangeFile = (e) => {
    //     if (e.target.files) {
    //         setImage(e.target.files[0])
    //     }
    // }


    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    const handleCancel = () => {
        setForm(undefined)
        setOpen(false);
    }
    return (
        <>
            <Modal title="Create Product" width={1000} open={open} onOk={handleOk} onCancel={handleCancel}>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <label>jewelryName</label>
                        <Input name="jewelryName" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>jewelryBrand</label>
                        <Input name="jewelryBrand" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>extraMaterialCost</label>
                        <Input name="extraMaterialCost" onChange={onChangeForm} type="number" />
                    </div>
                    <div>
                        <label>extraGemCost</label>
                        <Input name="extraGemCost" onChange={onChangeForm} type="number" />
                    </div>
                    <div>
                        <label>productionCost</label>
                        <Input name="productionCost" onChange={onChangeForm} type="number" />
                    </div>
                    <div>
                        <label>auctionEstimate</label>
                        <Input name="auctionEstimate" onChange={onChangeForm} type="number" />
                    </div>
                    <div>
                        <label>weight</label>
                        <Input name="weight" onChange={onChangeForm} type='number' />
                    </div>
                    <div>
                        <label>description</label>
                        <Input name="description" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>gemName</label>
                        <Input name="gemName" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>gemMaterial</label>
                        <Input name="gemMaterial" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>gemCut</label>
                        <Input name="gemCut" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>gemColor</label>
                        <Input name="gemColor" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>gemClarity</label>
                        <Input name="gemClarity" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>gemCarat</label>
                        <Input name="gemCarat" onChange={onChangeForm} type="number" />
                    </div>
                    <div>
                        <label>materialName</label>
                        <Input name="materialName" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>materialColor</label>
                        <Input name="materialColor" onChange={onChangeForm} />
                    </div>
                    <div>
                        <label>jewelryCategory</label>
                        <Input name="jewelryCategory" onChange={onChangeForm} />
                    </div>
                    <div className='block'>
                        <label className='block'>categoryId</label>
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            onChange={(value) => setCategoryId(value)}
                            options={[
                                { value: 1, label: 'Jack' },
                                { value: 2, label: 'Lucy' },
                                { value: 3, label: 'yiminghe' },
                            ]}
                        />
                    </div>
                    {/* <div>
                        <input type='file' onChange={onChangeFile} />
                    </div> */}
                    <div>
                        <label>image</label>
                        <Input name="image" onChange={onChangeForm} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CreateProductDialog;
import React, { useState } from 'react';
import { Button, Modal, Table } from 'antd';

const DetailData = ({ open, setOpen, data }) => {

    const handleCancel = () => {
        setOpen(false);
    };



    return (
        <>
            <Modal title="Detail Jewelry" open={open} footer={null} onCancel={handleCancel}>
                <div className='grid grid-cols-2 gap-6 py-2'>
                    <div>
                        <label>Jewelry Name: </label>
                        <span>{data?.jewelryName}</span>
                    </div>
                    <div>
                        <label>Jewelry Brand: </label>
                        <span>{data?.jewelryBrand}</span>
                    </div>
                    <div>
                        <label>Extra Material Cost: </label>
                        <span>{data?.extraMaterialCost}</span>
                    </div>
                    <div>
                        <label>Extra Gem Cost: </label>
                        <span>{data?.extraGemCost}</span>
                    </div>
                    <div>
                        <label>Production Cost: </label>
                        <span>{data?.productionCost}</span>
                    </div>
                    <div>
                        <label>Auction Estimate: </label>
                        <span>{data?.auctionEstimate}</span>
                    </div>
                    <div>
                        <label>Weight: </label>
                        <span>{data?.weight}</span>
                    </div>
                    <div>
                        <label>Description: </label>
                        <span>{data?.description}</span>
                    </div>
                    <div>
                        <label>Gem Name: </label>
                        <span>{data?.gemName}</span>
                    </div>
                    <div>
                        <label>Gem Material: </label>
                        <span>{data?.gemMaterial}</span>
                    </div>
                    <div>
                        <label>Gem Cut: </label>
                        <span>{data?.gemCut}</span>
                    </div>
                    <div>
                        <label>Gem Color: </label>
                        <span>{data?.gemColor}</span>
                    </div>
                    <div>
                        <label>Gem Clarity: </label>
                        <span>{data?.gemClarity}</span>
                    </div>
                    <div>
                        <label>Gem Carat: </label>
                        <span>{data?.gemCarat}</span>
                    </div>
                    <div>
                        <label>Material Name: </label>
                        <span>{data?.materialName}</span>
                    </div>
                    <div>
                        <label>Material Color: </label>
                        <span>{data?.materialColor}</span>
                    </div>
                    <div>
                        <label>Jewelry Category: </label>
                        <span>{data?.jewelryCategory}</span>
                    </div>
                    <div>
                        <label>Category ID: </label>
                        <span>{data?.categoryId}</span>
                    </div>
                    <div>
                        <label>Jewelry Code: </label>
                        <span>{data?.jewelryCode}</span>
                    </div>
                    <div>
                        <label>Jewelry ID: </label>
                        <span>{data?.jewelryId}</span>
                    </div>
                    <div className='font-semibold'>
                        <label>final Value: </label>
                        <span>{data?.finalValue}</span>
                    </div>
                    <div>
                        <label>Image: </label>
                        <img src={data?.image} alt="Jewelry" style={{ width: 100, height: 100 }} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DetailData;
"use client"

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Cardpsick() {
    const items = [
        { id: 1, name: '騎乘電動汽車', origin: 0, carbon: 0, select: false, note: '每週行駛電動汽車', max: 300, min: 0, unit: '公里' },
        { id: 2, name: '騎乘電動機車', origin: 0, carbon: 0, select: false, note: '每週行駛電動機車', max: 300, min: 0, unit: '公里' },
        { id: 3, name: '騎乘自行車', origin: 0, carbon: 0, select: false, note: '每週騎行自行車', max: 300, min: 0, unit: '公里' },
        { id: 4, name: '自備環保餐具', origin: 0, carbon: 0, select: false, note: '每週使用自備環保餐具', max: 30, min: 0, unit: '餐' },
        { id: 5, name: '食用蔬食餐盒', origin: 0, carbon: 0, select: false, note: '每週食用蔬食餐盒', max: 30, min: 0, unit: '餐' },
        { id: 6, name: '拿鐵中的鮮奶換成燕麥奶', origin: 0, carbon: 0, select: false, note: '每週換幾杯燕麥拿鐵', max: 30, min: 0, unit: '杯' },
        { id: 7, name: '牛肉換豬肉', origin: 0, carbon: 0, select: false, note: '牛肉換豬肉', max: 30, min: 0, unit: '餐' },
        { id: 8, name: '搭乘大眾運輸', origin: 0, carbon: 0, select: false, note: '每週搭乘大眾運輸', max: 300, min: 0, unit: '公里' },
        { id: 9, name: '台鐵換高鐵', origin: 0, carbon: 0, select: false, note: '台鐵換高鐵', max: 300, min: 0, unit: '公里/月' },
        { id: 10, name: '客運換高鐵', origin: 0, carbon: 0, select: false, note: '客運換高鐵', max: 300, min: 0, unit: '公里/月' },
        { id: 11, name: '客運換台鐵', origin: 0, carbon: 0, select: false, note: '客運換台鐵', max: 300, min: 0, unit: '公里/月' },
        { id: 12, name: '自駕汽車換客運', origin: 0, carbon: 0, select: false, note: '自駕汽車換客運', max: 300, min: 0, unit: '公里/月' },
        { id: 13, name: '自駕汽車換台鐵', origin: 0, carbon: 0, select: false, note: '自駕汽車換台鐵', max: 300, min: 0, unit: '公里/月' },
        { id: 14, name: '自駕汽車換高鐵', origin: 0, carbon: 0, select: false, note: '自駕汽車換高鐵', max: 300, min: 0, unit: '公里/月' },
    ];

    const carbonCaculator = (id: number, i: number): number => {
        let carbon = 0;
        switch (id) {
            case 1:
                carbon = ((i / 9.2 * 2.263 / 1000) - (i * 0.107 * 0.495 / 1000)) * 365 / 7;
                break;
            case 2:
                carbon = ((i / 21 * 2.263 / 1000) - (i * 0.024 * 0.495 / 1000)) * 365 / 7;
                break;
            case 3:
                carbon = (i / 21 * 2.263 / 1000) * 365 / 7;
                break;
            case 4:
                carbon = i * 0.11 / 1000 * 365 / 7;
                break;
            case 5:
                carbon = i * 0.78 / 1000 * 365 / 7;
                break;
            case 6:
                carbon = i * 0.37 * 365 / 7;
                break;
            case 7:
                carbon = i * 13.1 * 365 / 7;
                break;
            case 9:
                carbon = i * 0.020 * 12;
                break;
            case 10:
                carbon = i * 0.023 * 12;
                break;
            case 11:
                carbon = i * 0.003 * 12;
                break;
            case 12:
                carbon = i * 0.116 * 12;
                break;
            case 13:
                carbon = i * 0.119 * 12;
                break;
            case 14:
                carbon = i * 0.139 * 12;
                break;
        }
        return carbon;
    }


    const [itemsState, setItemsState] = useState(items);
    const [calculationResult, setCalculationResult] = useState(0.0);
    const [pageChange, setPageChange] = useState(false);
    const state = useLocation();

    const selectCard = (id: number) => {
        const updatedItems = itemsState.map(item => {
            if (id === 8) {
                if (item.id > 8) {
                    return { ...item, select: !item.select };
                }
            }
            if (item.id === id) {
                return { ...item, select: !item.select };
            }
            return item;
        });
        setItemsState(updatedItems);

        const result = updatedItems.filter(item => item.select).reduce((acc, curr) => acc + curr.carbon, 0);
        setCalculationResult(result);
    }

    const inputNumber = (id: number, value: number,) => {
        const updatedItems = itemsState.map(item => {
            if (item.id === id) {
                return { ...item, carbon: carbonCaculator(id, value), origin: value };
            }
            return item;
        });
        setItemsState(updatedItems);

        const result = updatedItems.filter(item => item.select).reduce((acc, curr) => acc + curr.carbon, 0);
        setCalculationResult(result);
    }



    const calculateResult = () => {
        const result = itemsState.filter(item => item.select).reduce((acc, curr) => acc + curr.carbon, 0);
        setCalculationResult(result);
    }

    return (
        <div className='bg-white bg-opacity-90 m-5 w-96 flex justify-center w-[44rem] h-full'>
            {(!pageChange) ? (
                <div className='grid grid-cols-1 justify-center text-center w-11/12'>
                    <div className=''>
                        <p className='mt-5 mb-10 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                        <p className='m-0 text-l mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>選取你每週願意達到的事項</p>
                    </div>
                    <div className='grid gap-4 mt-10'>
                        {itemsState.filter(item => item.id <= 8).map(item => (
                            <div key={item.id}>
                                <button className={`w-full text-xl ${item.select ? 'text-black bg-blue-300 border border-black hover:border-Cyan-900 hover:bg-Cyan-300' : 'text-blue bg-Cyan-900 border border-Cyan-600 hover:border-Cyan-900 hover:bg-Cyan-300'} rounded-2xl`}
                                    onClick={() => selectCard(item.id)}>
                                    <div className='px-4 py-3 w-full grid-center border border-black'>
                                        <p className='w-full text-xl'>
                                            {item.name}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='h-20 flex justify-center'>
                        <button className='text-center flex justify-center h-10 mb-5 border border-transparent rounded-md mt-10 hover:border-indigo-500 hover:border-black-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={() => setPageChange(true)}>
                            <p className='text-xl font-black'>NEXT:減碳行動量輸入</p>
                        </button>
                    </div>
                    <div className='h-4' ></div>
                </div>
            ) : (<div className='grid grid-cols-1 justify-center text-center'>
                <div className=''>
                    <p className='mt-5 mb-10 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                    <p className='m-0 text-l mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>輸入你的減碳行動量</p>
                </div>
                <div className='grid grid-cols-1 gap-4 mt-10 w-30'>
                    {itemsState.filter(item => item.select).filter(item => item.id != 8).map(item => (
                        <div key={item.id} className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                            <div className='px-4 py-3 w-full grid grid-cols-1 grid-center'>
                                <p className='w-full text-xl'>
                                    {item.note}
                                </p>
                            </div>
                            <div className='mt-5 h-10 w-50 grid grid-cols-1 justify-center text-center'>
                                <input type='range' id={item.name} min={item.min} max={item.max} step='1' name={item.name} onChange={(event) => inputNumber(item.id, parseInt(event.target.value))} />
                                <p className='mt-3.5'>
                                    <p>{item.origin} {item.unit}</p>
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* {(itemsState.filter(item => item.select).filter(item => item.id > 6).map(item => (
                        <div>
                            <div key={6} className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                                <div className='px-4 py-3 w-full grid grid-cols-1 grid-center'>
                                    <p className='w-full text-xl'>
                                        {item.note}
                                    </p>
                                </div>
                                <div className='mt-5 h-10 w-50 grid grid-cols-1 justify-center text-center'>
                                    <input type='range' id='台鐵換高鐵' min="0" max="300" step='1' name={item.name} onChange={(event) => inputNumber(item.id, parseInt(event.target.value))} />
                                    <p className='mt-3.5'>
                                        <p>{item.origin} {item.unit}</p>
                                    </p>
                                </div>

                            </div>
                        </div>
                    )))} */}
                </div>
                <div className='h-30'>
                    <button className='w-40 h-30 border border-transparent px-5 py-4 rounded-md mt-10 hover:border-indigo-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={calculateResult}>
                        <Link to="/Result" state={{ calculationResult }}>
                            <p className='text-l font-black px-4 py-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>計算結果！</p>
                        </Link>
                    </button>
                </div>
            </div>
            )

            }
        </div>

    );
}

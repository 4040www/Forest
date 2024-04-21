"use client"

import React, { useState } from 'react';

export default function Pages() {

    const [page, setPage] = useState(0);
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

    const reset = () => {
        const updatedItems = itemsState.map(item => {
            return { ...item, select: false, carbon: 0, origin: 0 };
        });
        setItemsState(updatedItems);
        setCalculationResult(0.0); // 重置计算结果为初始值
        setPage(0); // 将页面状态重置为初始页面
        setPageChange(false); // 重置页面改变状态为 false
    }


    const calculateResult = () => {
        setPage(2);
        const result = itemsState.filter(item => item.select).reduce((acc, curr) => acc + curr.carbon, 0);
        setCalculationResult(result);
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center h-auto" style={{ backgroundImage: `url(https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            {(page == 0) ? (
                <div className='flex flex-col items-center bg-white bg-opacity-90 m-5 w-auto h-auto'>
                    <div className="text-center">
                        <p className='mt-20 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                        <p className='mt-20 ml-5 mr-5 text-l font-black text-gray-600 dark:text-white letter-spacing:3px mt-14 '>
                            你有想過日常生活中的小改變，累積一年後會減少多少的碳排放嗎？
                        </p>
                        <p className='mt-5 text-l font-black text-gray-600 dark:text-white letter-spacing:3px mt-14 '>
                            使用減碳排放計算機試試看自己的數字吧
                        </p>
                    </div>


                    <button className="item-center w-80 h-30 mt-60 grid text-center">
                        <button onClick={() => setPage(1)} className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                Start!{" "}-&gt;
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                </span>
                            </h2>
                            <p className={`m-0 text-sm text-center`}>
                                計算你一年總共可以減少多少的碳排放吧
                            </p>
                        </button>
                    </button>
                </div>

            ) : (
                (page == 1) ? (

                    <div className='bg-white bg-opacity-90 m-5 w-96 flex justify-center w-auto'>
                        {(!pageChange) ? (
                            <div className='grid grid-cols-1 justify-center text-center w-auto h-auto'>
                                <div className='ml-20 mr-20'>
                                    <p className='mt-5 mb-10 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                                    <p className='m-0 text-l mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>選取你每週願意達到的事項</p>
                                </div>
                                <div className='grid gap-4 mt-10 grid grid-cols-2'>
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
                                    <button className='text-center flex justify-center h-10 mb-5 border border-transparent rounded-md mt-10 hover:border-black-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={() => setPageChange(true)}>
                                        <p className='text-xl font-black'>NEXT:減碳行動量輸入</p>
                                    </button>
                                </div>
                                <div className='h-4' ></div>
                            </div>
                        ) : (<div className='grid grid-cols-1 justify-center text-center w-auto h-fit'>
                            <div className=''>
                                <p className='mt-5 mb-10 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                                <p className='m-0 text-l mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>輸入你的減碳行動量</p>
                            </div>
                            <div className='grid grid-cols-1 gap-4 mt-10 ml-10 mr-10'>
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
                                <div className='block max-w-sm p-6'>
                                    <div className='px-4 py-3 w-full grid grid-cols-1 grid-center'>
                                        <p className='w-full text-xl'>
                                        </p>
                                    </div>
                                    <div className='mt-5 h-10 w-50 grid grid-cols-1 justify-center text-center'>
                                        <p className='mt-3.5'>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-30'>
                                <button className='w-40 h-30 border border-transparent px-5 py-4 rounded-md mt-10 hover:border-indigo-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={calculateResult}>
                                    <button onClick={() => calculationResult}>
                                        <p className='text-l font-black px-4 py-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>計算結果！</p>
                                    </button>
                                </button>
                            </div>
                        </div>
                        )

                        }
                    </div>
                ) : (
                    <div className='flex flex-col flex-center justify-center gap-10  bg-white bg-opacity-90 m-5 w-auto h-auto'>
                        <div className='mb-10 text-center'>
                            <p className='mt-5 mb-10 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                            <p className='mt-15 text-2xl mb-5 font-black text-gray-600 dark:text-white letter-spacing:3px'>持續做出改變</p>
                            <div className='text-center'>
                                <p className='text-2xl mb-5 font-black text-gray-600 dark:text-white letter-spacing:3px'>一年後可以減少 </p>
                                <p className='text-2xl mb-5 font-black text-green-900 dark:text-white letter-spacing:3px'>{(calculationResult).toFixed(3)}</p>
                                <p className='text-2xl mb-5 font-black text-gray-600 dark:text-white letter-spacing:3px'>公斤的碳排放</p>
                            </div>
                            <div className='flex text-center justify-center gap-1.5'>
                                <p className='text-center mt-5 mb-30 text-2xl mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>相當於種植 </p>
                                <p className='text-center mt-5 mb-30 text-2xl mb-15 font-black text-green-900 dark:text-white letter-spacing:3px'>{(calculationResult / 12).toFixed(3)}</p>
                                <p className='text-center mt-5 mb-30 text-2xl mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>顆樹</p>
                            </div>
                        </div>

                        <div className='mt-30 justify-center flex flex-center mb-10'>
                            <button className="rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                <button onClick={() => { reset() }}>
                                    <h2 className={`mb-3 text-2xl font-semibold`}>
                                        回主頁!{" "}-&gt;
                                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                        </span>
                                    </h2>
                                    <p className={`m-0 text-sm text-center`}>
                                        重新計算你一年可以減少的碳排放吧
                                    </p>
                                </button>
                            </button>
                        </div>
                        <div className='text-center'>
                            <p className='text-center text-l font-black text-gray-600 dark:text-white'>截圖自己的減碳承諾並上傳  </p>
                            <p>  </p>
                            <div className='flex text-center mb-10'>
                                <p className='text-center text-l font-black text-green-900 dark:text-white'><a href='https://www.instagram.com/ntutrees_/' className='border'> @ntutrees_ </a></p>
                                <p>  </p>
                                <p className='text-center text-l font-black text-gray-600 dark:text-white'>  即可參加抽獎！</p>
                            </div>
                        </div>
                    </div>
                )
            )
            }
        </div>
    );

}

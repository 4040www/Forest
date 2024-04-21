import { Link, useLocation } from 'react-router-dom';


export default function Result() {
    const location = useLocation();
    const calculationResult = location.state.calculationResult;

    return (
        <div className='flex flex-col flex-center justify-center gap-10  bg-white bg-opacity-90 m-5 w-[34rem] h-[44rem]'>
            <div className='mb-10 text-center'>
                <p className='mt-5 mb-10 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                <p className='mt-15 text-2xl mb-5 font-black text-gray-600 dark:text-white letter-spacing:3px'>持續做出改變</p>
                <div className='flex text-center justify-center gap-1.5'>
                    <p className='mt-15 text-2xl mb-5 font-black text-gray-600 dark:text-white letter-spacing:3px'>一年後可以減少 </p>
                    <p className='mt-15 text-2xl mb-5 font-black text-green-900 dark:text-white letter-spacing:3px'>{(calculationResult).toFixed(3)}</p>
                    <p className='mt-15 text-2xl mb-5 font-black text-gray-600 dark:text-white letter-spacing:3px'>公斤的碳排放</p>
                </div>
                <div className='flex text-center justify-center gap-1.5'>
                    <p className='text-center mt-5 mb-30 text-2xl mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>相當於種植 </p>
                    <p className='text-center mt-5 mb-30 text-2xl mb-15 font-black text-green-900 dark:text-white letter-spacing:3px'>{(calculationResult / 12).toFixed(3)}</p>
                    <p className='text-center mt-5 mb-30 text-2xl mb-15 font-black text-gray-600 dark:text-white letter-spacing:3px'>顆樹</p>
                </div>
            </div>

            {/* {(calculationResult) > 1000 ? (
                <div className='mb-60 text-center font-black'>
                    <p className='text-xl'>普通人的平均為：200 g</p>
                    <p className='text-3xl mt-10'>你的結果超過了 95% 的人</p>
                </div>
            ) : (
                <div className='mb-40 text-center font-black'>
                    <p className='text-xl'>普通人的平均為：200 g</p>
                    <p className='text-3xl mt-10'>你的結果超過了 55% 的人</p>
                </div>
            )} */}

            <div className='mt-30 justify-center flex flex-center'>
                <button className="rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <Link to="/" state={{ calculationResult }}>
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            回主頁!{" "}-&gt;
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            </span>
                        </h2>
                        <p className={`m-0 text-sm text-center`}>
                            重新計算你一年可以減少的碳排放吧
                        </p>
                    </Link>
                </button>
            </div>
            <div className='flex text-center justify-center gap-1.5'>
                <p className='text-center text-l font-black text-gray-600 dark:text-white'>截圖自己的減碳承諾並上傳  </p>
                <p>  </p>
                <p className='text-center text-l font-black text-green-900 dark:text-white'><a href='https://www.instagram.com/ntutrees_/' className='border'> @ntutrees_ </a></p>
                <p>  </p>
                <p className='text-center text-l font-black text-gray-600 dark:text-white'>  即可參加抽獎！</p>
            </div>
        </div>
    );

}
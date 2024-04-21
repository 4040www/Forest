import { Link } from 'react-router-dom';
import bg from "./bg.jpg";

export default function Intro() {
    return (
        <div className='flex flex-col items-center bg-white bg-opacity-90 m-5 w-[44rem] h-[44rem]'>
            {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-s lg:border lg:bg-gray-200 lg:p-4">
                    台灣大學森林暨環境資源學系
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="ml-20 pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://www.instagram.com/ntutrees_/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}NTU Foresty Students' Association
                    </a>
                </div>
            </div> */}
            {/* <img className='mt-5 w-72' src={'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/439422427_3545641972413010_2016858591960635207_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=djydsJlYi_sAb7SpYlA&_nc_ht=scontent-tpe1-1.xx&oh=00_AfBvQil9OgqrN_uOk9o1Y6C9ruUgg9vFh767YthOdJx2sQ&oe=662AFC96'}></img> */}

            <div className="text-center">
                <p className='mt-20 text-4xl font-black text-gray-900 dark:text-white letter-spacing:3px'>減 碳 排 放 計 算 機</p>
                <p className='mt-20 text-l font-black text-gray-600 dark:text-white letter-spacing:3px mt-14 '>
                    你有想過日常生活中的小改變，累積一年後會減少多少的碳排放嗎？
                </p>
                <p className='mt-5 text-l font-black text-gray-600 dark:text-white letter-spacing:3px mt-14 '>
                    使用減碳排放計算機試試看自己的數字吧
                </p>
            </div>
            

            <button className="item-center w-80 h-30 mt-60 grid text-center">
                <Link to="/Cardpick" className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Start!{" "}-&gt;
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        </span>
                    </h2>
                    <p className={`m-0 text-sm text-center`}>
                        計算你一年總共可以減少多少的碳排放吧
                    </p>
                </Link>
            </button>
        </div>
    );
}
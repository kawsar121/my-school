import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap bg-fuchsia-950 justify-between items-center mx-auto max-w-screen-xl p-4">

                    <div>
                        <ul className="flex flex-row font-medium mt-0 space-x-3 rtl:space-x-reverse text-sm">
                            <li className='bg-red-700   py-1 px-2 rounded-sm'>
                                <Link className="text-gray-900 dark:text-white hover:underline" aria-current="page" to='exStudent'>কর্মরত প্রাক্তন ছাএছাএীদের ডাটাবেজ</Link>
                            </li>
                            <li className='bg-sky-600 py-1 px-2 rounded-sm'>
                                <Link className="text-gray-900 dark:text-white hover:underline" aria-current="page" to='work'>কর্ম প্রত্যাশীদের বায়োডাটা সংযুক্তকরণ</Link>
                            </li>
                            <li className='bg-green-800 py-1 px-2 rounded-sm'>
                                <Link className="text-gray-900 dark:text-white hover:underline" aria-current="page" to='bondu'>সুবর্ণ জয়ন্তী ও বঙ্গবন্ধু কর্ণার</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-2 py-1 text-sm text-gray-900 dark:text-white rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-white">
                            <img className='w-5' src="https://img.hotimg.com/bdicon.png" alt="bdicon.png" border="0" />
                            বাংলা
                        </button>
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-2 py-1 text-sm text-gray-900 dark:text-white rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-white">
                            <svg class="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlink:href="#a" y="420" /><use xlink:href="#a" y="840" /><use xlink:href="#a" y="1260" /></g><use xlink:href="#a" y="1680" /></g><use xlink:href="#b" x="247" y="210" /></g><use xlink:href="#c" x="494" /></g><use xlink:href="#d" x="988" /><use xlink:href="#c" x="1976" /><use xlink:href="#e" x="2470" /></g></svg>
                            English (US)
                        </button>
                    </div>
                </div>
            </nav>
            <div className='relative'>
                {/* <a href="https://hotimg.com/VG1Qc"><img className='w-full' src="https://img.hotimg.com/downloadd235aa64a7304263.jpeg" alt="downloadd235aa64a7304263.jpeg" border="0" /></a> */}

                <img className='w-full h-[430px]' src="https://img.hotimg.com/1708869469248.th.jpeg" alt="1708869469248.jpeg" border="0" />
                <div className='absolute bottom-[110px]  md:bottom-4 lg:bottom-24 lg:left-[400px]'>
                    <h1 className='text-3xl text-black font-extrabold'>Joypur Sorojini High School</h1>
                    <p className='text-xl text-slate-800 font-semibold'>Chhagalnaiya, Feni. <span className='ml-3'>EIIN: 106462</span> </p>
                </div>
            </div>
            <nav className="bg-gray-50 dark:bg-white-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    <div>
                                        <h1 className='text-black'>মেনু নির্বাচন করুন</h1>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                                    <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                        <Link to='/ourInformaton'>আমাদের সম্পর্কে</Link>
                                    </li>
                                    <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                        <details>
                                            <summary>বিভাগ সমূহ </summary>
                                            <ul className="p-2">
                                                <li><Link to='#'>বিজ্ঞান শাখা</Link></li>
                                                <li><Link to='#'>ব্যবসায়িক শাখা</Link></li>
                                                <li><Link to='#'>মানবিক শাখা</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                        <details>
                                            <summary>একাডেমিক কার্যক্রম </summary>
                                            <ul className="p-2">
                                                <li><Link to='#'>Submenu 1</Link></li>
                                                <li><Link to='#'>Submenu 2</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                        <details>
                                            <summary>ফলাফল</summary>
                                            <ul className="p-2">
                                                <li><Link to='#'>Submenu 1</Link></li>
                                                <li><Link to='#'>Submenu 2</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                        <details>
                                            <summary>জব প্লেসমেন্ট </summary>
                                            <ul className="p-2">
                                                <li><Link to='#'>Submenu 1</Link></li>
                                                <li><Link to='#'>Submenu 2</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                        <details>
                                            <summary>ইন্ডাস্ট্রি লিংকেজ</summary>
                                            <ul className="p-2">
                                                <li><Link to='#'>Submenu 1</Link></li>
                                                <li><Link to='#'>Submenu 2</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                        <Link to='gallary'>গ্যালারি</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                    <Link to='/'>আমাদের সম্পর্কে</Link>
                                </li>
                                <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                    <details>
                                        <summary>বিভাগ সমূহ </summary>
                                        <ul className="p-2">
                                            <li><Link to='#'>বিজ্ঞান শাখা</Link></li>
                                            <li><Link to='#'>ব্যবসায়িক শাখা</Link></li>
                                            <li><Link to='#'>মানবিক শাখা</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                    <details>
                                        <summary>একাডেমিক কার্যক্রম </summary>
                                        <ul className="p-2">
                                            <li><Link to='#'>Submenu 1</Link></li>
                                            <li><Link to='#'>Submenu 2</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                    <details>
                                        <summary>ফলাফল</summary>
                                        <ul className="p-2">
                                            <li><Link to='#'>Submenu 1</Link></li>
                                            <li><Link to='#'>Submenu 2</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                    <details>
                                        <summary>জব প্লেসমেন্ট </summary>
                                        <ul className="p-2">
                                            <li><Link to='#'>Submenu 1</Link></li>
                                            <li><Link to='#'>Submenu 2</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className='py-1 px-1 rounded-sm hover:bg-green-700'>
                                    <details>
                                        <summary>ইন্ডাস্ট্রি লিংকেজ</summary>
                                        <ul className="p-2">
                                            <li><Link to='#'>Submenu 1</Link></li>
                                            <li><Link to='#'>Submenu 2</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className='py-1 px-1 rounded-sm hover:bg-green-700 text-black'>
                                    <Link to='gallary'>গ্যালারি</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
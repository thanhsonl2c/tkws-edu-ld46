"use client";

import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {

    // const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    // const toggleDropdown = (dropdownName: string) => {
    //     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    // };

    return (
        <div className="header bg-white">
            <div className="container flex items-center justify-between py-4 mx-auto">
                <div className="logo">
                    <Image src="/images/logo.png" width={160} height={50} alt="Logo" />
                </div>
                <div className="navbar relative">
                    <ul className="flex justify-center lg:gap-4 xl:gap-10 text-base font-semibold text-black">
                        <li>
                            <Link href="/" className="transition-all duration-200 hover:text-green-zomp">Trang chủ</Link>
                        </li>

                        <li>
                            <Link href="/" className="transition-all duration-200 hover:text-green-zomp">Sản phẩm</Link>
                        </li>

                        <li>
                            <Link href="/" className="transition-all duration-200 hover:text-green-zomp">Tin Tức</Link>
                        </li>

                        <li>
                            <Link href="/" className="transition-all duration-200 hover:text-green-zomp">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className="wrapper">
                    <ul className="flex items-center justify-end space-x-3">
                        <li className="border border-pink-400 w-[46px] h-[46px] border-dashed rounded-full flex items-center justify-center">
                            <div className="bg-pink-400 w-10 h-10 rounded-full flex items-center justify-center">
                                <SearchIcon sx={{ color: '#ffffff', fontSize: 22}} />
                            </div>
                        </li>
                        <li className="border border-orange-400 w-[46px] h-[46px] border-dashed rounded-full flex items-center justify-center">
                            <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center">
                                <ShoppingCartIcon sx={{ color: '#ffffff', fontSize: 22}} />
                            </div>
                        </li>
                        <li className="border border-blue-400 w-[46px] h-[46px] border-dashed rounded-full flex items-center justify-center">
                            <div className="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center">
                                <AccountCircleIcon sx={{ color: '#ffffff', fontSize: 22}} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
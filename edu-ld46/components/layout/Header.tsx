"use client";

import Link from 'next/link';
import Image from 'next/image'

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

                </div>
            </div>
        </div>
    )
}
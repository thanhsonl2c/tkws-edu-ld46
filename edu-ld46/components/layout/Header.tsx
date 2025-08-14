"use client";

import Image from 'next/image'

export default function Header() {
    return(
        <div className="header bg-white py-4">
            <div className="container mx-auto">
                <div className="logo">
                    <Image src="/images/logo.png" width={160} height={50} alt="Logo" />
                </div>
                <div className="navbar">

                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}
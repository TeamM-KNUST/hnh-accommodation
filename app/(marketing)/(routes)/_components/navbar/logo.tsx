"use client";

import Image from "next/image"
import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();
    return (
        <div>
            <Image
                
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="hidden md:block cursor-pointer"
                onClick={() => router.push("/")}
            />
            
        </div>
    )
}
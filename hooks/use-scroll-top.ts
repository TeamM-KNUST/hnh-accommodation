"use client";

import { useEffect, useState } from "react";


export const useScrollTop = (threshold = 10) => {
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY ;
        if (offset > threshold) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },)
    return isScrolled
}
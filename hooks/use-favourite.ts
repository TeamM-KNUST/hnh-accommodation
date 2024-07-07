import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

type Props = {
    listingId: string;
    currentUser?: User | null;
}

function useFavorite({
    listingId,
    currentUser
}:Props) {

    const router = useRouter();

    const hasFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(listingId);
    }, [currentUser, listingId]);

    const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (!currentUser) {
            router.push("/auth/login");
            return;
        }
        try {
            let request;

            if (hasFavorite) {
                request = ()=> axios.delete(`/api/favorite/${listingId}`);
            }else {
                request = ()=> axios.post(`/api/favorite/${listingId}`);
            }
            await request();
            router.refresh();
            toast.success("Successfully updated favorite");
        }catch(error:any) {
            toast.error(error.response.data.message);
        }
    }, [currentUser, hasFavorite, listingId, router]);
    
    return { hasFavorite, toggleFavorite };
} 

export default useFavorite;
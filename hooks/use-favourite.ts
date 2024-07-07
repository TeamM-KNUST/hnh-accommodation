import { Favorite, User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";



interface IUseFavorite {
	listingId: string;
	currentUser?: User | null;

}

const useFavorite = ({ listingId, currentUser}: IUseFavorite) => {
	const router = useRouter();

	const hasFavorite = currentUser?.favoriteIds.includes(listingId) || false;

	const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();

		if (!currentUser) {
			return  router.push("/auth/login");
		}

		try {
			if (hasFavorite) {
				await axios.delete(`/api/favorites/${listingId}`);
			} else {
				await axios.post(`/api/favorites/${listingId}`);
			}

			router.refresh();
			toast.success("Success");
			console.log(hasFavorite);
		} catch (error) {
			toast.error("Something went wrong.");
		}
	};

	return {
		hasFavorite,
		toggleFavorite,
	};
};

export default useFavorite;

import axios from "axios";


export const createLisitngAPI = async (listingData) => {
    try {
        const response = await axios.post(
        "api/listings",
        ...listingData
        );
        return response.data;
        console.log(response.data);
    } catch (error) {
        console.error(error);
        return null;
    }
};

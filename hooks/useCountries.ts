import countries from "world-countries"

const formattedCountries = countries.map((country) => ({
    name: country.name.common,
    code: country.cca2,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    area: country.area,
    latlng: country.latlng,
    currencies: country.currencies,
    languages: country.languages,
    flag: country.flag
}))

export const useCountries = () => {
    const getAll = () => formattedCountries;
    const getByCode = (code: string) => formattedCountries.find(country => country.code === code);

    return {
        getAll,
        getByCode
    }
}



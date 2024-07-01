"use client";

import { useCountries } from "@/hooks/useCountries";
import Select from "react-select";
import Flag from "react-world-flags";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
  name: string;
  code: string;
  regio: string;
  subregion: string;
    capital: string[];
  area: string;
};

type Props = {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
};

function CountrySelect({ value, onChange }: Props) {
  const { getAll } = useCountries();

  return (
    <div className="z-10">
      <Select
        value={value}
        isClearable
        onChange={(value) => onChange(value as CountrySelectValue)}
        options={getAll()}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        placeholder="Select a country"
        isSearchable
        formatOptionLabel={(option: any) => (
          <div className="flex items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label}
              <span className="text-neutral-500 ml-2">{option.region}</span>
            </div>
            <span className="text-neutral-500 ml-2">{option.capital}</span>
            <span className="text-neutral-500 ml-2">{option.subregion}</span>
            <span className="text-neutral-500 ml-2">{option.area}</span>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2 border-neutral-200 rounded-xl",
          option: () => "text-xl",
          input: () => "text-xl",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#f9f9f9",
            primary: "black",
          },
        })}
      />
    </div>
  );
}

export default CountrySelect;

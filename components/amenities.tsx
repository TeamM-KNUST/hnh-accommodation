import { AmenetiesType } from "@/data/amenities";

import React from "react";
import { Button } from "@/components/ui/button";

interface AmenitiesProps {
    value: string[];
    onChange: (value: string[]) => void;
}

export const ProcessAmeneties = ({
    value,
    onChange,

}: AmenitiesProps) => {
    const [placeAmeneites, setPlaceAmeneites] = React.useState(value);

    const addAmenety = (amenity: string) => {
        setPlaceAmeneites([...placeAmeneites, amenity]);
        onChange([...placeAmeneites, amenity]);
    };

    const removeAmenty = (amenity: string) => {
        setPlaceAmeneites(placeAmeneites.filter((item) => item !== amenity));
        onChange(placeAmeneites.filter((item) => item !== amenity));
    };


  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Tell guests what your place has to offer
        </h2>
        <p>You can add more amenities after you publish your listing.</p>
        <div className="flex flex-col gap-5 max-h-[65vh] overflow-auto scroll no-scrollbar">
          {AmenetiesType.map(({ type, data }) => (
            <div key={type} className="flex flex-col gap-5">
              {type === "advanced" && (
                <span className="text-lg font-medium">
                  Do you have any standout amenities?
                </span>
              )}
              {type === "safety" && (
                <span className="text-md font-medium">
                  Do you have any of these safety items?
                </span>
              )}

              <div className="grid grid-cols-3 gap-5">
                {data.map(({ name, svgPath }) => (
                  <Button
                    variant="outline"
                    size="amen"
                    className={`flex items-center gap-2 p-10 ${
                      placeAmeneites.includes(name)
                        ? " border-black"
                        : "border-neutral-300"
                    }`}
                    key={name}
                    onClick={() =>
                      placeAmeneites.includes(name)
                        ? removeAmenty(name)
                        : addAmenety(name)
                    }
                  >
                    {svgPath}
                    <span className="text-airbnb-light-black font-medium">
                      {name}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

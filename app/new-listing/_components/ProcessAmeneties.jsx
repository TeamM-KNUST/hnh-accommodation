import { AmenetiesType } from "@/data/amenities";
import { userAppStore } from "../../../store/store";
import React from "react";
import { Button } from "@/components/ui/button";

export const ProcessAmeneties =()=> {
 const { placeAmeneites, setPlaceAmenities } = userAppStore();
  const addAmenety = (name) => {
    setPlaceAmenities([...placeAmeneites, name]);
  };
  const removeAmenty = (name) => {
    const index = placeAmeneites.findIndex((amenetiy) => amenetiy === name);
    if (index) {
      const clonedAmenties = [...placeAmeneites];
      clonedAmenties.splice(index,1);
      setPlaceAmenities(clonedAmenties);
    }
  };
  return (
     <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Tell guests what your place has to offer
        </h2>
        <p>You can add more amenities after you publish your listing.</p>
        <div className="flex flex-col gap-5 max-h-[65vh] overflow-auto ">
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
                        ? "bg-black border-black"
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
}

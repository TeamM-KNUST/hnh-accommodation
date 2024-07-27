import { Button } from "@/components/ui/button";
import { userAppStore } from "../../../store/store";

export const FloorPlan =()=> {
  const { placeSpace, setPlaceSpace } = userAppStore();

  const handleIncrement = (type) => {
    setPlaceSpace({ ...placeSpace, [type]: placeSpace[type] + 1 });
  };

  const handleDecrement = (type) => {
    if (placeSpace[type] > 1) {
      setPlaceSpace({ ...placeSpace, [type]: placeSpace[type] - 1 });
    }
  };

  return (
    <div className="flex items-center justify-center h-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Share some basics about your place
        </h2>
        <p>You'll add more details later, such as bed types.</p>
      </div>
      <div className="flex  flex-col w-[40%] gap-5">
        {Object.keys(placeSpace).map((place) => (
          <div
            className="flex justify-between w-full text-lg items-center"
            key={place}
          >
            <span className="capitalize ">{place}</span>
            <div className="flex gap-10 items-center justify-between w-48">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleDecrement(place)}
              >
                -
              </Button>
              <span className="min-w-[20px]">{placeSpace[place]}</span>
              <Button
               variant="outline"
                size="lg"
                onClick={() => handleIncrement(place)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

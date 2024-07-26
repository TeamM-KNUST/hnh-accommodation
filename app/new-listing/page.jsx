"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Overview } from "./_components/overview";
import { userAppStore } from "@/store/store";
import { StepOneStarter } from "./_components/StepOneStart";
import { ListingType } from "./_components/ListingType";
import {PlaceLocation} from "./_components/PlaceLocation";

const NewListingPage = () => {
    const [step, setStep] = useState(0);
  const router = useRouter();
  
  const { resetNewListingData } = userAppStore();
  
  useEffect(() => {
    resetNewListingData();
  }, [resetNewListingData]);


  const handleNext = () => {
    setStep(step + 1);
  };


  const handlePrevious = () => {
    setStep(step - 1);
  };
    
     const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview />;
      case 1:
        return <StepOneStarter />
      case 2:
        return <ListingType />
      case 3:
        return <PlaceLocation/>
      default:
        return <></>;
    }
  };

    return (
        <div className=" grid grid-rows-new-listing h-[100vh]">
      <header className="flex items-center px-20 justify-between">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          
        </div>
        {step <= 13 && (
          <Button variant="default">
            Save & exit
          </Button>
        )}
      </header>
      <div>{getComponent()}</div>

      <footer
        className={`flex ${
          step > 0 ? "justify-between" : "justify-end"
        } items-center px-20 pb-4  border-t-4 border-t-gray-300 `}
      >
        {step >= 1 && (
          <Button
                        variant="destructive"
                        onClick={handlePrevious}
            
          >
            Back
          </Button>
        )}
        {step !== 0 ? (
          <Button   
          onClick={handleNext}
            
          >
            Next
          </Button>
        ) : (
          <Button
         
           onClick={handleNext}
          >
            Get Started
          </Button>
        )}
      </footer>
     
    </div>
    );
}
 
export default NewListingPage;
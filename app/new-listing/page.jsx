"use client";

import { Overview } from "./_components/overview"
import { StepOneStarter } from "./_components/StepOneStart"
import { ListingType } from "./_components/ListingType"
import { FloorPlan } from "./_components/FloorPlan"
import { StepTwoStarter } from "./_components/StepTwoStarter"
import { Photos } from "./_components/Photos"
import  {ProcessAmeneties} from "./_components/ProcessAmeneties"
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { userAppStore } from "../../store/store";
import Title from "./_components/Title";
import StepThreeStarter from "./_components/StepThreeStarter";
import Description from "./_components/Description";
import Price from "./_components/Price";
import { Button } from "@/components/ui/button";

import axios from "axios";



const NewListingPage = () => {
    const [step, setStep] = useState(0);
  const resetNewListingData = userAppStore((state) => state.resetNewListingData);
  const router = useRouter();

  useEffect(() => {
    resetNewListingData();
  }, [resetNewListingData]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const onSubmit = async () => {
    const { locationType, placetype, locationData, placeSpace, placeAmeneites, photos, title, description, price } = userAppStore.getState();
    const data = {
      locationType,
      placetype,
      locationData,
      placeSpace,
      placeAmeneites,
      photos,
      title,
      description,
      price
    };
    try {
        const response = await axios.post('/api/listings', data);
        console.log(response.data)
        alert("Listing created successfully", response.data);
      alert(response.data.message);
      router.push('/');
    } catch (error) {
        console.error(error);
    }
    };
    
     const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview />;
      case 1:
        return <StepOneStarter />;
      case 2:
        return <FloorPlan />;
      case 3:
        return <StepTwoStarter />;
      case 4:
        return <ProcessAmeneties />;
      case 5:
        return <Photos />;
      case 6:
        return <Title />;
      case 7:
        return <Description/>;
      case 8:
        return <StepThreeStarter />;
      case 9:
        return <Price />;
      default:
        return <></>;
    }
  };
    return ( 
         <div className=" grid grid-rows-new-listing h-[100vh]">
      <header className="flex items-center px-20 justify-between">
       
        {step === 10 && (
                    <Button
          onClick={onSubmit}
                    
                    >
            Save & exit
          </Button>
        )}
      </header>
      <div>{getComponent()}</div>
      {/* {step <= 13 && ( */}
      <footer
        className={`flex ${
          step > 0 ? "justify-between" : "justify-end"
        } items-center px-20 pb-4  border-t-4 border-t-gray-300 `}
      >
        {step >= 1 && (
          <Button
            variant="secondary"
            onClick={handlePrevious}
          >
            Back
          </Button>
        )}
        {step !== 0 ? (
          <Button
          variant="primary"
            onClick={handleNext}
          >
            Next
          </Button>
        ) : (
          <Button
           variant="destructive"
            onClick={handleNext}
          >
            Get Started
          </Button>
        )}
      </footer>
      {/* )} */}
    </div>
  );

}
 
export default NewListingPage;
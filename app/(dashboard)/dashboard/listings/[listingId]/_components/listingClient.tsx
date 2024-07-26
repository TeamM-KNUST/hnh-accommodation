"use client";

import { Container } from "@/components/container";

import { useEffect, useMemo, useState } from "react";

import { ListingInfo } from "./lisiting-info";
import { Listing, User } from "@prisma/client";
import { categories } from "@/data/constant";
import ListingHead from "./listingHead";
import ListingReservation from "./listing-reservation";
import { Map } from "@/components/Map";
import {getPlacesData} from "@/lib/travel";

type Props = {
  listing: Listing & {
    user: User;
  };
  currentUser?: User | null;
};

function ListingClient({ listing, currentUser }: Props) {

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // useEffect(() => {
  //   const filtered = places.filter((place) => (place) > rating);

  //   setFilteredPlaces(filtered);
  // }, [rating]);


  // const onLoad = (autoC) => setAutocomplete(autoC);

  // const onPlaceChanged = () => {
  //   const lat = autocomplete.getPlace().geometry.location.lat();
  //   const lng = autocomplete.getPlace().geometry.location.lng();

  //   setCoords({ lat, lng });
  // };
  const category = useMemo(() => {
    return categories.find((item) => item.name === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              locationValue={listing.locationValue}
            />
            <div className="order-first mb-10 md:order-last md:col-span-2">
              <ListingReservation
                totalPrice={listing.title.length}
                onSubmit={() => {}}
                disabledDates={[]}
              />
            </div>
          </div>
        </div>
        <Map
          //  setChildClicked={setChildClicked}
          //   setBounds={setBounds}
          //   setCoords={setCoords}
          //   coords={coords}
          //   places={filteredPlaces.length ? filteredPlaces : places}
        
        
        />
      </div>
    </Container>
  );
}

export default ListingClient;

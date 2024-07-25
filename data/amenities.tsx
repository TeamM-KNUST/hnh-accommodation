import Ac from "./ameneties/ac";
import Bbq from "./ameneties/bbq";
import Beach from "./ameneties/beach";
import CarbonMonoxideAlarm from "./ameneties/carbon-monoxide-alarm";
import FireExt from "./ameneties/fire-ext";
import FirePit from "./ameneties/fire-pit";
import FirstAid from "./ameneties/first-aid";
import Gym from "./ameneties/gym";
import HotTub from "./ameneties/hot-tub";
import IndoorFirplace from "./ameneties/indoor-firplace";
import Kitchen from "./ameneties/kitchen";
import Lake from "./ameneties/lake";
import OutdoorDining from "./ameneties/outdoor-dining";
import OutdoorShower from "./ameneties/outdoor-shower";
import PaidParking from "./ameneties/paid-parking";
import Parking from "./ameneties/parking";
import Patio from "./ameneties/patio";
import Piano from "./ameneties/piano";
import Pool from "./ameneties/pool";
import PoolTable from "./ameneties/pool-table";
import Ski from "./ameneties/ski";
import SmokeAlarm from "./ameneties/smoke-alarm";
import Tv from "./ameneties/tv";
import WashingMachine from "./ameneties/washing-machine";
import Wifi from "./ameneties/wifi";
import Workplace from "./ameneties/workplace";

export const AmenetiesType = [
  {
    type: "basic",
    data: [
      { name: "Wifi", svgPath: <Wifi /> },
      { name: "TV", svgPath: <Tv /> },
      { name: "Kitchen", svgPath: <Kitchen /> },
      { name: "Washing Machine", svgPath: <WashingMachine /> },
      { name: "Free parking on premises", svgPath: <Parking /> },
      { name: "Paid parking on premises", svgPath: <PaidParking /> },
      { name: "Air conditioning", svgPath: <Ac /> },
      { name: "Dedicated workplace", svgPath: <Workplace /> },
    ],
  },
  {
    type: "advanced",
    data: [
      { name: "Pool", svgPath: <Pool /> },
      { name: "Hot tub", svgPath: <HotTub /> },
      { name: "Patio", svgPath: <Patio /> },
      { name: "BBQ grill", svgPath: <Bbq /> },
      { name: "Outdoor dining area", svgPath: <OutdoorDining /> },
      { name: "Fire pit", svgPath: <FirePit /> },
      { name: "Pool table", svgPath: <PoolTable /> },
      { name: "Indoor fireplace", svgPath: <IndoorFirplace /> },
      { name: "Piano", svgPath: <Piano /> },
      { name: "Exercise equipment", svgPath: <Gym /> },
      { name: "Lake access", svgPath: <Lake /> },
      { name: "Beach access", svgPath: <Beach /> },
      { name: "Ski-in/Ski-out", svgPath: <Ski /> },
      { name: "Outdoor shower", svgPath: <OutdoorShower /> },
    ],
  },
  {
    type: "safety",
    data: [
      { name: "Smoke alarm", svgPath: <SmokeAlarm /> },
      { name: "First aid kit", svgPath: <FirstAid /> },
      { name: "Fire extinguisher", svgPath: <FireExt /> },
      { name: "Carbon monoxide alarm", svgPath: <CarbonMonoxideAlarm /> },
    ],
  },
];

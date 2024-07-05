import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { db } from "@/lib/db";
import { Location } from "@prisma/client";


export const LocationSelect = async () => {
    const location = await db.location.findMany({
        select: {
            id: true,
            name: true,
        },
    })
  return (
    <Select>
      <SelectTrigger>
        <SelectValue>Select Location...</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {location.map((location) => (
            <SelectItem key={location.id} value={location.id}>
              {location.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

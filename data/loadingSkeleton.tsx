
import { Skeleton } from "@/components/ui/skeleton"


export const CategoriesSketeton = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
        </div>
    )
}


export const ListingCardSkeleton = () => {
  return (
    <div className="col-span-1">
      <Skeleton className="aspect-square w-full h-60" />
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
};
import { User } from "@prisma/client";
import FavoritesClient from "./_components/favorite-client";
import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListing from "@/actions/getFavoriteListing";
import { EmptyState } from "@/components/empty-state";
import { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Favorites",
  description: "View all your favorite listings",
};

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListing();

  if (!currentUser) {
    return redirect("/auth/login")
  }


  if (!listings || listings.length === 0 ) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="You are not authorized to view this page. Please login to view your favorite listings."
      />
    );
  }

  return (
    <Suspense>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser as unknown as User}
      />
    </Suspense>
  );
};

export default FavoritesPage;

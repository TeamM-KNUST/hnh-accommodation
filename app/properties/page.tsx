import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getLisiting";
import { EmptyState } from "@/components/empty-state";
import PropertiesClient from "./_components/properties-client";
import { Suspense } from "react";

type Props = {};

const PropertiesPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </>
    );
  }

  const listings = await getListings({ currentUser: currentUser.id });

  if (listings.length === 0) {
    return (
      <>
        <EmptyState
          title="No Properties found"
          subtitle="Looks like you have not any Properties"
        />
      </>
    );
  }
  return (
    <>
      <Suspense>
        <PropertiesClient listings={listings} currentUser={currentUser} />
      </Suspense>
    </>
  );
};

export default PropertiesPage;

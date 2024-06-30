import { db } from "@/lib/db";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { listingId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const listing = await db.listing.findUnique({
    where: {
      id: params.listingId,
    },
  });

  return {
      title: listing?.title,
      description: listing?.description,
  };
}

interface CourseIdLayoutProps {
  children: React.ReactNode;
}

const CourseIdLayout = ({ children }: CourseIdLayoutProps) => {
  return <div>{children}</div>;
};

export default CourseIdLayout;

import { auth } from "@/auth";
import { CategoryForm } from "@/components/category-form";
import { UploadImage } from "@/components/upload-image";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

const DashboardPage = async ({ params }: { params: { listingId: string } }) => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const locations = await db.location.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return <div></div>;
};

export default DashboardPage;

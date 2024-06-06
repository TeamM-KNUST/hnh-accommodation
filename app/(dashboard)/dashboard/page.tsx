import { auth } from "@/auth";
import { CategoryForm } from "@/components/category-form";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

const DashboardPage = async ({ params }: { params: { listingId: string } }) => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div>
        <h1 className="text-3xl font-bold ">Dashboard</h1>
       
    </div>
  );
};

export default DashboardPage;

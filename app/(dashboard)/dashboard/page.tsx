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

  const locations = await db.location.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <CategoryForm
        options={categories.map((category) => ({
          label: category.name,
          value: category.id,
        }))}
      />
    </div>
  );
};

export default DashboardPage;

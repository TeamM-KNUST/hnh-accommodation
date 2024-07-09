"use client";

import { useRouter } from "next/navigation";
import { Heading } from "./heading";
import { Button } from "./ui/button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  action?: Action;
}

type Action = {
  text: string;
  onClick: () => void;
};

const action: Action = {
  text: "Login In",
  onClick: () => {},
};

export const EmptyState = ({
  title = "No listings found",
  subtitle = "Try adjusting your search or filters to find what you're looking for.",
  showReset,
  action,
}: EmptyStateProps) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center ">
      <Heading title={title} subTitle={subtitle} />

      <div className="w-48 mt-4">
        {showReset && (
          <Button
            variant="outline"
            label="Remove all filters"
            onClick={() => router.push("/dashboard")}
          >
            Remove all filters
          </Button>
        )}
        {action && (
          <Button
            variant="outline"
            label={action.text}
            onClick={action.onClick}
          >
            {action.text}
          </Button>
        )}
      </div>
    </div>
  );
};

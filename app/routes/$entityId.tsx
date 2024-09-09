import { useParams } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import getEntity from "api/getEntity";
import { AlertCircle, Loader2 } from "lucide-react";

const EntityDetailView = () => {
  const params = useParams();
  const entityId = params.entityId as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ["entity", entityId],
    queryFn: () => getEntity({ entityId }),
    enabled: !!entityId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <Loader2 className="w-16 h-16 mx-auto text-blue-500 animate-spin" />
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (!error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 mx-auto text-red-500 animate-bounce" />
          <p className="mt-4 text-lg font-semibold text-gray-700">
            An error occurred
          </p>
          <p className="mt-2 text-sm text-gray-500">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>Entity ID: {entityId}</div>
    </div>
  );
};

export default EntityDetailView;

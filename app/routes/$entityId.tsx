import { useParams } from "@remix-run/react";

const EntityDetailView = () => {
  const params = useParams();
  const entityId = params.entityId;

  return (
    <div>
      <div>Entity ID: {entityId}</div>
    </div>
  );
};

export default EntityDetailView;

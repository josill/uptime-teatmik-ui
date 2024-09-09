import API_URL from "config";

export interface GetEntityRequestBody {
  entityId: string;
}

export default async function getEntity({ entityId }: GetEntityRequestBody) {
  const response = await fetch(`${API_URL}/v1/businesses/${entityId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

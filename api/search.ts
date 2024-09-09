import API_URL from "config";

export interface SearchRequestBody {
  query: string;
}

export default async function search({ query }: SearchRequestBody) {
  const response = await fetch(
    `${API_URL}/v1/businesses/search?query=${query}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

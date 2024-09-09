import API_URL from "config";

export interface SearchRequestBody {
  query: string;
}

export default function search({ query }: SearchRequestBody) {
  return fetch(
    `${API_URL}/dashboard/users/accept-marketing-emails?query=${query}`,
    {
      method: "GET",
    }
  );
}

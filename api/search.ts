export interface SearchRequestBody {
  query: string;
}

export default function search({ query }: SearchRequestBody) {
  return fetch(`/dashboard/users/accept-marketing-emails?query=${query}`, {
    method: "GET",
  });
}

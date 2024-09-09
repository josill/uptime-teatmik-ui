import { zodResolver } from "@hookform/resolvers/zod";
import type { MetaFunction } from "@remix-run/node";
import { useQuery } from "@tanstack/react-query";
import search from "api/search";
import useDebounce from "hooks/useDebouncedQuery";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const schema = z.object({
  query: z.string().min(3, { message: "Must be 3 or more characters long" }),
});

type SearchSchema = z.infer<typeof schema>;

export default function Index() {
  const { register, watch } = useForm<SearchSchema>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const query = watch("query");
  const debouncedQuery = useDebounce(query, 300);

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchResults", debouncedQuery],
    queryFn: () => search({ query: debouncedQuery }),
    enabled: !!debouncedQuery,
  });

  return (
    <div className="flex flex-col justify-center items-center max-w-4xl mx-auto p-4 w-screen h-screen">
      <div className="text-center mb-4 max-w-[500px]">
        <h1 className="text-5xl font-bold mb-2">
          <span className="text-red-500">up</span>
          <span className="text-black">time</span>
          <span className="text-lime-500">teatmik</span>
          <span className="text-amber-600">.ee</span>
        </h1>
        <p className="text-gray-600 text-sm">
          warming up business climate in Estonia
        </p>
      </div>
      <div className="flex justify-center w-full max-w-[500px]">
        <input
          type="text"
          className="w-full max-w-2xl px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
          {...register("query")}
        />
        <button className="bg-blue-800 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          SEARCH
        </button>
      </div>
    </div>
  );
}

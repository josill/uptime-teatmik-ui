import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center max-w-4xl mx-auto p-4 w-screen h-screen">
      <div className="text-center mb-4">
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
      <div className="flex justify-center w-full">
        <input
          type="text"
          className="w-full max-w-2xl px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
        />
        <button className="bg-blue-800 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          SEARCH
        </button>
      </div>
    </div>
  );
}

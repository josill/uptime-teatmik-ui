import { Link, useParams } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import getEntity from "api/getEntity";
import {
  Users,
  InfoIcon,
  FileText,
  ArrowBigLeft,
  CalendarDays,
  RotateCcw,
  Globe,
  Euro,
  MapPin,
  Activity,
  AlertCircle,
  Loader2,
} from "lucide-react";

const EntityDetailView = () => {
  const params = useParams();
  const entityId = params.entityId as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ["entity", entityId],
    queryFn: () => getEntity({ entityId }),
    enabled: !!entityId,
    select: (data) => data.entity,
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

  if (error) {
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

  console.log(data);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <Link className="absolute top-8 left-8 text-blue-800" to={"/"}>
        <ArrowBigLeft width={32} height={32} />
      </Link>
      <div>
        <div className="flex mb-8">
          <Users className="w-6 h-6 text-blue-800 mr-2" />
          <h1 className="text-2xl font-bold text-blue-800">
            {data.businessOrLastName}
          </h1>
        </div>

        <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-800">
          <InfoIcon className="w-5 h-5 mr-2" />
          General information
        </h2>

        <div className="space-y-3">
          {[
            {
              icon: <FileText className="w-4 h-4" />,
              label: "Legal form:",
              value: data.entityType,
            },
            {
              icon: <FileText className="w-4 h-4" />,
              label: "Legal form abbreviation:",
              value: data.businessOrLastName,
            },
            {
              icon: <FileText className="w-4 h-4" />,
              label: "Registry code:",
              value: data.businessOrPersonalCode,
            },
            // {
            //   icon: <CalendarDays className="w-4 h-4" />,
            //   label: "Registration date:",
            //   value: "31.10.1997 (26)",
            // },
            // {
            //   icon: <RotateCcw className="w-4 h-4" />,
            //   label: "Previous names:",
            //   value: "OÜ Süsteemiarenduse Partnerid\nOsaühing Knudsen",
            // },
            // {
            //   icon: <Globe className="w-4 h-4" />,
            //   label: "Field of operation:",
            //   value: "information and communication",
            // },
            // {
            //   icon: <Euro className="w-4 h-4" />,
            //   label: "Capital:",
            //   value: "41 730.00 EUR",
            // },
            // {
            //   icon: <MapPin className="w-4 h-4" />,
            //   label: "Address:",
            //   value:
            //     "Pärnu mnt 158, Kesklinna linnaosa, 11317 Tallinn, Harju maakond",
            // },
            // {
            //   icon: <Activity className="w-4 h-4" />,
            //   label: "Status:",
            //   value: "registered",
            // },
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-6 h-6 mr-2 mt-1 text-blue-800 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1">
                <span className="font-semibold text-gray-600">
                  {item.label}
                </span>
                <span
                  className={`ml-2 ${
                    item.label === "Legal form:" || item.label === "Address:"
                      ? "text-blue-400"
                      : "text-gray-800"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntityDetailView;

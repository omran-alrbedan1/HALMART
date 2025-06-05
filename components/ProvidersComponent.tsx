import React from "react";
import { Phone, Star, MapPin } from "lucide-react";
import Image from "next/image";

type Provider = {
  id: number;
  name: string;
  phone: string;
  rating: number;
  location: string;
  imageUrl: string;
};

type Props = {
  providers?: Provider[];
};

const ProvidersComponent = (props: Props) => {
  const defaultProviders: Provider[] = [
    {
      id: 1,
      name: "محمد أحمد",
      phone: "+966501234567",
      rating: 4.5,
      location: "حلب",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: " عبدالله",
      phone: "+966551112233",
      rating: 5,
      location: " حمص",
      imageUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      name: " خالد",
      phone: "+966551112233",
      rating: 3,
      location: "طرطوس",
      imageUrl: "https://randomuser.me/api/portraits/men/40.jpg",
    },
  ];

  const providers = props.providers || defaultProviders;

  return (
    <div className="space-y-4">
      {providers.map((provider) => (
        <div
          key={provider.id}
          className="flex items-center justify-between p-4  rounded-xl shadow-sm border hover:shadow-md transition-shadow hover:mb-2"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={provider.imageUrl}
                alt={provider.name}
                width={32}
                height={32}
                className="w-16 h-16 rounded-full object-cover border-2 shadow"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-500  text-xs px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow">
                <Star className="w-3 h-3 fill-current" />
                <span>{provider.rating}</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                {provider.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>{provider.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>{provider.location}</span>
              </div>
            </div>
          </div>

          <button className=" text-blue-600 border-blue-600 border px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            تواصل مع المورد
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProvidersComponent;


import React from "react";
import { Client } from "./Clients";
import { PenBoxIcon, Trash } from "lucide-react";
import Image from "next/image";
import StarRating from "@/components/StartRating";

interface ClientCardProps {
  clients: Client[];
  setEditForm: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedClient: React.Dispatch<React.SetStateAction<Client | null>>;
  setRemoveForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const ClientCard: React.FC<ClientCardProps> = ({
  clients,
  setEditForm,
  setSelectedClient,
  setRemoveForm
}) => {
  return (
    <div className=" w-full h-full grid grid-cols-4 gap-2 p-12">
      {clients.map((client) => (
        <div
          key={client.companyName}
          className=" bg-gray-200/50 p-4 rounded-lg"
        >
          <div className="flex justify-end text-OMblue space-x-2 pb-2">
            <PenBoxIcon
              size={15}
              onClick={() => {
                setSelectedClient(client);
                setEditForm(true);
              }}
            />
            <Trash
              color="red"
              size={15}
              onClick={() => {
                setSelectedClient(client);
                setRemoveForm(true);
              }}
            />
          </div>
          <div className="bg-gray-200 py-2 flex justify-center  rounded-md">
            <div className="h-[12rem] aspect-square  rounded-md overflow-hidden ">
              <Image
                src={client.img}
                alt={client.companyName}
                height={400}
                width={400}
                className="h-full aspect-square object-cover"
              />
            </div>
          </div>
          <div className=" my-2">
            <h1 className="text-2xl text-gray-500 font-semibold">
              {client.companyName}
            </h1>
            <h1>{client.comment}</h1>
            <StarRating rating={client.rating} starColor="#ffffff" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientCard;

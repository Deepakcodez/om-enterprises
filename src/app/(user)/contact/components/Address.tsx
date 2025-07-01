import React from "react";
import AddressCard from "./AddressCard";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Address: React.FC = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-4  py-12 text-black">
      <AddressCard
        title="Head Office"
        description="770, Mota Singh Nagar , Near Bus Stand, Jalandhar -144001"
        icon={<HiOutlineOfficeBuilding />}
      />
      <AddressCard
        title="For Marketing"
        description="+91-9872144408

"
        icon={<HiOutlineOfficeBuilding />}
      />
      <AddressCard
        title="For All Queries"
        description="info@omenterprisesgroup.in hrhead@omenterprisesgroup.in"
        icon={<HiOutlineOfficeBuilding />}
      />
      <AddressCard
        title="Support"
        description="+91-1814603134"
        icon={<HiOutlineOfficeBuilding />}
      />
    </div>
  );
};

export default Address;

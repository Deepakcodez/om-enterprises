 export type JobRequirementForm = {
  title: string;
  qualification: string;
  gender: "male" | "female" | "other" | "any";
  skill: string;
  mandatoryskill: string;
  location: string;
};

export type instantCall = {
  name: string,
    email: string,
    phone: string | number,
    subject: string,
    message: string,
}

export type UpdatePlanProps = {
  title: string;
  price: number | string;
  features: string[];
  id: string;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface BLogType {
   _id: string
  image: string
  title: string
  content: string
  url: string
  category: string
  metaDescription: string
  metaTitle: string
  date: string
  createdAt: string
  updatedAt: string
  __v: number
}




export interface CategoryT {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
  __v: number
}
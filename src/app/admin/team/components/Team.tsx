"use client"
import Modal from "@/components/functionality/Modal";
import { PenBoxIcon, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddTeamMate from "./AddTeamMate";
import axios from "axios";
import EditTeamMateDetails from "./EditTeamMateDetails";
import toast from "react-hot-toast";
import TeamSkeleton from "./TeamSkelton";
import RemoveEmp from "./RemoveEmp";
import Image from "next/image";

interface TeamMate {
  _id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  image: string;
}

const Team: React.FC = () => {
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [isOpenEditForm, setIsOpenEditForm] = useState<boolean>(false);
  const [isOpenDeleteForm, setIsOpenDeleteForm] = useState<boolean>(false);
  const [teammates, setTeammates] = useState<TeamMate[]>([]);
  const [selectedTeammate, setSelectedTeammate] = useState<TeamMate | null>(null);

  const allTeammates = async () => {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/api/v1/admin/employee`
      );
      setTeammates(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch Team mates");
      console.error("Error fetching users:", error);
    }
  };
  const handleDeleteClick = (teammate: TeamMate) => {
    setSelectedTeammate(teammate);
    setIsOpenDeleteForm(true);
  };
  const handleEditClick = (teammate: TeamMate) => {
    setSelectedTeammate(teammate); // Set the selected teammate
    setIsOpenEditForm(true); // Open the edit modal
  };

  useEffect(() => {
    allTeammates();
  }, [isOpenEditForm, isOpenDeleteForm, isOpenAddForm]);

  return (
    <div>
      {isOpenAddForm && (
        <Modal isModalOpen={isOpenAddForm} setIsModalOpen={setIsOpenAddForm}>
          <AddTeamMate setOpen={setIsOpenAddForm} />
        </Modal>
      )}

      {isOpenEditForm && selectedTeammate && (
        <Modal isModalOpen={isOpenEditForm} setIsModalOpen={setIsOpenEditForm}>
          <EditTeamMateDetails
            emp={selectedTeammate}
            setOpen={setIsOpenEditForm}
          />
        </Modal>
      )}

      {isOpenDeleteForm && selectedTeammate && (
        <Modal
          isModalOpen={isOpenDeleteForm}
          setIsModalOpen={setIsOpenDeleteForm}
        >
          <RemoveEmp
            empId={selectedTeammate._id}
            setOpen={setIsOpenDeleteForm}
          />
        </Modal>
      )}

      <div className="h-[4rem] w-full flex items-center justify-end px-6 pt-3">
        <Plus
          onClick={() => setIsOpenAddForm(true)}
          size={20}
          className="cursor-pointer float-end bg-gray-300 p-1 rounded-full"
        />
      </div>
      {teammates.length < 1 ? (
        <TeamSkeleton />
      ) : (
        teammates.map((emp) => (
          <div
            key={`emp${emp?._id}`}
            className="flex items-center bg-gray-200 rounded-xl m-2 p-2"
          >
            <Image
              src={emp?.image}
              alt="face"
              className="w-[12rem] aspect-square object-cover rounded-lg bg-gray-500/20"
            />
            <div className="h-[12rem] w-full justify-content-start px-6">
              <h1 className="text-3xl font-semibold text-blue-950/40">
                {emp?.name}
              </h1>
              <p className="text-blue-950/60">{emp?.designation}</p>
              <p className="text-blue-950/60">{emp?.phone}</p>
              <p className="text-blue-950/60">{emp?.email}</p>
            </div>

            <div className="bg-gray-300 rounded-xl flex flex-col items-center justify-center w-24 h-[12rem]">
              <Trash
                onClick={() => handleDeleteClick(emp)}
                className="opacity-50 mb-3 text-red-700 hover:opacity-100 cursor-pointer"
              />
              <PenBoxIcon
                onClick={() => handleEditClick(emp)} // Pass the teammate data
                className="opacity-50 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Team;

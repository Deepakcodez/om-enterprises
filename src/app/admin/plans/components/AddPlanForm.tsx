import Button from "@/components/ui/Button";
import useCookies from "@/hooks/useCookies";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddPlanForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("transactional");
  const [descriptions, setDescriptions] = useState<string[]>([""]);
  const [price, setPrice] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const { getToken } = useCookies();
  const token = getToken();

  const handleDescriptionChange = (index: number, value: string) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const addDescription = () => {
    setDescriptions([...descriptions, ""]);
  };

  const removeDescription = (index: number) => {
    const newDescriptions = descriptions.filter((_, i) => i !== index);
    setDescriptions(newDescriptions);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsAdding(true);
    const planData = { title, descriptions, price, category };

    try {
      const resp = await axios.post(
        `${process.env.BASE_URL}/api/v1/admin/plan/add`,
        planData,
        {
          headers: {
            Authorization: token
          }
        }
      );
      toast.success("Plan added successfully!");
      setTitle("");
      setDescriptions([""]);
      setPrice("");
      setIsAdding(false);
      console.log(resp);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add Plan</h2>

      <label className="block mb-2 ">
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-OMblue/20 "
        >
          <option value="transactional">Transactional</option>
          <option value="promotional">Promotional</option>
        </select>
      </label>

      <label className="block mb-2">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          required
        />
      </label>

      <div className="mb-2">
        <label className="block">Descriptions:</label>
        {descriptions.map((desc, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={desc}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
            <button
              type="button"
              onClick={() => removeDescription(index)}
              className="bg-red-500/20 text-black px-2 py-1 rounded"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addDescription}
          className="bg-OMblue/20 border border-black/20 text-black px-4 py-2 rounded"
        >
          + Add Description
        </button>
      </div>

      <Button
        type="submit"
        title={isAdding ? "Adding..." : "Add"}
        className="w-full  text-white p-2 rounded mt-4 "
      />
    </form>
  );
};

export default AddPlanForm;

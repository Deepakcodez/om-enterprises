
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import WideScreenHandler from "@/components/WideScreenHandler";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import useCookies from "@/hooks/useCookies";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link", "image", "video"],
    ["clean"]
  ]
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "align",
  "code-block",
  "script"
];

const EditBlog: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const { getToken } = useCookies();
  const token = getToken();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const resp = await axios.get(
          `${process.env.BASE_URL}/api/v1/blog/${id}`
        );
        console.log(resp.data.blog);
        const { title, content } = resp.data.blog;
        setTitle(title);
        setContent(content);
      } catch (err) {
        console.log(err);
        toast.error("Failed to fetch blog");
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    if (!title || !content) return toast.error("All fields required!");

    try {
      setIsSaving(true);
      await axios.put(
        `${process.env.BASE_URL}/api/v1/blog/edit/${id}`,
        { title, content },
        {
          headers: {
            authorization: token
          }
        }
      );
      toast.success("Blog updated successfully");
      navigate(`/blog/${title
        .replace(/\?/g, '~')        // only replace question marks
        .replace(/\s+/g, '_')       // convert spaces to underscores
  
        }`);
    } catch (err) {
      console.log(err);

      toast.error("Failed to update blog");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <div className="p-4">
          <Input
            value={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            className="border text-2xl font-bold"
          />
          <div className="mt-4">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
            />
          </div>
          <Button
            title={isSaving ? "Saving..." : "Update Blog"}
            onClick={handleUpdate}
            className="mt-4"
          />
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default EditBlog;

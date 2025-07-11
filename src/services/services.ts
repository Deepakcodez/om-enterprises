
import { instantCall, JobRequirementForm } from "@/types/Types";
import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ;
//Token
const getToken = () => {
  return Cookies.get("token");
};

//get request
const fetchTeamMates = async () => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/api/v1/admin/employee`
    );

    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAllJobs = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/all/jobs`
    );
    console.log(response.data);
    return response.data.jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

const fetchJobQueries = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/get/job/query`,
      {
        headers: {
          authorization: getToken()
        }
      }
    );
    console.log("from fetchjob", response.data.jobs)
    return response.data.jobs;

  } catch (error) {
    console.log(error);
  }
};

const fetchTransactionalPlans = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/plan/get/transactional`
    );
    return response.data.plans;
  } catch (error) {
    console.log(error);
  }
};

const fetchPromotionalPlans = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/plan/get/promotional`
    );
    return response.data.plans;
  } catch (error) {
    console.log(error);
  }
};

const fetchInstantCallBack = async () => {
  try {
    const instantCallbackQueries = await axios.get(
      `${BASE_URL}/api/v1/admin/instant/call`,
      {
        headers: {
          authorization: getToken()
        }
      }
    );
    return instantCallbackQueries.data.data;
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};

const fetchContactQuery = async () => {
  try {
    const instantContactQueries = await axios.get(
      `${BASE_URL}/api/v1/admin/form/contact`,
      {
        headers: {
          authorization: getToken()
        }
      }
    );
    return instantContactQueries.data.data;
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};
const fetchNotification = async () => {
  try {
    const instantContactQueries = await axios.get(
      `${BASE_URL}/api/v1/admin/notification/all`,
      {
        headers: {
          authorization: getToken()
        }
      }
    );
    return instantContactQueries.data.notification;
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};

const fetchAllClients = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/get/client`
    );
    if (response.data.clients.length === 0) {
      return [];
    } else {
      return response.data.clients;
    }
  } catch (error) {
    // toast.error("Failed to fetch clients");
    return [];
    console.error("Error fetching clients:", error);
  }
};
const fetchBlogByTitle = async (title: string) => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/api/v1/blog/title/${title}`
    );
    // setBlog(resp.data.blog);
    return resp.data.blog;
  } catch {
    toast.error("Something went wrong");
  }
};
const fetchBlogById = async (id: string) => {
  try {
    const resp = await axios.get(`${BASE_URL}/api/v1/blog/${id}`);
    // setBlog(resp.data.blog);
    return resp.data.blog;
  } catch {
    toast.error("Something went wrong");
  }
};

const fetchBlogs = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/blog/all`);
    return res.data.blogs;
  } catch (error) {
    console.log(error);
  }
};
//post request
const addJob = async (data: JobRequirementForm) => {
  try {
    await axios.post(`${BASE_URL}/api/v1/admin/create/job`, data, {
      headers: {
        authorization: getToken()
      }
    });
  } catch (error) {
    console.log(error);
  }
  // Add logic to submit the form data (e.g., API call)
};

const instantCallApiCall = async (data: instantCall) => {
  try {
    const resp = await axios.post(
      `${BASE_URL}/api/v1/admin/instant/call`,
      data
    );
    if (resp.statusText == "OK") {
      toast.success("query sent");
    }
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};

const handleUpdatePlan = async (
  id: string,
  data: { title: string; price: string | number; descriptions: string[] }
) => {
  console.log(id);
  try {
    await axios.put(
      `${BASE_URL}/api/v1/admin/plan/update/${id}`,
      data,
      {
        headers: {
          authorization: getToken()
        }
      }
    );
    toast.success("Plan updated successfully");
  } catch (error) {
    console.log(error);
  }
};

const delelteBlog = async (id: string) => {
  try {
    await axios.delete(`${BASE_URL}/api/v1/blog/delete/${id}`, {
      headers: {
        authorization: getToken()
      }
    });
    toast.success("Blog deleted successfully");
  } catch {
    toast.error("Something went wrong");
  }
};

const uploadImageAndGetUrl = async (file: FormData) => {
  try {
    const resp = await axios.post(`http://localhost:3001/api/v1/blog/imgtourl`, file, {

      headers: {
        authorization: getToken()
      }
    });
    return resp.data.imageUrl
  } catch (error) {
    console.log(error)
    toast.error("Something went wrong");
  }
};

const handleCreateCategory = async (categoryName: string) => {
  if (categoryName === "") {
    toast.error("Category Name is required")
    return
  }
 try {
   const resp = await axios.post(`http://localhost:3001/api/v1/blog/create/category`, { name: categoryName }, {
 
     headers: {
       authorization: getToken()
     }
   })
   toast.success("category created")
 } catch  {
   toast.error("Something went wrong");
 }

}


const fetchCategory = async () => {
  try {
    const resp = await axios.get(`http://localhost:3001/api/v1/blog/categories`, {
      headers: {
        authorization: getToken()
      }
    })
    console.log(resp);
    
    return resp.data.categories 
  } catch (error) {
    toast.error("Something went wrong");
    return []
  }
}

//tansstack get queries

const getTeamMates = () => {
  return queryOptions({
    queryKey: ["teamMates"],
    queryFn: fetchTeamMates,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};

const getJobs = () => {
  return queryOptions({
    queryKey: ["jobs"],
    queryFn: fetchAllJobs,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};

const getJobQueries = () => {
  return queryOptions({
    queryKey: ["jobqueries"],
    queryFn: fetchJobQueries,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};

const getTransactionalPlans = () => {
  return queryOptions({
    queryKey: ["transactionalPlans"],
    queryFn: fetchTransactionalPlans,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};

const getPromotionalPlans = () => {
  return queryOptions({
    queryKey: ["promotionalPlans"],
    queryFn: fetchPromotionalPlans,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};

const getContactUsQuery = () => {
  return queryOptions({
    queryKey: ["contactQueries"],
    queryFn: fetchContactQuery,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};

const getInstantCallBackQuery = () => {
  return queryOptions({
    queryKey: ["instantCallbacks"],
    queryFn: fetchInstantCallBack,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};
const getNotificationQuery = () => {
  return queryOptions({
    queryKey: ["notification"],
    queryFn: fetchNotification,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};
const getClientsQuery = () => {
  return queryOptions({
    queryKey: ["clients"],
    queryFn: fetchAllClients,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};
const getBlogsQuery = () => {
  return queryOptions({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};
const getBlogsCategory = () => {
  return queryOptions({
    queryKey: ["blogsCategory"],
    queryFn: fetchCategory,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
};

export {
  addJob,
  getTeamMates,
  getJobs,
  getJobQueries,
  getTransactionalPlans,
  handleUpdatePlan,
  getPromotionalPlans,
  delelteBlog,
  getInstantCallBackQuery,
  getContactUsQuery,
  instantCallApiCall,
  getNotificationQuery,
  getClientsQuery,
  getBlogsQuery,
  fetchBlogById,
  fetchBlogByTitle,
  uploadImageAndGetUrl,
  handleCreateCategory,
  getBlogsCategory,
};


import Career from "./components/Career";
// import { Job } from "./components/Job";


export default async function CareerPage() {

  return (
    <main>
      {/* SSR-rendered job list for SEO */}
      {/* <div className="hidden" aria-hidden="true">
        {jobs.map((job: Job) => (
          <div key={job._id}>
            <h2 >{job.title}</h2>
            <p>{job.qualification}</p>
                 <p>{job.skill}</p>
            <span>{job.location}</span>
          </div>
        ))}
      </div> */}

      {/* Client-side component */}
      <Career  />
    </main>
  );
}
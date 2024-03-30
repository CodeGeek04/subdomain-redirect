interface Props {
  host: string | null;
}

const Client: React.FC<Props> = ({ host }) => {
  //Get job openings from the server
  const jobOpenings = [
    {
      title: "Software Engineer",
      location: "Remote",
      salary: "$100,000",
      clientName: "google",
    },
    {
      title: "Product Manager",
      location: "San Francisco, CA",
      salary: "$120,000",
      clientName: "facebook",
    },
    {
      title: "Data Scientist",
      location: "New York, NY",
      salary: "$130,000",
      clientName: "amazon",
    },
    {
      title: "Software Engineer 2",
      location: "Remote",
      salary: "$100,000",
      clientName: "google",
    },
    {
      title: "Product Manager 2",
      location: "San Francisco, CA",
      salary: "$120,000",
      clientName: "facebook",
    },
    {
      title: "Data Scientist 2",
      location: "New York, NY",
      salary: "$130,000",
      clientName: "amazon",
    },
    {
      title: "Software Engineer 3",
      location: "Remote",
      salary: "$100,000",
      clientName: "google",
    },
    {
      title: "Product Manager 3",
      location: "San Francisco, CA",
      salary: "$120,000",
      clientName: "facebook",
    },
    {
      title: "Data Scientist 3",
      location: "New York, NY",
      salary: "$130,000",
      clientName: "amazon",
    },
    {
      title: "Software Engineer 4",
      location: "Remote",
      salary: "$100,000",
      clientName: "google",
    },
    {
      title: "Product Manager 4",
      location: "San Francisco, CA",
      salary: "$120,000",
      clientName: "facebook",
    },
    {
      title: "Data Scientist 4",
      location: "New York, NY",
      salary: "$130,000",
      clientName: "amazon",
    },
  ];
  return (
    <div>
      <h2>Client Name: {host}</h2>
      <h3>Job Openings: </h3>
      <ul>
        {jobOpenings
          .filter((job) => job.clientName === host)
          .map((job, index) => (
            <li key={index}>
              <h4>{job.title}</h4>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
              <p>Client: {job.clientName}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Client;

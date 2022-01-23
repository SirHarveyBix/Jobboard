import { jobList } from '../fakeData.js';

const resolvers = {
  Query: {
    getAllJobs() {
      return jobList;
    },
  },
  Mutation: {
    createJob(_parent, { data }) {
      const newJob = { ...data };
      jobList.push(newJob);
      return newJob;
    },
    deleteJob(_parent, { data: { id: id } }) {
      const job = jobList.filter((item) => String(item.id) === String(id));
      const removedJob = job.shift();
      return removedJob;
    },
  },
};
export default resolvers;

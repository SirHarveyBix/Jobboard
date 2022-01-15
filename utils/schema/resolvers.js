import { jobList } from '../fakeData.js';
import { v4 as uuidv4 } from 'uuid';

const resolvers = {
  Query: {
    getAllJobs() {
      return jobList;
    },
  },

  Mutation: {
    createJob(_parent, args) {
      const newJob = { id: uuidv4(), ...args };
      jobList.push(newJob);
      return newJob;
    },
  },
};
export default resolvers;

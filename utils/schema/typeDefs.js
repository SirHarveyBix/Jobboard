import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Job {
    id: ID
    publishedAt: String
    coverImage: String
    companyLogo: String
    companyName: String
    title: String
    contractType: String
    localization: String
  }
  # Inputs :
  input CreateJobInput {
    id: ID
    coverImage: String
    companyLogo: String
    companyName: String
    title: String
    contractType: String
    localization: String
    publishedAt: String
  }
  input JobInput {
    id: ID!
  }
  # Query :
  type Query {
    getAllJobs: [Job!]!
  }
  # Mutations :
  type Mutation {
    createJob(data: CreateJobInput): Job
    deleteJob(data: JobInput): Job!
  }
`;
export default typeDefs;

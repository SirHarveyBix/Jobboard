import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Job {
    id: ID!
    coverImage: String!
    companyLogo: String!
    companyName: String!
    title: String!
    contractType: String!
    localization: String!
    publishedAt: String!
  }
  # Inputs :
  input CreatJobInput {
    id: ID!
    coverImage: String!
    companyLogo: String!
    companyName: String!
    title: String!
    contractType: String!
    localization: String!
    publishedAt: String!
  }
  # Query :
  type Query {
    getAllJobs: [Job!]!
  }
  # Mutations :
  type Mutation {
    createJob(
      id: ID!
      coverImage: String!
      companyLogo: String!
      companyName: String!
      title: String!
      contractType: String!
      localization: String!
      publishedAt: String!
    ): Job!
  }
`;
export default typeDefs;

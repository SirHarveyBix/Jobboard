import { gql } from '@apollo/client';

export const CREATE_JOB = gql`
  mutation CreateJob($data: CreateJobInput) {
    createJob(data: $data) {
      id
      publishedAt
      title
      companyName
      contractType
      localization
      coverImage
      companyLogo
    }
  }
`;

export const DELETE_JOB = gql`
  mutation DeleteJob($data: JobInput) {
    deleteJob(data: $data) {
      id
      title
      companyName
    }
  }
`;

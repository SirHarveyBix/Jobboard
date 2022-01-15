import Head from 'next/head';
import { Header } from '../components/Header';
import { gql } from '@apollo/client';
import { client } from './api/apollo';
import { JobList } from '../components/Home/JobList';

export default function Home(props) {
  const { allJobs } = props;
  return (
    <>
      <Head>
        <title>Jobboard</title>
        <meta name="techChallenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <JobList allJobs={allJobs} />
    </>
  );
}

export async function getStaticProps() {
  const allJobs = [];
  client
    .query({
      query: gql`
        query GetAllJobs {
          getAllJobs {
            id
            coverImage
            companyLogo
            companyName
            title
            contractType
            localization
            publishedAt
          }
        }
      `,
    })
    .then((response) => {
      const result = response.data.getAllJobs;
      allJobs.push(result);
      return allJobs;
    });

  return {
    props: {
      allJobs,
    },
  };
}

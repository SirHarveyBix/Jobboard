import { Container, Delete } from './style';
import { JobItem } from '../JobItem';
import { UserContext } from '../../../hook/context/UserProvider';
import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_JOB } from '../../../lib/graphql/mutation';

export const JobList = (props) => {
  const { allJobs } = props;
  const { isConnected } = useContext(UserContext);
  const [deleteJob, { data, error, loading }] = useMutation(DELETE_JOB);

  const handleDelete = (id) => {
    deleteJob({ variables: { data: { id: id } } });
  };
  return (
    <Container>
      {!allJobs
        ? 'Loading'
        : allJobs?.map((item) => (
            <>
              {isConnected ? (
                <Container key={item.id}>
                  <Delete onClick={() => handleDelete(item.id)}>Supprimer</Delete>
                  <JobItem {...item} />
                </Container>
              ) : (
                <JobItem key={item.id} {...item} />
              )}
            </>
          ))}
    </Container>
  );
};

import { Container, Delete } from './style';
import { JobItem } from '../JobItem';
import { UserContext } from '../../../hook/context/UserProvider';
import { useContext } from 'react';

export const JobList = (props) => {
  const { allJobs } = props;
  const { isConnected } = useContext(UserContext);

  return (
    <Container>
      {!allJobs
        ? 'Loading'
        : allJobs?.map((item) => (
            <>
              {isConnected ? (
                <Container key={item.id}>
                  <Delete onClick={() => console.log(item.id)}>Supprimer</Delete>
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

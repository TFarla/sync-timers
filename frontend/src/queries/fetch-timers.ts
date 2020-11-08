import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GetAllTimers, GetAllTimers_allTimers, QueryResult, QueryState } from '.';

export const ALL_TIMERS = gql`
  query GetAllTimers {
      allTimers {
        id,
        members {
            id,
            name
        }
      }
    }
`;

export const useTimers = () => {
    const [state, setState] = useState<QueryResult<GetAllTimers_allTimers[]>>({ result: [], state: QueryState.Loading });
    const { data, error, loading } = useQuery<GetAllTimers>(ALL_TIMERS);

    useEffect(() => {
        if (data?.allTimers && data?.allTimers.map) {
            setState({ result: data.allTimers, state: QueryState.Done });
        }

        if (error) {
            setState({ result: [], state: QueryState.Error });
        }

        if (loading) {
            setState({ result: [], state: QueryState.Loading });
        }
    }, [data, error, loading]);

    return state;
}

export default ALL_TIMERS;
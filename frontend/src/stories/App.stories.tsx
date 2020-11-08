import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import Timers from '../components/timers';
import { ALL_TIMERS } from '../queries';

const mocks: ReadonlyArray<MockedResponse> = [
    {
        request: {
            query: ALL_TIMERS 
        },
        result: {
            data: {
                allTimers: [
                    {
                        id: "123",
                        members: [
                            {
                                id: "456",
                                name: "Foo Bar"
                            }
                        ]
                    }
                ]
            }
        }
    }
];

const story = {
    title: 'Components/Timers',
    component: Timers
};

export const Test = () => <MockedProvider mocks={mocks} addTypename={false}><Timers/></MockedProvider>

export default story;
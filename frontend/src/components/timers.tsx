import React from "react";
import { QueryState } from "../queries";
import { useTimers } from "../queries/fetch-timers";

export const Timers = () => {
    const { result: timers, state } = useTimers();
    if (state === QueryState.Error) {
        return <span>errors</span>;
    }

    return (
        <ul>
            {
                timers.map((timer, key) =>
                    <li key={key}>{timer.id}</li>)
            }
        </ul>
    );
}

export default Timers;
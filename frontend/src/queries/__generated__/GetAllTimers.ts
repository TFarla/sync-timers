/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllTimers
// ====================================================

export interface GetAllTimers_allTimers_members {
  __typename: "User";
  id: string | null;
  name: string | null;
}

export interface GetAllTimers_allTimers {
  __typename: "Timer";
  id: string | null;
  members: GetAllTimers_allTimers_members[] | null;
}

export interface GetAllTimers {
  allTimers: GetAllTimers_allTimers[] | null;
}

import { decryption } from "../Encryption/decrypt";

export const userActivatedMemberFunction = (builder) => {
  return builder.query({
    query: (args) =>
      `/extra/${args?.uid}/active/member/role?active_member_role=${
        args?.role ?? ""
      }`,
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const staffAllDesignationListFunction = (builder) => {
  return builder.query({
    query: (sid) => `/user/staffdesignationdata/${sid}`,
    transformResponse: (response) => {
      let encrypt = decryption(response?.encrypt);
      return encrypt?.staff;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const studentAllDesignationListFunction = (builder) => {
  return builder.query({
    query: (sid) => `/user/studentdesignationdata/${sid}`,
  });
};
export const userMemberAllAccountFunction = (builder) => {
  return builder.query({
    query: (uid) => `/user/${uid}/staff/student/role`,
    transformResponse: (response) => response?.role_query,
  });
};

export const userMemberAppliedAllApplicationAccountFunction = (builder) => {
  return builder.query({
    query: (uid) => `/user/${uid}/all/application/query`,
    transformResponse: (response) => response?.all_apps,
  });
};

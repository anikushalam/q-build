const postUrl = "/api/v1";

// -------------------Activate Event by Institute Admin--------------------------------------------
export const activateEventDept = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/ins/${data.id}/event/manager/query`,
      method: "POST",
      body: data.fActivate,
    }),
  });
};

export const editEventAdnSeminarFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/edit/staff/event/manager/staff/${data.osid}?nsid=${data.nsid}`,
      method: "PATCH",
    }),
  });
};

// -------------------Get Event Dept Info--------------------------------------------

export const eventDeptInfo = (builder) => {
  return builder.query({
    query: (eid) => `${postUrl}/event/process/manager/${eid}`,
  });
};

// -------------------Get All Event List--------------------------------------------

export const alleventList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/event/process/manager/${data.eid}/all/events?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get All Seminars List--------------------------------------------

export const allSeminarList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/event/process/manager/${data.eid}/all/seminars?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get All Event List of one dept--------------------------------------------

export const oneDeptEventList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/event/process/department/${data.did}/all/events?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get All Seminars List of one dept--------------------------------------------

export const oneDeptSeminarList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/event/process/department/${data.did}/all/seminars?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get All Election List of one dept--------------------------------------------

export const oneDeptElectionList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/election/event/all/${data.sid}/query?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get One Event Info--------------------------------------------

export const singleEventInfo = (builder) => {
  return builder.query({
    query: (evid) => `${postUrl}/event/process/one/event/${evid}`,
  });
};

// -------------------Get One Seminar Info--------------------------------------------

export const singleSeminarInfo = (builder) => {
  return builder.query({
    query: (smid) => `${postUrl}/event/process/one/seminar/${smid}`,
  });
};

// -------------------Create Event--------------------------------------------

export const createNewEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/manager/${data.eid}/new/event`,
      method: "POST",
      body: data.eventData,
    }),
  });
};

// -------------------Create Seminar--------------------------------------------

export const createNewSeminar = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/manager/${data.eid}/new/seminar`,
      method: "POST",
      body: data.seminarData,
    }),
  });
};

export const deleteEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/one/event/${data.eid}/destroy`,
      method: "DELETE",
    }),
  });
};

export const deleteSeminar = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/one/seminar/${data.smid}/destroy`,
      method: "DELETE",
    }),
  });
};

export const editEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/one/event/${data.eid}/edit`,
      method: "PATCH",
      body: data.eventData,
    }),
  });
};

export const editSeminar = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/one/seminar/${data.smid}/edit`,
      method: "PATCH",
      body: data.seminarData,
    }),
  });
};

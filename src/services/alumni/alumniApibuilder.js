const postUrl = "/api/v1";

// -------------------Activate Alumni by Institute Admin--------------------------------------------
export const activateAlumni = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/alumini/ins/${data.id}/alumini/query`,
      method: "POST",
      body: data.passegeData,
    }),
  });
};

export const alumniEidtActivateFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/edit/staff/alumini/staff/${data.osid}?nsid=${data.nsid}`,
      method: "PATCH",
    }),
  });
};
// -------------------Get Alumni Info--------------------------------------------

export const alumniInfo = (builder) => {
  return builder.query({
    query: (aid) => `${postUrl}/alumini/${aid}/dashboard/query`,
  });
};

// -------------------Alumni Registration--------------------------------------------

export const alumniReg = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/alumini/${data.aid}/new/register`,
      method: "POST",
      body: data.alumniData,
    }),
  });
};

// -------------------Get Alumni Reg List--------------------------------------------

export const alumniRegList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/alumini/${data.aid}/all/registration/array?page=${data.page}&limit=10&status=${data.status}`,
  });
};

// -------------------Give Certificate--------------------------------------------

export const giveCertificate = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/alumini/${data.rid}/give/certificate`,
      method: "PATCH",
    }),
  });
};

// -------------------Get Prominent Alumni List--------------------------------------------

export const ProminentAlumniList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/alumini/${data.aid}/all/prominent/array?page=${data.page}&limit=10`,
  });
};

// -------------------Add Story--------------------------------------------

export const addStory = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/alumini/${data.aid}/new/prominent/query`,
      method: "POST",
      body: data.storyData,
    }),
  });
};

// -------------------Get Feedback List--------------------------------------------

export const feedbackList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/alumini/${data.aid}/all/feed/question/array?page=${data.page}&limit=10`,
  });
};

// -------------------Add Feedback Poll--------------------------------------------

export const addFeedbackPoll = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/alumini/question/${data.aid}`,
      method: "POST",
      body: data.pollData,
    }),
  });
};

const postUrl = "/api/v1";
var id = localStorage.getItem("user");

// -------------------Activate Sports and Arts by Institute Admin--------------------------------------------
export const activateSportsAndArts = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/ins/${id}/staff/${data.sid}`,
      method: "POST",
    }),
  });
};

// ------------------- Sports and Arts Detail Institute Admin--------------------------------------------

export const fetchSportsArts = (builder) => {
  return builder.query({
    query: (spid) => `${postUrl}/sport/arts/detail/${spid}`,
  });
};

// -------------------Create Sports Class by Institute Admin--------------------------------------------
export const createSportsClass = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/ins/${id}/sport/${data.sid}/class`,
      method: "POST",
      body: data.body,
    }),
  });
};

// -------------------Sports Arts Dept Profile Photo --------------------------------------------
export const sportsArtsProfilePhotoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/all-images/${data.sid}/sport/photo`,
      method: "PATCH",
      body: data.profile,
    }),
  });
};

// -------------------Sports Arts Class Profile Photo --------------------------------------------
export const sportsArtsClassProfilePhotoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/all-images/${data.sid}/sport/class/photo`,
      method: "PATCH",
      body: data.profile,
    }),
  });
};

// -------------------Sports Arts Dept Cover Photo --------------------------------------------

export const sportsArtsCoverPhotoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/all-images/${data.sid}/sport/cover`,
      method: `PATCH`,
      body: data.cover,
    }),
  });
};

// -------------------Sports Arts Dept Cover Photo --------------------------------------------

export const sportsClassCoverPhoto = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/all-images/${data.sid}/sport/class/cover`,
      method: `PATCH`,
      body: data.cover,
    }),
  });
};

// -------------------Create Sports Event by Sports Head Admin--------------------------------------------
export const createSportsEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/${data.sid}/event`,
      method: "POST",
      body: data.eventData,
    }),
  });
};

// -------------------Get Sports Event Details--------------------------------------------

export const sportsEventDetails = (builder) => {
  return builder.query({
    query: (eid) => `${postUrl}/sport/arts/event/detail/${eid}`,
  });
};

// -------------------Get Sports Class Details--------------------------------------------

export const sportsClassDetails = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/sport/arts/class/detail/${cid}`,
  });
};

// -------------------Approved Student Array--------------------------------------------

export const studentApprovedArray = (builder) => {
  return builder.query({
    query: (insId) => `${postUrl}/ins/${insId}/approve-student/list`,
  });
};

// -------------------Add Student by Sport class Admin--------------------------------------------

export const addStudentInSportClass = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/class/${data.cid}/student/add`,
      method: `POST`,
      body: data,
    }),
  });
};

// -------------------Remove Student by Sport class Admin--------------------------------------------

export const rmoveStudentInSportClass = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/class/${data.cid}/student/remove`,
      method: `POST`,
      body: data,
    }),
  });
};

// -------------------Create New Team --------------------------------------------

export const createSportsTeam = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/class/team`,
      method: `POST`,
      body: data,
    }),
  });
};

// -------------------Create New Intra Match (Intra)--------------------------------------------
export const createNewMatchIntra = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/event/${data.eid}/match/intra`,
      method: "POST",
      body: data.matchData,
    }),
  });
};

// -------------------Create New Inter Match (Inter)--------------------------------------------
export const createNewMatchInter = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/event/${data.eid}/match/inter`,
      method: "POST",
      body: data.matchData,
    }),
  });
};

// -------------------All Match List--------------------------------------------

export const AllMatchList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/event/${data.eid}/match?page=${data.page}&limit=10`,
  });
};

// -------------------Ongoing Event List--------------------------------------------

export const OngoingEventList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/detail/${data.id}/event?page=${data.page}&limit=10&status=Upcoming`,
  });
};

// -------------------Completed Event List--------------------------------------------

export const CompletedEventList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/detail/${data.id}/event?page=${data.page}&limit=10&status=Completed`,
  });
};

// -------------------All Event Class List--------------------------------------------

export const AllEventClassList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/detail/${data.sid}/all/class?page=${data.page}&limit=10`,
  });
};

// ------------------- Match Details--------------------------------------------

export const MatchDetails = (builder) => {
  return builder.query({
    query: (mid) => `${postUrl}/sport/arts/match/detail/${mid}`,
  });
};

// -------------------Edit Intra Match Result (Individual)--------------------------------------------
export const editIntraMatchResultIndividual = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/match/${data.mid}/update/intra/individual`,
      method: "POST",
      body: data.resultData,
    }),
  });
};

// -------------------Edit Intra Match Result (Team)--------------------------------------------
export const editIntraMatchResultTeam = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/match/${data.mid}/update/intra/team`,
      method: "POST",
      body: data.resultData,
    }),
  });
};

// -------------------Edit Inter Match Result (Team)--------------------------------------------
export const editInterMatchResultTeam = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/match/${data.mid}/update/inter/team`,
      method: "POST",
      body: data.resultData,
    }),
  });
};

// -------------------Edit Inter Match Result (Individual)--------------------------------------------
export const editInterMatchResultIndividual = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/match/${data.mid}/update/inter/individual`,
      method: "POST",
      body: data.resultData,
    }),
  });
};

// -------------------Edit Intra Match Result (Free Style)--------------------------------------------
export const editIntraMatchResultFreeStyle = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/match/${data.mid}/update/intra/free`,
      method: "POST",
      body: data.resultData,
    }),
  });
};

// -------------------Edit Inter Match Result (Free Style)--------------------------------------------
export const editInterMatchResultFreeStyle = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/sport/arts/match/${data.mid}/update/inter/free`,
      method: "POST",
      body: data.resultData,
    }),
  });
};

// ------------------- One Class Student List--------------------------------------------

export const allClassStudentList = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/sport/arts/class/${cid}/all/student`,
  });
};

// ------------------- One Class Team List--------------------------------------------

export const allClassTeamList = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/sport/arts/class/${cid}/all/team`,
  });
};

// ------------------- Student Extra Skill Data--------------------------------------------

export const studentExtraSkillData = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/sport/arts/student/event/query/${sid}/all`,
  });
};

// ------------------- Student Match List--------------------------------------------

export const studentMatchList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/student/event/query/${data.sid}/all/match/${data.eid}`,
  });
};

// GET
// /api/v1/sport/arts/{Student}/{Profile}

// ------------------- Sport Class Student List--------------------------------------------

export const sportClassStudentList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/class/${data.cid}/all/student?page=${data.page}&limit=10`,
  });
};

// ------------------- Sport Class Team List--------------------------------------------

export const sportClassTeamList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/class/${data.cid}/all/team?page=${data.page}&limit=10`,
  });
};

// ------------------- Sport Class  List in Student--------------------------------------------

export const sportClassListStudent = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/student/class/${data.sid}/query?page=${data.page}&limit=10`,
  });
};

// ------------------- Sport Class  List in Student--------------------------------------------

export const sportClassTeamStudent = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/sport/arts/student/team/${data.cid}/query?sid=${data.sid}`,
  });
};

// ------------------- Sport Class  List in Student--------------------------------------------

export const sportsTeamDetailsStudent = (builder) => {
  return builder.query({
    query: (data) => `${postUrl}/sport/arts/team/${data.tid}/query`,
  });
};

const postUrl = "/api/v1";

// -------------------Activate Library by Institute Admin--------------------------------------------
export const activateLibrary = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/library/activate/${data.id}`,
      method: "POST",
      body: data.activate,
    }),
  });
};

// -------------------Edit Library by Institute Admin--------------------------------------------
export const editLibrary = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/edit/staff/library/staff/${data.osid}?nsid=${data.nsid}`,
      method: "PATCH",
    }),
  });
};

// -------------------Get Library Info--------------------------------------------

export const libraryInfo = (builder) => {
  return builder.query({
    query: (lid) => `${postUrl}/library/info/${lid}`,
  });
};

// -------------------Get All Books List--------------------------------------------

export const allBookList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/books/${data.lid}?&search=${data.search}&page=${
        data.page
      }&limit=10&flow=${data.flow ? data.flow : ""}`,
  });
};

// -------------------Add Book--------------------------------------------

export const addLibraryBook = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/library/books/${data.lid}`,
      method: "POST",
      body: data.bookData,
    }),
  });
};

// -------------------Get Each Book Details--------------------------------------------

export const bookDetails = (builder) => {
  return builder.query({
    query: (bid) => `${postUrl}/library/book/detail/${bid}`,
  });
};

// -------------------Update Book Data--------------------------------------------

export const updateLibraryBook = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/library/book/detail/${data.bid}`,
      method: "PATCH",
      body: data.editData,
    }),
  });
};

// -------------------Get All IsssuedBooks List--------------------------------------------

export const allIssuedBookList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/issued/${data.lid}?page=${data.page}&limit=10`,
  });
};

// -------------------Issue a Book --------------------------------------------

export const IssueLibraryBook = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/library/issued/${data.lid}`,
      method: "PATCH",
      body: data.issueData,
    }),
  });
};

// -------------------Get All collected book List--------------------------------------------

export const allCollectedBookList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/collected/${data.lid}?page=${data.page}&limit=10`,
  });
};

// -------------------Collect Book Data--------------------------------------------

export const collectLibraryBook = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/library/collected/${data.lid}`,
      method: "PATCH",
      body: data.collectData,
    }),
  });
};

// -------------------Get Collected Book Details--------------------------------------------

export const collectedBookDetails = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/library/onecollected/${cid}`,
  });
};

// -------------------Get All Members  List--------------------------------------------

export const allMembersList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/members/${data.lid}?page=${data.page}&limit=10`,
  });
};

// -------------------Get All isued or borrowed book List of single member--------------------------------------------

export const singleMembersBookList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/member/${data.sid}/issued?page=${data.page}&limit=10`,
  });
};

// -------------------Get All isued or borrowed book List of single member--------------------------------------------

export const singleMemberHistory = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/member/${data.sid}/history?page=${data.page}&limit=10`,
  });
};

// -------------------Library Dept Cover Photo --------------------------------------------

export const libraryCoverPhoto = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/all-images/${data.lid}/library/cover`,
      method: `PATCH`,
      body: data.file,
    }),
  });
};

// -------------------Fine History Members List--------------------------------------------

export const fineHistoryMembersList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/all/fine/history/${data.lid}?page=${data.page}&limit=10`,
  });
};

// -------------------Submit Fine --------------------------------------------

export const submitFineRequest = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/finance/${data.lid}/library/request`,
      method: `POST`,
      body: data.fine,
    }),
  });
};

export const libraryGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (lid) => `${postUrl}/site/info/library/${lid}`,
  });
};

export const libraryUpdateSiteInfoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/site/info/library/${data.lid}`,
      method: `PATCH`,
      body: data.updateSiteInfo,
    }),
  });
};

export const libraryFineChargeFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/library/fine/charges/${data.lid}/query?page=${data.page}&limit=${data.limit}&flow=${data.flow}`,
  });
};
// for collect book from fine tab
export const libraryFineCollectBookFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/library/fine/${data.lid}/query/collect/${data.sid}/offline/${data.bid}`,
      method: "PATCH",
      body: data.collectData,
    }),
  });
};

export const addExcelBookByLibraryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/excel/to/json/${data.lid}/add/book/query`,
      method: "PATCH",
      body: data.excelFile,
    }),
  });
};

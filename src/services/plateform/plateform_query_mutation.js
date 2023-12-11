const subUrl = "/api/v1";

export const trendingPlateformQuestionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrl}/feed/filter/by/answer?page=${data.page}&limit=${data.limit}`,
  });
};

export const affiliatedSearchFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${subUrl}/manage/admin/all?search=${data.search}&page=${data.page}&limit=${data.limit}`,
  });
};

export const affiliatedRequestFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrl}/manage/admin/${data.mid}/add`,
      method: `${method}`,
      body: data.InstituteId,
    }),
  });
};

export const allDomainPlateformFunction = (builder) => {
  return builder.query({
    query: () => `${subUrl}/admin/all/sub/domain/array`,
  });
};

export const linkedInstituteDomainFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subUrl}/admin/link/sub/domain/${data.subId}?insId=${data.insId}`,
      method: `${method}`,
    }),
  });
};

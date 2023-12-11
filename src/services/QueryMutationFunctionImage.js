const postUrl = "/api/v1/all-images";
const baseUrl = "/api/v1";

export const getImageFunction = (builder) => {
  return builder.query({
    query: (key) => `${postUrl}/${key}`,
  });
};

export const profilePhotoInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/institute/photo`,
      method: `${method}`,
      body: data.photo,
    }),
  });
};

export const coverPhotoIntituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/institute/cover`,
      method: `${method}`,
      body: data.cover,
    }),
  });
};

export const profilePhotoUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/user/photo`,
      method: `${method}`,
      body: data.photo,
    }),
  });
};

export const uploadUserAndStudentProfileFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/profile/upload/query?suid=${data.id}&role=${data.role}`,
      method: `${method}`,
      body: data.photo,
    }),
  });
};

export const coverPhotoUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/user/cover`,
      method: `${method}`,
      body: data.cover,
    }),
  });
};

export const profilePhotoDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.did}/department/photo`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const coverPhotoDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.did}/department/cover`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const profilePhotoClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.cid}/class/photo`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const coverPhotoClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.cid}/class/cover`,
      method: `${method}`,
      body: data,
    }),
  });
};

export let imageExtension = [
  ".jpg",
  ".jpeg",
  ".jpe",
  ".pjpeg",
  ".pjp",
  ".apng",
  ".jif",
  ".jfif",
  ".jfi",
  ".png",
  ".gif",
  ".webp",
  ".tiff",
  ".tif",
  ".psd",
  ".heif",
  ".heic",
  ".svg",
  ".svgz",
  ".ai",
  ".eps",
  ".avif",
];

export const imageExtensionVerify = (args) => {
  let flag = false;
  for (let ob of imageExtension) {
    if (args?.includes(ob)) {
      flag = true;
      break;
    } else {
    }
  }

  return flag;
};

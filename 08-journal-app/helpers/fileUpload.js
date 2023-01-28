export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dy8ukvwe2/image/upload";

  const formData = new FormData();
  formData.append("upload_preset", "reactCourse");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("Image can not be uploaded");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

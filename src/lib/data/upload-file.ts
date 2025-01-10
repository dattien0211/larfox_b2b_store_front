import CleanError from "@lib/util/clean-error"
import client from "@lib/util/client"

export interface UploadedFile {
  id: string
  url: string
}

interface UploadFileResponse {
  files: UploadedFile[]
}

const uploadFile = async (
  token: string,
  formData: FormData
): Promise<UploadFileResponse> => {
  try {
    const res = await client.post<UploadFileResponse>(
      "/store/upload-file",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )

    return res.data
  } catch (error) {
    throw new CleanError("Lỗi khi upload ảnh. Vui lòng thử lại sau!")
  }
}

export default uploadFile

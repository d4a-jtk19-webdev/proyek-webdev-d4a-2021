import baseHttp from "./http"
import errorHandler
  from "@/datasource/network/errorHandler"

const MAHASISWA_URL = "/mahasiswa"

const getProgressSubtugasByNIM = async (NIM, startDur, endDur) => {
  try {
    const mahasiswaURL = MAHASISWA_URL + `/getProgressSubtugasMahasiswaByNIM/${NIM}?start=${startDur}&end=${endDur}`
    const result = await baseHttp.get(mahasiswaURL)
    return result.data.data.progressSubtugas
  } catch (e) {
    return await errorHandler(e)
  }
}

export default getProgressSubtugasByNIM

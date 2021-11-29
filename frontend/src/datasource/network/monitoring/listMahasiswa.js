// import baseHttp from "./http"
// import errorHandler
//   from "@/datasource/network/errorHandler"

// const MONITORING_URL = "/monitoring"

const getMahasiswa = async () => {
  // try {
  //   const monitoringURL = MONITORING_URL + ``
  //   const result = await baseHttp.get(monitoringURL)
  //   return result.data.data
  // } catch (e) {
  //   return await errorHandler(e)
  // }
  return [
    {
      nama: "Alvira Putrina Daradjat",
      nim: "191524014",
      foto: "https://akademik.polban.ac.id/fotomhsrekap/181524002.jpg",
      email: "alvira.putrina.tif418@polban.ac.id",
      nomor_ponsel: "08124125163",
      pemahaman: "70%",
      tugas: "100%"
    }
  ]
}

export default {
  getMahasiswa
}

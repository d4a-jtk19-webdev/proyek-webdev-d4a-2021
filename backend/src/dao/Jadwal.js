import Jadwal from '@proyek3/postgres-database/models/Jadwal'

export const getJadwalByWalDos = async (id_perkuliahan) => {
  try{
    const jadwal = await Jadwal.findAll({
      where:{
        // hari: hari,
        id_perkuliahan: id_perkuliahan
      }
    })
    return jadwal
  }catch(error){
    return Promise.reject(new Error('Gagal mendapatkan jadwal'))
  }
}
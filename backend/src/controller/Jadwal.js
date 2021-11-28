import * as JadwalDAO from '../dao/Jadwal'

export const getJadwalByWalDos = async (req, res, next) => {
    try{
      // const hari = req.query.hari
      const id_perkuliahan = parseInt(req.params.id_perkuliahan)
      const resultJadwal = await JadwalDAO.getJadwalByWalDos(
        id_perkuliahan
      )
      if (resultJadwal instanceof Error) throw resultJadwal
      res.status(200).json({
        message: 'Sukses retrieve data jadwal by waldos',
        data: resultJadwal
      })
    } catch (error){
      next(error)
    }
  }
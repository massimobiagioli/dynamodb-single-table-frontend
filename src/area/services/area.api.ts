import axios from 'axios'
import { Area } from '@/area/models'

async function getAll() {
  const { data } = await axios.get<Area[]>(
    `${import.meta.env.VITE_SERVER_BASE_URL}/api/area`,
  )
  return data
}

async function save(area: Area) {
  const { data } = await axios.post<Area>(
    `${import.meta.env.VITE_SERVER_BASE_URL}/api/area`,
    area,
  )
  return data
}

export { getAll, save }

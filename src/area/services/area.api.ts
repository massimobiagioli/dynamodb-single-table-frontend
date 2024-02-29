import axios from 'axios'
import { Area } from '../models/area.model.ts'

async function getAll() {
  const { data } = await axios.get<Area[]>(
    `${import.meta.env.VITE_SERVER_BASE_URL}/api/area`,
  )
  return data
}

export { getAll }

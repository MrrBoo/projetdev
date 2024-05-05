import { mw } from "@/api/mw"
import { deleteLocation, readLocation, updateLocation } from "@/db/crud"

const handle = mw(async (req, res) => {
  const { locationId } = req.query

  if (req.method === "GET") {
    const location = await readLocation(locationId)
    if (!location) {
      res.status(404).send({ error: "Not found" })
      return
    }
    res.send(location)
    return
  }

  res.status(404).send({ error: "Not found" })
})

export default handle

import { mw } from "@/api/mw"
import { createLocation, readLocations } from "@/db/crud"

const handle = mw(async (req, res) => {

  try {
    if (req.method === "GET") {
      const locations = await readLocations()
      res.send(locations)
      return
    }

    if (req.method === "POST") {
      const values = req.body
      if (!values) {
        res.status(422).send({ error: "missing values argument" })
        return
      }
      const newLocation = await createLocation(values)
      res.send(newLocation)
      return
    }
  } catch {
    res.status(404).send({ error: "Not found" })
  }
})

export default handle
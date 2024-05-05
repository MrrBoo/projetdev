import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"

const initialValues = {
  locationName: "",
  locationAddress: "",
  locationCity: "",
  locationPostalCode: "",
  locationCountry: "",
  locationType: "",
  restaurantType: "",
  museumArtisticMovement: "",
  artType: "",
  barType: "",
  parkType: "",
  privacy: false,
  starRating: "",
  price: "",
  priceIfNotFree: "",
  isFree: false,
};

const validationSchema = yup.object({
  locationName: yup.string().required("Saisissez le nom"),
  locationAddress: yup.string().required("Saisissez l'adresse"),
  locationCity: yup.string().required("Saisissez la ville"),
  locationPostalCode: yup.number().required("Saisissez le code postal"),
  locationCountry: yup.string().required("Saisissez le pays"),
  locationType: yup.string().required("Choisissez le type de lieu"),
  restaurantType: yup.string().required("Sélectionnez le type de cuisine"),
  museumArtisticMovement: yup.string().required("Sélectionnez un mouvement artistique"),
  artType: yup.string().required("Sélectionnez le type d'art"),
  barType: yup.string().required("Sélectionnez le type d'art"),
  parkType: yup.string().required("Sélectionnez le type de parc"),
  parkPrivacy: yup.boolean(),
  starRating: yup.string().required("Sélectionnez le nombre d'étoiles"),
  price: yup.string().required("Sélectionnez le prix"),
  isFree: yup.boolean(),
});

const CreateLocationPage = () => {
  const handleSubmit = async ( values, { resetForm }) => {
    await axios.post("http://localhost:3000/api/locations", values)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >

        {({ values, errors }) => (
        <Form>
          <FormField
            name="locationName"
            placeholder="Saisissez le nom"
            label="Nom du lieu"
          />
          <FormField
            name="locationType"
            placeholder="Choisissez le type"
            label="Type"
            as="select"
          >
            <option value =""> Choisissez le type de lieu </option>
            <option value ="Restaurant"> Restaurant </option>
            <option value ="Musée"> Musée </option>
            <option value ="Bar"> Bar </option>
            <option value ="Parc"> Parc </option>
          </FormField>
          <FormField
            name="locationAddress"
            placeholder="Saisissez l'addresse"
            label="Addresse"
          />
          <FormField
            name="locationCity"
            placeholder="Saisissez la ville"
            label="Ville"
          />
          <FormField
            name="locationPostalCode"
            placeholder="Saisissez le code postal"
            label="Code Postal"
          />
          <FormField
            name="locationCountry"
            placeholder="Saisissez le Pays"
            label="Pays"
          />
          {values.locationType === "Restaurant" && (
            <>
              <FormField
                name="restaurantType"
                placeholder="Choisissez le type de cuisine"
                label="Type de cuisine"
                as="select"
              >
              <option value =""> Choisissez le type de cuisine </option>
              <option value ="Chinoise"> Chinoise </option>
              <option value ="Coréenne"> Coréenne </option>
              <option value ="Italienne"> Italienne </option>
              <option value ="Mexicaine"> Mexicaine </option>
              </FormField>

              <FormField
              name="starRating"
              label="Nombre d'étoiles"
              as="select"
              >
              <option value=""> Choisissez le nombre d'étoiles </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              </FormField>

              <FormField
              name="price"
              label="Prix"
              as="select"
              >
              <option value=""> Sélectionnez le prix </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
              </FormField>
            </>
          )}
          {values.locationType === "Musée" && (
            <>
              <FormField
                name="museumArtisticMovement"
                placeholder="Choisissez le mouvement artistique"
                label="Mouvement artistique"
                as="select"
              >
              <option value=""> Choisissez le mouvement artistique </option>
              <option value="Réalisme"> Réalisme </option>
              <option value="Impressionisme"> Impressionisme </option>
              <option value="Cubisme"> Cubisme </option>
              </FormField>

              <FormField
                name="artType"
                placeholder="Choisissez le type d'art"
                label="Type d'art"
                as="select"
              >
              <option value=""> Choisissez le type d'art </option>
              <option value="Peinture"> Peinture </option>
              <option value="Sculpture"> Sculpture </option>
              <option value="Littérature"> Littérature </option>
              </FormField>

              <FormField
                name="isFree"
                type="checkbox"
                label="Est-ce gratuit ?"
              />
              {values.isFree === false &&(
                <FormField
                  name="price"
                  placeholder="Prix"
                  label="Prix"
                  as="select"
                >
                <option value=""> Sélectionnez le prix </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                </FormField>
              )}
            </>
          )}
          {values.locationType === "Bar" && (
            <>
              <FormField
                name="barType"
                placeholder="Choisissez le type de bar"
                label="Type de bar"
                as="select"
              >
                <option value=""> Choisissez le type de bar </option>
                <option value="Bar dansant"> Bar dansant </option>
                <option value="Pub"> Pub </option>
                <option value="Bar à vin"> Bar à vin </option>
                </FormField>

              <FormField
              name="price"
              label="Prix"
              as="select"
              >
                <option value=""> Sélectionnez le prix </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
              </FormField>

            </>
          )}
          {values.locationType === "Parc" && (
            <>
              <FormField
                name="parcType"
                placeholder="Choisissez le type de parc"
                label="Type de parc"
                as="select"
              >
                <option value=""> Choisissez le type de parc </option>
                <option value="Parc animalier"> Parc animalier </option>
                <option value="Parc naturel"> Parc naturel </option>
                <option value="Jardin botanique"> Jardin botanique </option>
                <option value="Parc d'attractions"> Parc d'attractions</option>
                <option value="Parc aquatique"> Parc Aquatique</option>
                </FormField>

              <FormField
                name="parkPrivacy"
                type="checkbox"
                label="Est-ce public ?"
              />
              <FormField
                name="isFree"
                type="checkbox"
                label="Est-ce gratuit ?"
              />
              {values.isFree === false &&(
                <FormField
                  name="price"
                  placeholder="Sélectionnez le prix"
                  label="Prix"
                  as="select"
                >
                  <option value=""> Sélectionnez le prix </option>
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  </FormField>
              )}
            </>
          )}
        <Button className="bg-green-700" type="submit" onClick={() => console.log()}>Ajouter</Button>
      </Form>
      )}
      </Formik>
  )
}

export default CreateLocationPage
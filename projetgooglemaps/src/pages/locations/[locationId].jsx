export const getServerSideProps = ({ query }) => ({
    props: {
      locationId: query.locationId,
    },
  })
  const LocationPage = ({ locationId }) => `Location #${locationId}`
  
  export default LocationPage
import { gql } from "apollo-boost";

export default gql`
  query allLaunches {
    launches {
      flight_number
      mission_name
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      nationalID
      nationalIDExpiringDate
      title
      firstName
      fatherName
      grandfatherName
      familyName
      arFirstName
      arFatherName
      argrandFatherName
      arFamilyName
      DOB
      gender
      nationality
      additionalNationality
      passportNo
      passportIssueDate
      passportExpiryDate
      maritalStatus
      dependencies
    }
  }
`;

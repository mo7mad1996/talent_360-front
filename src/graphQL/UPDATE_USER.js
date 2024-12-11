import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $user: UserInput!) {
    updateUser(id: $id, user: $user) {
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

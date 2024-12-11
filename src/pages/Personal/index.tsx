import { Box } from "@mui/material";
import {
  CssTextField,
  CssDateField,
  CssSelectField,
} from "@/components/Custom";
import Card from "@/components/Card";

import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "@/graphQL/GET_USER";
import { UPDATE_USER } from "@/graphQL/UPDATE_USER";
import { useParams } from "react-router";

// component
const Personal: React.FC = () => {
  // config
  const { id } = useParams();
  const [updateUser] = useMutation(UPDATE_USER);

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: +id,
    },
  });

  // methods
  const submit = async (data: any) => {
    console.log(Object.keys(data));
    try {
      await updateUser({
        variables: {
          id: +id,
          user: data,
        },
      });
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // render
  if (loading) return <div>Loading...</div>;
  if (data)
    return (
      <Box className="flex flex-col gap-6">
        <Card
          title="Basic Information"
          initialData={data.user}
          data={[
            {
              name: "nationalID",
              title: "National ID Number",
              component: CssTextField,
            },
            {
              name: "nationalIDExpiringDate",
              title: "National ID Expiring Date",
              component: CssDateField,
            },
            {
              name: "title",
              title: "Title",
              component: CssTextField,
            },
            null,
            {
              name: "firstName",
              title: "First Name",
              component: CssTextField,
            },

            {
              name: "fatherName",
              title: "Father Name",
              component: CssTextField,
            },
            {
              name: "grandfatherName",
              title: "Grand Father Name",
              component: CssTextField,
            },
            {
              name: "familyName",
              title: "Family Name",
              component: CssTextField,
            },
            {
              name: "arFirstName",
              title: "الأسم الأول",
              component: CssTextField,
            },

            {
              name: "arFatherName",
              title: "اسم الأب",
              component: CssTextField,
            },
            {
              name: "argrandFatherName",
              title: "اسم الجد",
              component: CssTextField,
            },
            {
              name: "arFamilyName",
              title: "اللقب / اسم العائلة",
              component: CssTextField,
            },
            {
              name: "DOB",
              title: "Date of birth",
              component: CssDateField,
            },
            {
              name: "gender",
              title: "Gender",
              component: CssSelectField,
              items: [
                { _key: "male", value: "Male" },
                { _key: "female", value: "Female" },
              ],
            },
            {
              name: "nationality",
              title: "Nationality",
              component: CssSelectField,
              items: [
                { _key: "EGY", value: "Egypt" },
                { _key: "KSA", value: "Saudi Arabia" },
                { _key: "UAE", value: "United Arab Emirates" },
              ],
            },
            {
              name: "additionalNationality",
              title: "Additional Nationality",
              component: CssTextField,
            },
            {
              name: "passportNo",
              title: "Passport No.",
              component: CssTextField,
            },
            {
              name: "passportIssueDate",
              title: "Passport Issue Date",
              component: CssDateField,
            },
            {
              name: "passportExpiryDate",
              title: "Passport Expiry Date",
              component: CssDateField,
            },
            null,
            {
              name: "maritalStatus",
              title: "Marital Status",
              component: CssSelectField,
              items: [
                { _key: "single", value: "Single" },
                { _key: "married", value: "Married" },
                { _key: "divorced", value: "Divorced" },
                { _key: "widowed", value: "Widowed" },
              ],
            },
            {
              name: "dependencies",
              title: "Dependencies",
              component: CssTextField,
            },
          ]}
          submit={submit}
        />

        <Card
          title="Contact Information"
          data={[
            {
              name: "personalEmail",
              title: "Personal Email",
              component: CssTextField,
            },
            {
              name: "mobile",
              title: "Mobile",
              component: CssTextField,
            },
          ]}
        />

        <Card
          title="Emergency Contacts"
          data={[
            {
              name: "emergencyContactPersonName",
              title: "Emergency Contact Person Name",
              component: CssTextField,
            },
            {
              name: "emergencyRelation",
              title: "Emergency Relation",
              component: CssTextField,
            },
            {
              name: "emergencyPhone",
              title: "Emergency Phone",
              component: CssTextField,
            },
          ]}
        />

        <Card
          title="Address Details"
          data={[
            {
              name: "country",
              title: "Country",
              component: CssTextField,
            },
            {
              name: "city",
              title: "City",
              component: CssTextField,
            },
            {
              name: "postal Code",
              title: "Postal Code",
              component: CssTextField,
            },
            null,
            {
              name: "street",
              title: "Street",
              component: CssTextField,
            },
            {
              name: "floorNo",
              title: "Floor No.",
              component: CssTextField,
            },
            {
              name: "apartment",
              title: "Apartment.",
              component: CssTextField,
            },
          ]}
        />

        <Card
          title="Driving License Details"
          data={[
            {
              name: "drivingLicense",
              title: "Driving License",
              component: CssSelectField,
              items: [
                { _key: "yes", value: "Yes" },
                { _key: "no", value: "No" },
              ],
            },
            {
              name: "drivingLicenseType",
              title: "Driving License Type",
              component: CssSelectField,
              items: [
                { _key: "C1E", value: "C1E" },
                { _key: "C1", value: "C1" },
                { _key: "C", value: "C" },
              ],
            },
            {
              name: "drivingLicenseExpiryDate",
              title: "Driving License expiry date",
              component: CssDateField,
            },
          ]}
        />

        <Card
          title="Military Service"
          data={[
            {
              name: "requireTravelPermit",
              title: "Require Travel Permit",
              component: CssSelectField,
              items: [
                { _key: "yes", value: "Yes" },
                { _key: "no", value: "No" },
              ],
            },
            {
              name: "militaryService",
              title: "Military Service",
              component: CssSelectField,
              items: [
                { _key: "exempt", value: "Exempt" },
                { _key: "postponed", value: "Postponed" },
                { _key: "other", value: "Other" },
              ],
            },
          ]}
        />
      </Box>
    );
};

export default Personal;

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { CssDateField, CssSelectField } from "@/components/Custom";
import dayjs from "dayjs";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const Card: React.FC<{
  title: string;
  data: any[];
  submit: any;
  initialData: any;
}> = ({ title, data, submit, initialData }) => {
  let defaultValues = data
    .filter((d) => d && d.name)
    .reduce((acc, d) => {
      if (d.items && d.items.length > 0) {
        acc[d.name] = d.items[0]._key;
      } else if (d.component === CssDateField) {
        acc[d.name] = dayjs("2001-09-11");
      } else if (d.component === CssSelectField) {
        acc[d.name] = d.items[0]._key;
      } else {
        acc[d.name] = null;
      }
      return acc;
    }, {});

  if (initialData) {
    defaultValues = {
      ...defaultValues,
      ...initialData,
    };

    delete defaultValues.__typename;
  }

  const handelSubmit = (data: any) => {
    if (submit) submit(data);
  };

  // config
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues,
  });

  // render
  return (
    <Box className="box" component="form" onSubmit={handleSubmit(handelSubmit)}>
      <Box className="flex justify-between p-3" component="header">
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          className="text-color font-medium text-xl"
        >
          {title}
        </Typography>

        <button className="btn" type="submit">
          Edit
        </button>
      </Box>
      <Box className="grid grid-cols-4 gap-6 mt-6">
        {data.map((item, n) => (
          <div key={n}>
            {item && <Render {...{ register, item, watch, setValue }} />}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Card;

function Render({
  register,
  item,
  watch,
  setValue,
}: {
  register: any;
  item: any;
  watch: any;
  setValue: any;
}) {
  if (item.component == CssDateField)
    return (
      <DemoContainer components={["DateField"]}>
        <Box
          component={item.component}
          label={item.title}
          // {...register(item.name)}

          onChange={(e: any) => {
            if (e.isValid()) setValue(item.name, dayjs(e).toISOString());
          }}
          value={
            watch(item.name)
              ? dayjs(watch(item.name))
              : dayjs("2001-09-10T21:00:00.000Z")
          }
        />
      </DemoContainer>
    );

  if (item.items)
    return (
      <FormControl fullWidth sx={{ border: "none" }}>
        <InputLabel className="sub-text">{item.title}</InputLabel>

        <Box
          component={item.component}
          className="w-full"
          {...register(item.name)}
          value={watch(item.name) ?? ""}
        >
          {item.items.map((i: any, a: number) => (
            <MenuItem key={a} value={i._key}>
              {i.value}
            </MenuItem>
          ))}
        </Box>
      </FormControl>
    );

  return (
    <Box
      value={watch(item.name) ?? ""}
      component={item.component}
      className="w-full"
      {...register(item.name)}
      type={item.type}
      label={item.title}
    />
  );
}

import { z } from "zod";

const profileSchema = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  age: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value === "" || /^\d+$/.test(value!);
      },
      {
        message: "The field should be a string containing only numeric values",
      }
    ),
});

export default profileSchema;

import * as z from "zod";

export const UserFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  dateOfBirth: z.string().refine(
    (value) => {
      const date = new Date(value);
      return date.toISOString().startsWith(value);
    },
    { message: "Invalid date format (YYYY-MM-DD)" }
  ),
  email: z.string().email(),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
});

export type UserFormSchemaT = z.infer<typeof UserFormSchema>;

"use server";
import { revalidatePath } from "next/cache";
import { UserFormSchema, UserFormSchemaT } from "../validators";

export const submitUserForm = async (data: UserFormSchemaT) => {
  try {
    const validatedData = UserFormSchema.safeParse(data);
    if (!validatedData.success) {
      console.log(validatedData.error);
    } else {
      const response = await fetch(
        "https://user-form-backend-op6u.onrender.com/api/v1/user/user-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: validatedData.data.name,
            dateOfBirth: validatedData.data.dateOfBirth,
            email: validatedData.data.email,
            phoneNumber: validatedData.data.phoneNumber,
          }),
        },
      );
      const data = await response.json();
      revalidatePath("/all-users");
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserForms = async () => {
  try {
    const response = await fetch(
      "https://user-form-backend-op6u.onrender.com/api/v1/user/all-user-form",
      { cache: "no-store" },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

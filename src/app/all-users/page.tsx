import UserDataTable from "@/components/table/user-data-table";
import { getAllUserForms } from "@/lib/actions/user-form.actions";
import React from "react";

const AllUserFormPage = async () => {
  const data = await getAllUserForms();
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <h1 className="font-semibold text-xl">All User Data</h1>
      <UserDataTable data={data} />
    </div>
  );
};

export default AllUserFormPage;

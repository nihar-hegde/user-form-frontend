import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}
interface UserTableProps {
  data: User[];
}

const UserDataTable = ({ data }: { data: UserTableProps }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Date of Birth</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Submitted At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.dateOfBirth}</TableCell>
            <TableCell>{item.phoneNumber}</TableCell>
            <TableCell>{item.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserDataTable;

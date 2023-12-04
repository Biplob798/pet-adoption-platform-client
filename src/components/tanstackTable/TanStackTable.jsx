import {
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import usePets from "../../hooks/usePets";
import { useMemo } from "react";

const TanStackTableExample = () => {
  const [pets] = usePets();

 
  const columns = [
    {
      header: "ID",
      accessorKey: "_id",
      footer: "ID",
    },
    {
      header: "Image",
      accessorKey: "image",
      footer: "Image",
    },
    {
      header: "Name",
      accessorKey: "name",
      footer: "Name",
    },
    {
      header: "Category",
      accessorKey: "category",
      footer: "Category",
    },
  ];
  const data = useMemo(() => pets, [pets]);
  const table = useReactTable({ data, columns });
  return (
    <div>
      <h1>TanStack Table</h1>
      <table>
        {
          table.getHeaderGroups().map(headerGroup=>(<tr key={headerGroup.id}>
            {
              headerGroup.headers.map(header=><th key={header.id}>{flexRender(header.column.columnDef.header,header.getContext())}</th>)
            }
          </tr>))
        }
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>index</td>
          </tr>
        </tbody>
        <tfoot><tr><td></td></tr></tfoot>
      </table>
    </div>
  );
};

export default TanStackTableExample;

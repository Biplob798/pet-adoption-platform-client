import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
// import React from "react";
// import { useTable } from 'react-table';


const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // tanStack Table 
  // const columns = React.useMemo(
  //   () => [
  //     { Header: 'ID', accessor: 'id' },
  //     { Header: 'Name', accessor: 'name' },
  //     { Header: 'Email', accessor: 'email' },
  //     { Header: 'Phone', accessor: 'phone' },
  //   ],
  //   []
  // );
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: users || [] });
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Order has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeUserToAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center my-4 ">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeUserToAdmin(user)}
                      className="btn btn-lg text-2xl bg-blue-300 text-white"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default AllUsers;

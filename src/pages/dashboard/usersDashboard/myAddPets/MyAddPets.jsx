import { FaTrash, FaUpDown } from "react-icons/fa6";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router-dom";
import usePets from "../../../../hooks/usePets";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { useState } from "react";

const MyAddPets = () => {
  const axiosPublic = useAxiosPublic();

  const [pets, refetch] = usePets();
  const createPetsLength = pets.length > 0;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/pets/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your pet has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        {/* head */}
        <div className="flex justify-around mb-8">
          <h2>Item: {pets.length}</h2>
        </div>
        {/* tabel  */}
        {/* <div className="overflow-x-auto">
          <table className="table  w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>category</th>
                <th>short_description</th>
                <th>update</th>
                <th>delete</th>
                <th>adopted</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.short}</td>
                  <th>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      {" "}
                      <button className="btn btn-ghost btn-lg text-blue-300">
                        <FaUpDown />
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-lg text-green-500">
                      <MdOutlinePets />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <>
          {createPetsLength ? (
            <div>
              <TableContainer className="mt-10" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <span className="text-lg text-red-500">Serial</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-lg text-red-500">Image</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-lg text-red-500">Name</span>
                      </TableCell>
                      <TableCell align="left">
                        <span className="text-lg text-red-500">category</span>
                      </TableCell>
                      <TableCell align="left">
                        <span className="text-lg text-red-500">
                          short_description
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <span className="text-lg text-red-500">update</span>
                      </TableCell>
                      <TableCell align="left">
                        <span className="text-lg text-red-500">delete</span>
                      </TableCell>
                      <TableCell align="left">
                        <span className="text-lg text-red-500">adopted</span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pets
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item, index) => (
                        <TableRow
                          key={item._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell align="left">
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={item.image}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell align="left">{item.name}</TableCell>
                          <TableCell align="left">{item.category}</TableCell>
                          <TableCell align="left">{item.short}</TableCell>
                          <TableCell align="left">
                            <Link to={`/dashboard/updateItem/${item._id}`}>
                              {" "}
                              <button className="btn btn-ghost btn-lg text-blue-300">
                                <FaUpDown />
                              </button>
                            </Link>
                          </TableCell>
                          <TableCell align="left">
                            {" "}
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="btn btn-ghost btn-lg text-red-600"
                            >
                              <FaTrash></FaTrash>
                            </button>
                          </TableCell>
                          <TableCell align="left">
                            {" "}
                            <button className="btn btn-ghost btn-lg text-green-500">
                              <MdOutlinePets />
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={pets.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </div>
          ) : (
            ""
          )}
        </>
      </div>
    </div>
  );
};

export default MyAddPets;

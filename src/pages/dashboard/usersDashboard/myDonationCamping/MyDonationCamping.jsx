import { FaTrash, FaUpDown } from "react-icons/fa6";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { useState } from "react";
import useUserCamping from "../../../../hooks/useUserCamping";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyDonationCamping = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [campings, refetch] = useUserCamping();
  const createcampingsLength = campings.length > 0;

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

  const handlePaused = async (donor) => {
    //  send data to the server:
    const name = donor.name;
    const email = donor.email;
    const maximum = donor.district;
    const donation = donor.donation;
    const short = donor.short;
    const image = donor.image;
    const long = donor.long;
    const status = "paused";
    const userInfo = {
      name,
      email,
      maximum,
      donation,
      short,
      image,
      long,
      status,
    };

    const meniRes = await useAxiosPublic.put(`/campings/${donor?.id}`, userInfo);
    console.log(meniRes.data);
    console.log(userInfo);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `now ${donor?.name} paused`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleUnPaused = async (donor) => {
    //  send data to the server:
    const name = donor.name;
    const email = donor.email;
    const maximum = donor.district;
    const donation = donor.donation;
    const short = donor.short;
    const image = donor.image;
    const long = donor.long;
    const status = "unpaused";
    const userInfo = {
      name,
      email,
      maximum,
      donation,
      short,
      image,
      long,
      status,
    };

    const meniRes = await useAxiosPublic.put(`/campings/${donor?.id}`, userInfo);
    console.log(meniRes.data);
    if (meniRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `now ${donor?.name} unpaused`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div>
        {/* head */}
        <div className="flex justify-around mb-8">
          <h2>Item: {campings.length}</h2>
        </div>
        <>
          {createcampingsLength ? (
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
                      <TableCell align="left">
                        <span className="text-xl font-semibold text-red-500">
                          status
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {campings
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
                            <button className="btn btn-ghost btn-lg text-green-500">
                              <MdOutlinePets />
                            </button>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <>
                              {campings?.status === "unpaused" ? (
                                <button
                                  onClick={() => handlePaused(campings)}
                                  className="btn btn-warning"
                                >
                                  Paused
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleUnPaused(campings)}
                                  className="btn btn-accent"
                                >
                                  UnPaused
                                </button>
                              )}
                            </>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={campings.length}
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

export default MyDonationCamping;

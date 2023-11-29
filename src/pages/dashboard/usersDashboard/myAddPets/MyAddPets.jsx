import { FaTrash, FaUpDown } from "react-icons/fa6";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import usePet from "../../../../hooks/usePet";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router-dom";

const MyAddPets = () => {
  const [pet, refetch] = usePet();
  const axiosPublic = useAxiosPublic();
 
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
        axiosPublic.delete(`/pet/${id}`).then((res) => {
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
          <h2>Item: {pet.length}</h2>
        </div>
        {/* tabel  */}
        <div className="overflow-x-auto">
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
              {pet.map((item, index) => (
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
                   <Link to={`/dashboard/updateItem/${item._id}`}> <button className="btn btn-ghost btn-lg text-blue-300">
                    <FaUpDown />

                    </button></Link>
                  </th>
                  <th>
                    <button  onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600">
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                  <th>
                    <button
                     
                      className="btn btn-ghost btn-lg text-green-500"
                    >
                      <MdOutlinePets />

                    </button>
                  </th>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAddPets;

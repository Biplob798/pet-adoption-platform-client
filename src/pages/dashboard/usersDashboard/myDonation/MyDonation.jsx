import { FaTrash } from "react-icons/fa6";


import Swal from "sweetalert2";
import usePets from "../../../../hooks/usePets";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyDonation = () => {
  const [pets, refetch] = usePets();
  const axiosSecure = useAxiosSecure();
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
        axiosSecure.delete(`/pets/${id}`).then((res) => {
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
  return (
    <div>
      <div>
        {/* head */}
        <div className="flex justify-around mb-8">
          <h2>Item: {pets.length}</h2>
        </div>
        {/* tabel  */}
        <div className="overflow-x-auto">
          <table className="table  w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>short_description</th>
                <th>Action</th>
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
                            src={item.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.short_description}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaTrash></FaTrash>
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

export default MyDonation;

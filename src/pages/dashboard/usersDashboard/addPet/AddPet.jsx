import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";
import { MdOutlinePets } from "react-icons/md";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPet = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    console.log(data);

    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send
      const petItem = {
        name: data.name,
        category: data.category,
        age: data.age,
        short: data.short,
        long: data.long,
        image: res.data.data.display_url,
      };

      const petRes = await axios.post(
        "https://pet-adoption-platform-server-eight.vercel.app/pet",
        petItem
      );
      console.log(petRes.data);
      if (petRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Pet has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log("url", res.data);
  };

  return (
    <div>
      <SectionTitle subHeading={"My Pet"} heading={"Add A Pet "}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* input filed  */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Pet name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Location name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Location name</span>
            </label>
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="Location name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-center items-center gap-6">
            {/* category  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">category</span>
              </label>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Select a Category
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Fish">Fish</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
            {/* age  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                {...register("age", { required: true })}
                type="number"
                placeholder="price "
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* pet details  */}
          <textarea
            {...register("short", { required: true })}
            className="textarea textarea-bordered"
            placeholder="short description"
          ></textarea>
          <textarea
            {...register("long", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Long description"
          ></textarea>
          {/* file input  */}

          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button {...register("recipe")} className="btn btn-primary mt-4">
            Add Pet <MdOutlinePets />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPet;

import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";
import { FaCampground } from "react-icons/fa6";
import useAuth from "../../../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonationCamping = () => {
  const { user } = useAuth();
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
        email: user?.email,
        name: data.name,
        maximum: data.maximum,
        donation: data.donation,
        lastDate: data.lastDate,
        short: data.short,
        long: data.long,
        image: res.data.data.display_url,
        status: "unpaused",
      };

      const petRes = await axios.post(
        "https://pet-adoption-platform-server-eight.vercel.app/campings",
        petItem
      );
      console.log(petRes.data);
      if (petRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Camping Donation has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log("url", res.data);
  };

  return (
    <div>
      <SectionTitle
        subHeading={"My Pet"}
        heading={"Add A Donation "}
      ></SectionTitle>
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
              placeholder="Pet name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">lastDate of Donation</span>
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              placeholder="Last date"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-center items-center gap-6">
            {/* maximum  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">maximum amount</span>
              </label>
              <input
                {...register("maximum", { required: true })}
                type="number"
                placeholder="price "
                className="input input-bordered w-full"
              />
            </div>
            {/* doneted amount  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">donation amount</span>
              </label>
              <input
                {...register("donation", { required: true })}
                type="number"
                defaultValue={0}
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
            submit <FaCampground />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDonationCamping;

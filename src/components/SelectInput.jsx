import { useForm } from "react-hook-form";
import Select from "react-select";
const SelectInput = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    reset();
    console.log(data);
  };
  // use react select
  const options = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
    { value: "fish", label: "Fish" },
    { value: "rabbit", label: "Rabbit" },
  ];
  return (
    <div>
      <Select
        onSubmit={handleSubmit(onSubmit)}
        defaultValue={"default"}
        {...register("category", { required: true })}
        className="select select-bordered w-full"
        options={options}
      />
    </div>
  );
};

export default SelectInput;


import Select from "react-select";
const useSelectInput = () => {
     // use react select
     const options = [
        { value: "cat", label: "Cat" },
        { value: "dog", label: "Dog" },
        { value: "fish", label: "Fish" },
        { value: "rabbit", label: "Rabbit" },
      ];
    return (
        <div>
             <Select  options={options} />
        </div>
    );
};

export default useSelectInput;
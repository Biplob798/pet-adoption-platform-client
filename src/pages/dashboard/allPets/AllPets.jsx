
import usePet from "../../../hooks/usePet";
import usePets from "../../../hooks/usePets";


const AllPets = () => {
    const [pet]=usePet()
    console.log(pet)
    return (
        <div>
            AllPets
        </div>
    );
};

export default AllPets;
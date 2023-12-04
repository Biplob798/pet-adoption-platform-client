import useAuth from "../../../../hooks/useAuth";


const UserHome = () => {
    const {user}=useAuth()
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mb-4"> Welcome !</h2>
        {
            user?.displayName ?  user.displayName : 'Welcome Back User'
        }
        
      </div>
    </div>
  );
};

export default UserHome;

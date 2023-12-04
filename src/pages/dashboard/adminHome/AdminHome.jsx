import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const {user}=useAuth()
  return (
    <div>
      <div className="bg-blue-200 min-h-screen p-6 ">
        <h2 className="text-4xl text-center"> Welcome Admin</h2>
        {
            user?.displayName ?  user.displayName : 'Welcome Back admin'
        }
        
      </div>
    </div>
  );
};

export default AdminHome;

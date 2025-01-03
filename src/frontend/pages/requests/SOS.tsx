import { Link } from "react-router-dom";

export const SOS = () => {

    const handleDeactivate = () => {
        alert("Your SOS message has been deactivated");
      };
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-red-500 mb-4">Emergency SOS </h1>
          <p className="text-gray-700 text-center mb-6">Our Teams will Contact you within 10 minutes </p>
          <div className="flex justify-center">
            <Link to={'/requests'}>
             <button
              onClick={handleDeactivate}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              deactivate SOS
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
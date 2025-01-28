const Notification = ({ message, type, onClose }) => {
    return (
      <div
        className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg transition-all ${
          type === "success"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <span>{message}</span>
          <button
            className="ml-4 font-bold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
    );
  };
  
  export default Notification;
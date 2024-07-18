import { useContext } from "react";
import { CloudinaryScriptContext } from "../CloudinaryScriptProvider/CloudinaryScriptProvider";
import "./UploadWidget.scss";

function UploadWidget({ uwConfig, setState }) {
  const { loaded } = useContext(CloudinaryScriptContext);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState([result.info.secure_url]);
          }
        }
      );
      myWidget.open();
    }
  };

  return (
    <button
      className="cloudinary-button center"
      onClick={initializeCloudinaryWidget}
    >
      <i className="fas fa-upload"></i> Upload
    </button>
  );
}

export default UploadWidget;

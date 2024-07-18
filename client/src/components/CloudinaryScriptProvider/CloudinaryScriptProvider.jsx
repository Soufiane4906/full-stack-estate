import { createContext, useEffect, useState } from "react";

export const CloudinaryScriptContext = createContext();

function CloudinaryScriptProvider({ children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const uwScript = document.getElementById("uw");
    if (!uwScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      {children}
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryScriptProvider;

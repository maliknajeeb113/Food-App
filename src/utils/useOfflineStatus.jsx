import { useEffect, useState } from "react";

const useOfflineStatus = () => {
  const [offlinestatus, setOfflineStatus] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOfflineStatus(false);
    });

    window.addEventListener("offline", () => {
      setOfflineStatus(true);
    });
  }, []);

  return offlinestatus;
};

export default useOfflineStatus;

import EditProfiledisplay from "../../pages/EditProfile/components/EditProfiledisplay/EditProfiledisplay";
import { useContext } from "react";
import AuthContext from "../LoginPage/AuthProvider/AuthProvider";
function Settings() {
  const currentUser = useContext(AuthContext);
  console.log(currentUser.user._id);
  return <EditProfiledisplay currentUser={currentUser} />;
}

export default Settings;

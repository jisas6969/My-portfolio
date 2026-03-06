import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./loading.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <Logo className="logo-svg" />
    </div>
  );
};

export default LoadingScreen;
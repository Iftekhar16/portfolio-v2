import { Loader } from "../components/shared/loader";
import { ThemeCanvas } from "../components/shared/theme-canvas";

const page = () => {
  return (
    <ThemeCanvas>
      <Loader />
    </ThemeCanvas>
  );
};

export default page;

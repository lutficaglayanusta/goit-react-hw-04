import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
      }}
    >
      <BeatLoader
        color="#30e1aa"
        cssOverride={{
          display: "block",
        }}
        size={50}
      />
    </div>
  );
};

export default Loader;

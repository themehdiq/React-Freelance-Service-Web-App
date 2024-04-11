import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#000000"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;

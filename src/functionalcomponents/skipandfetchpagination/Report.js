import Filter from "./Filter";

const Report = () => {
  var chrisNeeds = (value) => {
    console.log(value);
  };
  return (
    <>
      <Filter chrisNeeds={chrisNeeds} />
    </>
  );
};

export default Report;

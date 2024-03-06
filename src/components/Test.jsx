import { useParams } from "react-router-dom";
const Test = () => {
  const { id, foo, bar } = useParams();

  console.log(id);
  console.log(foo);
  console.log(bar);
  return (
    <>
      <div>
        <h1>Test</h1>
      </div>
    </>
  );
};

export default Test;

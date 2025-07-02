/*import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);

  if (!Array.isArray(items)) {
  console.error("❌ items is not an array:", items);
  return <div>Loading or data format error...</div>;
}


  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Home;

// import HomeItem from "../components/HomeItem";
// import { useSelector } from "react-redux";

// const Home = () => {
//   const items = useSelector((store) => store.items);

//   return (
//     <main>
//       <div className="items-container">
//         {items.map((item) => (
//           <HomeItem key={item.id} item={item} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;
*/
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  if (!Array.isArray(items)) {
    console.error("❌ items is not an array:", items);
    return <div>Loading or data format error...</div>;
  }

  return (
    <main>
      <div className="items-container">
        {items.map((item, index) => (
          <HomeItem key={item.id || index} item={item} />
          // fallback to index if item.id is undefined
        ))}
      </div>
    </main>
  );
};

export default Home;

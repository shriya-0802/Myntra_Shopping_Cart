/*import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        dispatch(fetchStatusActions.markFetchingStarted());

        const res = await fetch("http://localhost:8080/items", { signal });
        const data = await res.json();

        console.log("🔎 Full fetched data:", data);

        const items = data.items[0]; // adjust according to your backend response

        console.log("✅ Parsed items array:", items);

        dispatch(itemsActions.addInitialItems(items));
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("❌ Error fetching items:", err);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return <></>;
};

export default FetchItems;
*/
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        dispatch(fetchStatusActions.markFetchingStarted());

        const res = await fetch("http://localhost:8080/items", { signal });
        const data = await res.json();

        const items = data.items[0]; // adjust if backend response changes

        console.log("✅ Items fetched:", items);

        dispatch(itemsActions.addInitialItems(items));
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("❌ Error fetching items:", err);
        }
        // AbortError is expected on unmount or refresh; no log needed
      }
    };

    fetchData();

    return () => {
      controller.abort(); // cleanup fetch on unmount or re-render
    };
  }, [fetchStatus, dispatch]);

  return null; // no fragment needed if no JSX is rendered
};

export default FetchItems;


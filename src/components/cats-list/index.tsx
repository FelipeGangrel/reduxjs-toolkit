import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { fetchCats } from "store/cats/thunks";

interface Props {
  limit?: number;
}

export default function CatList({ limit }: Props) {
  const dogImage = "https://picsum.photos/id/237/200/300";

  const dispatch = useAppDispatch();
  // const promise = useRef<{ abort: () => void }>();

  const { cats, error, loading } = useSelector(
    (state: RootState) => state.fetchCats
  );

  const handleFetchManually = useCallback(() => {
    dispatch(fetchCats({ limit }));
    // promise.current = dispatch(fetchCats({ limit }));
    // hehehe... we put a timeout of 5 seconds before fetching the cats
    // setTimeout(() => {
    //   promise.current?.abort();
    // }, 3_000);
  }, [dispatch, limit]);

  // useEffect(() => {
  //   return () => {
  //     promise.current?.abort();
  //   };
  // }, []);

  return (
    <div className="Gallery">
      <h1>Cats List</h1>
      {loading && <h4>loading...</h4>}
      {error && <h4>Error: {error}</h4>}
      <button className="action-button" onClick={handleFetchManually}>
        Fetch cats
      </button>
      {cats.map((cat, index) => (
        <div key={index} className="row">
          <div className="column column-left">
            <img
              src={cat?.image?.url ?? dogImage}
              width="200"
              height="200"
              alt={cat.name}
            />
          </div>
          <div className="column column-right">
            <h2>{cat.name}</h2>
            <h5>Temperament: {cat.temperament}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

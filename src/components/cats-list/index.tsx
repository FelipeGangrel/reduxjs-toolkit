import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { fetchCats } from "store/cats/thunks";

interface Props {
  limit?: number;
}

export default function CatList({ limit }: Props) {
  const dogImage = "https://picsum.photos/id/237/200/300";
  const dispatch = useAppDispatch();
  const { cats, error, loading } = useSelector(
    (state: RootState) => state.fetchCats
  );

  useEffect(() => {
    const promise = dispatch(fetchCats({ limit }));
    return () => {
      promise.abort();
    };
  }, [dispatch, limit]);

  return (
    <div className="Gallery">
      <h1>Cats List</h1>
      {loading && <h4>loading...</h4>}
      {error && <h4>Error: {error}</h4>}
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

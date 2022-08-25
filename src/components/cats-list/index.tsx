import { useFetchCats } from "hooks/useFetchCats";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { onFetchRequest } from "store/cats/fetchCatsReducer";

interface Props {
  limit?: number;
}

export default function CatList({ limit }: Props) {
  const dogImage = "https://picsum.photos/id/237/200/300";
  const dispatch = useDispatch();

  // const { cats, loading, error, fetchCats } = useFetchCats();

  const { cats, error, loading } = useSelector(
    (state: RootState) => state.fetchCats
  );

  useEffect(() => {
    dispatch(onFetchRequest({ limit }));
  }, [dispatch, limit]);

  // useEffect(() => {
  //   fetchCats(limit);
  // }, [fetchCats, limit]);

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

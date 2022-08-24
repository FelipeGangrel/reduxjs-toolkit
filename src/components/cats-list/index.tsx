import { useCallback } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { onFetchRequest } from "store/cats/catsReducer";

export default function CatList() {
  const dispatch = useDispatch();
  const { cats, error, loading } = useSelector(
    (state: RootState) => state.cats
  );

  const fetchCats = useCallback((): void => {
    dispatch(onFetchRequest({ limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  return (
    <div className="Gallery">
      <h1>Cats List</h1>
      {loading && <h4>loading...</h4>}
      {error && <h4>Error: {error}</h4>}
      {cats.map((cat) => (
        <div key={cat.id} className="row">
          <div className="column column-left">
            <img src={cat.image.url} width="200" height="200" alt={cat.name} />
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

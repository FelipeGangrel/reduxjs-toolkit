import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CatBreed } from "contracts/cats";

interface CatsState {
  loading: boolean;
  cats: CatBreed[];
  error: string | null;
}

const initialState: CatsState = {
  loading: false,
  cats: [],
  error: null,
};

const namespace = "cats";

interface FetchCatsParams {
  limit?: number;
}

interface FetchCatsRejectValue {
  rejectValue: string;
}

export const fetchCats = createAsyncThunk<
  CatBreed[],
  FetchCatsParams | undefined,
  FetchCatsRejectValue
>(`${namespace}/fetchCats`, async (params, thunkApi) => {
  try {
    const url = "https://api.thecatapi.com/v1/breeds";
    const { data } = await axios.get<CatBreed[]>(url);

    if (typeof params?.limit === "number") {
      return data.slice(0, params.limit);
    }

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue("Error fetching cats");
  }
});

export const catsSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      return { ...state, loading: false, cats: action.payload };
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message || "Erro",
      };
    });
  },
});

export default catsSlice.reducer;

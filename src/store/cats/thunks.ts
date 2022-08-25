import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CatBreed } from "contracts/cats";

interface FetchCatsParams {
  limit?: number;
}

interface FetchCatsRejectValue {
  rejectValue: string;
}

interface CreateCatParams {
  name: string;
}

interface CreateCatRejectValue {
  rejectValue: { error: string; validationErrors?: string[] };
}

export const fetchCats = createAsyncThunk<
  CatBreed[],
  FetchCatsParams | undefined,
  FetchCatsRejectValue
>(`cats/fetchCats`, async (params, thunkApi) => {
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

export const createCat = createAsyncThunk<
  void,
  CreateCatParams,
  CreateCatRejectValue
>(`cats/createCat`, async (params, thunkApi) => {
  try {
    console.log(`Creating a cat with name: ${params.name}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  } catch (error) {
    return thunkApi.rejectWithValue({
      error: "Error creating cat",
      validationErrors: ["Name is required"],
    });
  }
});

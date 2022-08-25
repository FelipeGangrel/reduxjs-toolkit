export interface CatBreed {
  id: string;
  name: string;
  image?: { id: string; url: string; width: number; height: number };
  temperament: string;
}

export interface FetchCatsState {
  loading: boolean;
  cats: CatBreed[];
  error?: string;
}

export interface CreateCatState {
  loading: boolean;
  error?: string;
  validationErrors?: string[];
}

export interface FetchCatsParams {
  limit?: number;
}

export interface FetchCatsRejectValue {
  rejectValue: { error: string };
}

export interface CreateCatParams {
  name: string;
}

export interface CreateCatRejectValue {
  rejectValue: { error: string; validationErrors?: string[] };
}

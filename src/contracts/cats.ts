export interface CatBreed {
  id: string;
  name: string;
  image: { id: string; url: string; width: number; height: number };
  temperament: string;
}

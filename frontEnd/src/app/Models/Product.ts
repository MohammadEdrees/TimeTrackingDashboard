export class product {
  id!: number;
  title!: string;
  price!: number;
  description!: string;
  category!: string;
  image!: string;
  rating!: any;
  constructor(
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: any
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
}

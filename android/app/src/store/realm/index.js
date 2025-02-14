import Realm from "realm";
import { Brand } from "./models/Brand";
import { Gender } from "./models/Gender";
import { Category } from "./models/Category";
import { Size } from "./models/Size";
import { Shipping } from "./models/Shipping";
import { Product, ProductImage } from "./models/Product";

const realm = new Realm({
    schema: [
        Brand,
        Gender,
        Category,
        Size,
        Shipping,
        Product,
        ProductImage,
    ],
});
export default realm;
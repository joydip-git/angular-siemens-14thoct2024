import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../../models/product";

@Pipe({
    name: 'sortproduct'
})
export class ProductSortPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        let copy = [...value]
        if (value.length > 0 && args[0] && args[0] !== '') {
            switch (args[0]) {
                case 'Name':
                    copy.sort(
                        (p1, p2) => p1.
                            productName.
                            toLocaleLowerCase()
                            .localeCompare(
                                p2.productName.toLocaleLowerCase()
                            )
                    )
                    break;

                case 'Price':
                    copy.sort((p1, p2) => p1.price - p2.price)
                    break;

                case 'Id':
                    copy.sort((p1, p2) => p1.productId - p2.productId)
                    break;

                case 'Rating':
                    copy.sort((p1, p2) => p1.starRating - p2.starRating)
                    break;

                default:
                    break;
            }
        }

        return copy
    }

}
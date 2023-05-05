/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

// export default function ProductItem({ product, addToCartHandler }) {
//   return (
//     <div className="card">
//       <Link href={`/product/${product.slug}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="rounded shadow object-cover h-64 w-full"
//         />
//       </Link>
//       <div className="flex flex-col items-center justify-center p-5">
//         <Link href={`/product/${product.slug}`}>
//           <h2 className="text-lg">{product.name}</h2>
//         </Link>
//         <p className="mb-2">{product.brand}</p>
//         <p>${product.price}</p>
//         <button
//           className="primary-button"
//           type="button"
//           onClick={() => addToCartHandler(product)}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader
        floated={false}
        color="blue-gray">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </Link>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-medium">
            <Link href={`/product/${product.slug}`}>
              <h1 className="text-lg">{product.name}</h1>
              <p className=" font-bold">${product.price}</p>
            </Link>
          </Typography>

          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal">
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </Typography>
        </div>
        <Typography color="gray">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button
          onClick={() => addToCartHandler(product)}
          size="lg"
          fullWidth={true}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

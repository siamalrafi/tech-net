import ProductCard from '@/components/ProductCard';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import {
  setPriceRange,
  toggleState,
} from '@/redux/features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types/globalTypes';
import { Key } from 'react';

export default function Products() {
  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  const { data } = useGetProductsQuery(undefined);
  const { status, priceRange } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();

  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]));
    console.log(value);
  };

  let productsData;

  if (status) {
    productsData = data?.data?.filter(
      (item: { status: boolean; price: number }) =>
        item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data?.data?.filter(
      (item: { price: number }) => item.price < priceRange
    );
  } else {
    productsData = data?.data;
  }

  return (
    <div className="grid lg:grid-cols-12 sm:grid-cols-6 max-w-7xl ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 lg:h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            onClick={() => dispatch(toggleState())}
            className="flex items-center space-x-2 mt-3"
          >
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div>

      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData
          ?.filter((product: IProduct) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((product: IProduct, index: Key | null | undefined) => (
            <ProductCard key={index} product={product} />
          ))}

        {/* 
          Products are large amounts of data. need to pagination. Her are the code for UI
          */}

        <div className="flex justify-center sm:mx-60 lg:mx-96 md:mx-96  ">
          <nav className="" aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item disabled">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  1
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                  href="#"
                >
                  2 <span className="visually-hidden" />
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* pagination component */}
    </div>
  );
}

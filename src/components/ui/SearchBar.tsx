import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

export function InputWithButton() {
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  const [search, setSearch] = useState('');

  console.log('data from serach', search, error);

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        type="Search your Product"
        placeholder="Search Your Product"
      />
      <Button type="submit">
        <HiOutlineSearch size="25" />
      </Button>
    </div>
  );
}

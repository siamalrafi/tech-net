import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HiOutlineSearch } from 'react-icons/hi';

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="Search your Product" placeholder="Search Your Product" />
      <Button type="submit">
        <HiOutlineSearch size="25" />
      </Button>
    </div>
  );
}

import Button from './UI/Button';
import { IconEdit, IconBackspace } from '@tabler/icons-react';

interface PantryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiry_date: string; // Assuming expiry_date is a string for display
  notes: string;
}

interface Props {
  pantryItems: PantryItem[];
}

export default function PantryItem({ pantryItems }: Props) {
  return (
    <>
      {pantryItems &&
        pantryItems.map(item => (
          <div key={item.id} className="rounded border-[1px] p-2">
            <h1 className="text-xl font-semibold uppercase ">{item.name}</h1>
            <h2>{item.notes}</h2>
            <div className="my-2 grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-0">
              <h4 className="text-sm">
                <span className="font-bold ">Category:</span> {item.category}
              </h4>
              <h4 className="text-sm">
                <span className="font-bold ">Quantity:</span> {item.quantity}
              </h4>

              <h4 className="text-sm">
                <span className="font-bold ">Unit:</span> {item.unit}
              </h4>
              <h4 className="text-sm">
                <span className="font-bold ">Expiration Date:</span>{' '}
                {item.expiry_date}
              </h4>
            </div>
            <div className="flex gap-2">
              <Button type="success">
                Update{' '}
                <span>
                  <IconEdit />
                </span>
              </Button>
              <Button type="danger">
                Delete <IconBackspace />
              </Button>
            </div>
          </div>
        ))}
    </>
  );
}

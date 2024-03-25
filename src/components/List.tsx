// components/List.tsx
import React from 'react';
import Image from 'next/image';

export interface ListItem {
  icon: string;
  description: string;
}

interface ListProps {
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
      <ul className="flex flex-col items-start gap-9">
        {items.map((item, index) => (
          <li key={index} className={`flex items-center gap-5 pb-9 ${index === items.length - 1 ? '' : 'border-b-[1px] border-opacity-gray'}`}>
            <div className="w-7 h-7 flex items-center justify-center">
              <Image src={item.icon} alt="" />
            </div>
            <p className="flex-1 text-txt-gray">{item.description}</p>
          </li>
        ))}
      </ul>
  );
};

export default List;
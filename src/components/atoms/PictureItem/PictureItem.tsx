import Link from 'next/link';
import { StPictureItem } from './PictureItem.styled';
import Image from 'next/image';

interface IPictureItemProps {
  link: string;
  id: string | number;
  src: string;
}

export default function PictureItem({ link, id, src }: IPictureItemProps) {
  return (
    <Link href={link} key={id}>
      <StPictureItem>
        <Image src={src} sizes='268px' fill alt='' />
      </StPictureItem>
    </Link>
  );
}

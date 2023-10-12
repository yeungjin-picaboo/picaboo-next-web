import { identicon } from 'minidenticons';
import Image, { ImageProps } from 'next/image';
import { useMemo } from 'react';

interface IIdenticonImg extends Omit<Omit<ImageProps, 'src'>, 'alt'> {
  username: string;
  saturation: number | string;
  width?: number;
  height?: number;
  lightness?: number | string;
}

export const IdenticonImg = ({
  username,
  saturation,
  width = 60,
  height = 60,
  lightness,
  ...props
}: IIdenticonImg) => {
  const svgURI = useMemo(
    () =>
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(identicon(username, saturation, lightness)),
    [username, saturation, lightness]
  );
  return (
    <Image
      src={svgURI}
      alt={username}
      width={width}
      height={height}
      {...props}
    />
  );
};

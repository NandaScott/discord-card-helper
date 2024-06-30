interface CardImageProps {
  src: string;
  alt: string;
}

export default function CardImage(props: CardImageProps) {
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt}
      className='rounded-2xl shadow-lg'
      width={401}
      height={288}
    />
  );
}

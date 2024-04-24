export interface Props {
  /**
   * @minimum 3
   */
  images: string[];
}

function PartialImageGallery(props: Props) {
  console.log(props);
  return <div>{props.images[0]}</div>;
}

export default PartialImageGallery;

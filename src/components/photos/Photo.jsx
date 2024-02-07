import { Card, CardBody, CardHeader } from "@nextui-org/react";

const Photo = ({ photosC }) => {
  return (
    <>
      {photosC.map((photo, i) => {
        return (
          <Card key={i}>
            <CardHeader>
              <h1 className="font-bold text-center">{photo.title}</h1>
            </CardHeader>
            <CardBody>
              <img src={photo.url} alt="" />
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};
export default Photo;

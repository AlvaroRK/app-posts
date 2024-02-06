import { Button, Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";

const Post = ({ postC }) => {
  return (
    <>
      {postC.map((post, i) => {
        return (
          <Card className="hover:scale-105" key={i}>
            <CardHeader className="text-2xl font-bold">
              <h1>{post.title}</h1>
            </CardHeader>
            <CardBody>
              <p>{post.body}</p>
            </CardBody>
            <CardFooter>
              <Button className="w-full" color="primary">Button</Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
export default Post;

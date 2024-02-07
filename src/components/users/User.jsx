import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  User as UserNx,
} from "@nextui-org/react";

const User = ({ userC }) => {
  console.log(userC);
  return (
    <>
      {userC.map((user, i) => {
        return (
          <Card key={i}>
            <CardHeader>
              <UserNx
                name={user.name}
                description={<Link href="#">{user.username}</Link>}
              />
            </CardHeader>
            <CardBody>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </CardBody>
            <CardFooter>
                <Link href="#">{user.email}</Link>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
export default User;

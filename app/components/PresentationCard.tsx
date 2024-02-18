import { Card, CardHeader, Divider, CardBody, CardFooter, Link, Image} from "@nextui-org/react";

export default function PresentationCard(){
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://lh3.googleusercontent.com/a/ACg8ocJ-eKFAFaCBoDdbSAYvnVxSItS2GOefzJCJrcLECrO-xC0=s432-c-no"
          width={40}
        />
        <div className="flex flex-col text-left">
          <p className="text-md">Juan Medina</p>
          <p className="text-small text-default-500">nachom12</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Template made for learning purposes.</p>
        <p>Im currently working as a fullstack dev.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nachom12"
        >
          See my GitHub
        </Link>
      </CardFooter>
    </Card>
  );
}
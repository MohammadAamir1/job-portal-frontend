import { Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["Html", "Css", "Javascript", "Reactjs"];
const isResume = true;
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-illustration/infinity-logo-design-two-interconnected-600nw-2576179009.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum accusamus recusandae ipsa id ratione ullam!</p>
            </div>
          </div>
          <Button
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>Amir@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>8765987698</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {/* {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )} */}
            {
                skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge> ) : <span>NA</span>
            }
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href='https://youtube.com/@mernstack'
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Patel Mern Stack
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied Job Table   */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} />
    </div>
  );
};

export default Profile;

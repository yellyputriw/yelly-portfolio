import GarrisonInvitation from "@/app/assets/projects/garrison-invitation.png";
import KostBuddyLandingPage from "@/app/assets/projects/kostbuddy-landing-page.png";
import KostBuddyWeb from "@/app/assets/projects/kostbuddy-web.png";
import MandatoryRide from "@/app/assets/projects/mandatory-ride.png";
import ShizzleAdmin from "@/app/assets/projects/shizzle-admin.png";
import ShizzleWeb from "@/app/assets/projects/shizzle-web.png";

export const projectData = [
  {
    image: ShizzleWeb,
    title: "Shizzle",
    description:
      "Website for sharing Song, Album, Youtube and Podcast revenue bsetween creators and fans running on Polygon blockchain.",
    tools: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Axios",
      "React Query",
    ],
  },
  {
    image: ShizzleAdmin,
    title: "Shizzle Admin",
    description:
      "Website that admin uses for monitoring revenue sharing from creators to fans",
    tools: ["React.js", "Axios", "Redux Saga"],
  },
  {
    image: KostBuddyWeb,
    title: "KostBuddy",
    description: "Website to display and book Kost daily or monthly.",
    tools: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Axios",
      "React Query",
    ],
  },
  {
    image: KostBuddyLandingPage,
    title: "KostBuddy Company Profile",
    description: "Kostbuddy's professional website.",
    tools: ["React.js", "Typescript", "Next.js", "Tailwind CSS"],
  },
  {
    image: GarrisonInvitation,
    title: "Garrison Motoforge Invitation",
    description: "Website for invitation and confirm RSVP to the event",
    tools: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    image: MandatoryRide,
    title: "Mandatory Ride Royal Enfield Participants Checkpoint ",
    description: "Website to track participants checkpoints with admin page.",
    tools: ["React.js", "Next.js", "Tailwind CSS", "React Table"],
  },
];

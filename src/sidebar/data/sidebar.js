import { FaFlipboard, FaTh } from 'react-icons/fa';
import { BiImageAdd } from "react-icons/bi";
import { RiRoadMapFill } from 'react-icons/ri';
import { CiViewBoard } from 'react-icons/ci';

const menu = [
    {
        title: "Platform Launch",
        icon: <FaTh />,
        path: "/board",
    },
    {
        title: "Marketing Plan",
        icon: <BiImageAdd />,
        path: "/map",
    },

    {
        title: "Roadmap",
        icon: <RiRoadMapFill />,
        path: "/plans",
    },
    {
        title: "Create New Board",
        icon: <FaFlipboard />,
        path: "/newBoard",
    },
];

export default menu;
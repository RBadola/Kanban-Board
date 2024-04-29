import { useEffect, useState } from "react";
import "./App.css";
import Lane from "./Lane";

function App() {
  const [lanes, setlanes] = useState([
    {
      index: "1",
      company: "Stark, White and Abbott",
      desc: "Cloned Optimal Architecture",
      status: "in-progress",
    },
    {
      index: "2",
      company: "Wiza LLC",
      desc: "Exclusive Bandwidth-Monitored Implementation",
      status: "complete",
    },
    {
      index: "3",
      company: "Nolan LLC",
      desc: "Vision-Oriented 4Thgeneration Graphicaluserinterface",
      status: "backlog",
    },
    {
      index: "4",
      company: "Thompson PLC",
      desc: "Streamlined Regional Knowledgeuser",
      status: "in-progress",
    },
    {
      index: "5",
      company: "Walker-Williamson",
      desc: "Team-Oriented 6Thgeneration Matrix",
      status: "in-progress",
    },
    {
      index: "6",
      company: "Boehm and Sons",
      desc: "Automated Systematic Paradigm",
      status: "backlog",
    },
    {
      index: "7",
      company: "Runolfsson, Hegmann and Block",
      desc: "Integrated Transitional Strategy",
      status: "backlog",
    },
    {
      index: "8",
      company: "Schumm-Labadie",
      desc: "Operative Heuristic Challenge",
      status: "backlog",
    },
    {
      index: "9",
      company: "Kohler Group",
      desc: "Re-Contextualized Multi-Tasking Attitude",
      status: "backlog",
    },
    {
      index: "10",
      company: "Romaguera Inc",
      desc: "Managed Foreground Toolset",
      status: "backlog",
    },
    {
      index: "11",
      company: "Reilly-King",
      desc: "Future-Proofed Interactive Toolset",
      status: "complete",
    },

    {
      index: "12",
      company: "Emard, Champlin and Runolfsdottir",
      desc: "Devolved Needs-Based Capability",
      status: "backlog",
    },
    {
      index: "13",
      company: "Fritsch, Cronin and Wolff",
      desc: "Open-Source 3Rdgeneration Website",
      status: "complete",
    },
    {
      index: "14",
      company: "Borer LLC",
      desc: "Profit-Focused Incremental Orchestration",
      status: "backlog",
    },

    {
      index: "15",
      company: "Emmerich-Ankunding",
      desc: "User-Centric Stable Extranet",
      status: "in-progress",
    },
    {
      index: "16",
      company: "Willms-Abbott",
      desc: "Progressive Bandwidth-Monitored Access",
      status: "in-progress",
    },
    {
      index: "17",
      company: "Brekke PLC",
      desc: "Intuitive User-Facing Customerloyalty",
      status: "complete",
    },
    {
      index: "18",
      company: "Bins, Toy and Klocko",
      desc: "Integrated Assymetric Software",
      status: "backlog",
    },
    {
      index: "19",
      company: "Hodkiewicz-Hayes",
      desc: "Programmable Systematic Securedline",
      status: "backlog",
    },
    {
      index: "20",
      company: "Murphy, Lang and Ferry",
      desc: "Organized Explicit Access",
      status: "backlog",
    },
  ]);
  const [lanedata, setlanedata] = useState({
    clients: {
      "backlog": lanes.filter((l) => l.status === "backlog"),
      "in-progress": lanes.filter((l) => l.status === "in-progress"),
      "complete": lanes.filter((l) => l.status === "complete"),
    },
  });

  
  return (
    <div className="bg-slate-600 h-screen flex gap-x-4 px-4 py-3 overflow-hidden">
      <Lane title={"Backlog"} data={lanedata.clients.backlog} />
      <Lane title={"In Progress"} data={lanedata.clients["in-progress"]} />
      <Lane title={"Complete"} data={lanedata.clients.complete} />
    </div>
  );
}

export default App;

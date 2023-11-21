import React from "react";
import Layout from "./Layout";
import {
  AcademicCapIcon,
  ScaleIcon,
  BeakerIcon,
  BanknotesIcon,
  MusicalNoteIcon,
  PhoneIcon,
  PuzzlePieceIcon,
  TruckIcon,
  RadioIcon,
  NewspaperIcon,
  HomeIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

// should each category be a link? Then each category would have to be its own component, right?
// Task: create a page for each category and link them using the router

function Browse() {
  return (
    <div>
      <Layout>
        <div className="text-center pt-11 min-h-screen">
          <div className="grid grid-rows-4 grid-flow-col gap-2 border-solid border-">
            <div className="flex items-center gap-2 border border-solid pl-8">
              <AcademicCapIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Education</p>
            </div>
            <div className="flex items-center gap-2 border border-solid pl-8">
              <ScaleIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Law and Government</p>
            </div>
            <div className="flex items-center gap-2 border border-solid pl-8">
              <BeakerIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Health care</p>
            </div>
            <div className="flex items-center gap-2 border border-solid pl-8">
              <PhoneIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Service industry</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <TruckIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Transportation</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <MusicalNoteIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Arts</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <RadioIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Communications</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <HomeIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Construction</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <BuildingOfficeIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Manufacturing</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <BanknotesIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Finance</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <NewspaperIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Business administration</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <ComputerDesktopIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Technology</p>
            </div>
            <div className="flex items-center gap-2 border border-solid">
              <PuzzlePieceIcon className="h-6 w-6 text-blue-500" />
              <p className="font-mono text-lg">Random</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Browse;

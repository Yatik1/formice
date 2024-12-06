import React from 'react';
import { Button } from './ui/button';
import { ArrowUpRight, Plus, FilePenLine, Check } from 'lucide-react';

const Designer = () => {
  return (
    <div className="relative h-full bg-white w-[45%] flex flex-col border border-gray-200">
      <TopSection />
      <MidDesigner />
      <BottomSection />
    </div>
  );
};

function TopSection() {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-200 p-4">
      <h2 className="text-gray-400 font-medium text-lg">Untitled Form</h2>
      <Button
        variant={"outline"}
        className="rounded-xl text-gray-500 py-3 px-5 text-md"
      >
        Preview
        <ArrowUpRight />
      </Button>
    </div>
  );
}

function MidDesigner() {
  return (
    <div className="flex-grow flex flex-col items-center justify-start pt-5">
       <Button
        variant={"outline"}
        className='rounded-xl'
       >
         <Plus />
         <p>Add Questions</p>
       </Button>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="w-full flex items-center justify-between border-t border-gray-200 p-5 overflow-auto">
      <Button
        variant={"outline"}
        className="rounded-xl px-5 text-md text-gray-400"
      >
        <FilePenLine />
        <h2 className='text-md'>Save as Draft</h2>
      </Button>

      <Button
        variant={"outline"}
        className="rounded-xl px-5 text-md text-white bg-green-600/60 hover:bg-green-600 hover:text-white"
      >
        <Check />
        <h2 className='text-md'>Publish form</h2>
      </Button>
    </div>
  );
}

export default Designer;

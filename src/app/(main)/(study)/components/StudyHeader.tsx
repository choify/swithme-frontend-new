const StudyHeader = ({ title, subs }: { title: string; subs: string }) => {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[290px] w-[1440px] overflow-hidden gap-20 px-16 py-[100px] bg-white">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[145px] w-[768px] relative gap-6">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-[56px] font-bold text-left text-[#003725]">
          {title}
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-lg text-left text-[#003725]">
          {subs}
        </p>
      </div>
    </div>
  );
};

export default StudyHeader;

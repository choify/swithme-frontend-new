const Badge = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-2.5 py-[5px] rounded-[10px] border border-[#027a48]">
      <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-black">
        {text}
      </p>
    </div>
  );
};

export default Badge;

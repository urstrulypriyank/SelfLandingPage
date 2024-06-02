export default function CirclePulse() {
  return (
    <div className="absolute w-screen h-screen shadow-lg blur">
      <div className="relative flex justify-center items-center flex-col w-full h-screen">
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px]   animate-ping  " />
        <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] animate-pulse" />
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-pulse" />

        <div className="absolute border border-[#333333]  rounded-full h-[400px] w-[400px]  animate-ping " />
        <div
          className="absolute border border-green-300 rounded-full h-[410px] w-[410px]
        animate-pulse"
        />
      </div>
    </div>
  );
}

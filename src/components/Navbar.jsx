import { FcRules } from "react-icons/fc";

let bestScore = 0;

function Navbar({ score }) {
  if (score > bestScore) {
    bestScore = score;
  }
  return (
    <div className="self-center flex w-full p-2 items-center sticky z-10 top-0 left-0 right-0">
      <div className="p-1 animate-slideInDown backdrop-blur-lg border-slate-600-100 border-2 rounded-lg">
        <abbr title="Instructions">
          <FcRules size="50px" className="hover:cursor-pointer" />
        </abbr>
      </div>
      <div className="flex justify-center w-full items-center gap-4 mr-24">
        <div className="p-2 animate-slideInDown backdrop-blur-lg border-slate-600-100 border-2 rounded-lg">
          <p>Best Score: {bestScore}</p>
        </div>
        <div className="p-2 animate-slideInDown backdrop-blur-lg border-slate-600-100 border-2 rounded-lg">
          <div className="flex items-center gap-2 justify-center hover:cursor-pointer">
            <span className="font-['pixel'] text-xl">
              <abbr title="Click to restart" className="no-underline">Memory &nbsp; Game</abbr>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M15 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7zm-6 8H7V6h2zm3 0h-2V6h2zm3 0h-2V6h2z"
              />
            </svg>
          </div>
          <div></div>
        </div>
        <div className="p-2 animate-slideInDown backdrop-blur-lg border-slate-600-100 border-2 rounded-lg">
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

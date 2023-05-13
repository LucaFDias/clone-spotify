import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Maximize, Volume2 } from 'lucide-react'
export function Footer() {
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="https://th.bing.com/th/id/OIP.cABkyjGQflEqpslj2sh6ZgHaHa?pid=ImgDet&rs=1" width={56} height={56}/>
          <div className="flex flex-col">
            <a href="#">
              <strong className="font-normal">Nattan</strong>
            </a>
            <span className="text-xs text-zinc-400">Confiei em ti</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play/>
            </button>

            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-20 h-1 roudend-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:05</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume2/>
            <div className="bg-zinc-600 w-24 h-1 roudend-full">
            <div className="bg-zinc-200 w-10 h-1 roudend-full"></div>

            </div>
            
          </div>
          <Maximize size={20}/>
        </div>
      </footer>

    )
}
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export function Main() {
    return(
        <main className="flex-1 p-6">
        <div className="flex items-center gap-4">
          <button className=" bg-black/40 p-1 rounded-full">
            <ChevronLeft/>
          </button>
          <button className=" bg-black/40 p-1 rounded-full">
            <ChevronRight/>
          </button>
        </div>
        <h1 className="font-semibold text-3xl mt-10 mb-8">Good Afternoon</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href="#" className="flex group bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
            <img src="https://th.bing.com/th/id/OIP.cABkyjGQflEqpslj2sh6ZgHaHa?pid=ImgDet&rs=1" width={104} height={80}/>
            <strong>Top Piseiro</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
              <Play/>
            </button>
          </a>
          <a href="#" className="flex group bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
            <img src="https://th.bing.com/th/id/OIP.t6CI90IFm5wn3RgBTa2vRAHaHa?pid=ImgDet&rs=1" width={104} height={80} />
            <strong>Playlist Tarcísio</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
              <Play/>
            </button>
          </a>
          <a href="#" className="flex group bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
            <img src="https://th.bing.com/th/id/OIP.iJDhS6mKV6iRDW0KCoRSQQHaHa?pid=ImgDet&rs=1" width={104} height={80} />
            <strong>Top Trap Brasil</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
              <Play/>
            </button>
          </a>
          <a href="#" className="flex group bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
            <img src="https://th.bing.com/th/id/OIP.qteKwGxOBkjthe4CdyHTugHaHa?pid=ImgDet&rs=1" width={104} height={80} />
            <strong>Daily Funk</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
              <Play/>
            </button>
          </a>
          <a href="#" className="flex group bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
            <img src="https://seeded-session-images.scdn.co/v1/img/artist/2h5Ha0ZiMFmOQD3iYcSXsy/en" width={104} height={80}/>
            <strong>Trap Brasil</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
              <Play/>
            </button>
          </a>
          <a href="#" className="flex group bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
            <img src="https://th.bing.com/th/id/R.732177c7e89b871f3d22b44d21872f6f?rik=ZSm%2bH59wkWoHJg&pid=ImgRaw&r=0" width={104} height={80}/>
            <strong>Dubstap</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
              <Play/>
            </button>
          </a>
        </div>

        <h2 className="font-semibold text-2xl mt-10 mb-8">Made for Lucas Dias</h2>
        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
            <img src="https://th.bing.com/th/id/OIP.cABkyjGQflEqpslj2sh6ZgHaHa?pid=ImgDet&rs=1" className="w-full" width={120} height={120}/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
            <img src="https://th.bing.com/th/id/OIP.cABkyjGQflEqpslj2sh6ZgHaHa?pid=ImgDet&rs=1" className="w-full" width={120} height={120}/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
            <img src="https://th.bing.com/th/id/OIP.cABkyjGQflEqpslj2sh6ZgHaHa?pid=ImgDet&rs=1" className="w-full" width={120} height={120}/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
            <img src="https://th.bing.com/th/id/OIP.cABkyjGQflEqpslj2sh6ZgHaHa?pid=ImgDet&rs=1" className="w-full" width={120} height={120}/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
            <img src="https://th.bing.com/th/id/OIP.cABkyjGQflEqpslj2sh6ZgHaHa?pid=ImgDet&rs=1" className="w-full" width={120} height={120}/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          
        </div>
      </main>
    )
}
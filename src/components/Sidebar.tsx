import { Home as HomeIcon, Search, Library, Heart, Plus } from 'lucide-react'
export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"/>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                <div className="w-3 h-3 bg-green-600 rounded-full"/>     
            </div>

            <nav className="space-y-5 mt-5">
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <HomeIcon />
                    Home
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Search />
                    Search
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <Library />
                Your Library
                </a>
            </nav>
            <div className="mt-10 flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Plus className="bg-zinc-300 text-zinc-950 rounded-sm"/>
                    Criar Playlist
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Heart className="bg-purple-300 roudend-sm"/>
                    Músicas Curtidas
                </a>
            </div>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Trap Brazil</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Sertanejos</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Aniver Funk</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Today Top Hits</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 3</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Wallows Radio</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 6</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">Relase Rader</a>
            </nav>
        </aside>
    )
}
"use client"
export default function PrimaryMenu() {

	return (
		<nav className="primary-menu px-4 py-2 fixed portrait:bottom-0 landscape:right-0 landscape:top-0 portrait:w-screen portrait:h-[60px] landscape:h-screen landscape:w-[4em] shadow-[-3px_0_10px_rgba(0,0,0,0.3)] z-[1000] bg-white">
			<ul className="flex landscape:flex-col landscape:items-center h-full justify-between">
				<li className="text-center"><a href="/"><span className="icon-th-large" /><span className="text-sm block">Oversigt</span></a></li>
				<li className="text-center"><a href="#"><span className="icon-chat-empty" /><span className="text-sm block">Chat</span></a></li>
				<li className="text-center"><a href="#"><span className="icon-dollar" /><span className="text-sm block">Udlæg</span></a></li>
				<li className="text-center"><a href="/map"><span className="icon-map-o" /><span className="text-sm block">Kort</span></a></li>
				<li className="text-center"><a href="#"><span className="icon-info-circled" /><span className="text-sm block">Info</span></a></li>
				<li className="text-center"><a href="#"><span className="icon-user-circle-o" /><span className="text-sm block">Profil</span></a></li>
			</ul>
		</nav>
	)
}

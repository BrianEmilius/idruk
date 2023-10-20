"use client"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"

export default function Map() {
	return (
		<div className="absolute inset-x-0 top-0 portrait:bottom-[60px] landscape:bottom-0 landscape:inset-right-[4em] overflow-hidden">
			<MapContainer center={[48.131154, 11.549124]} zoom={16} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</MapContainer>
		</div>
	)
}

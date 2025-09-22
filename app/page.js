export default function Home() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-70.75%2C-33.6%2C-70.55%2C-33.4&layer=mapnik&marker=-33.45%2C-70.65"
        style={{ border: "none", width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
}

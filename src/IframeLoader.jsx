import { useState } from "react";

export default function IframeLoader() {
  const [url, setUrl] = useState("");
  const [loadedUrl, setLoadedUrl] = useState("");

  const handleLoad = () => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("La URL debe comenzar con http:// o https://");
      return;
    }
    setLoadedUrl(url);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl space-y-4">
        <h1 className="text-2xl font-semibold text-center">Visor de Sitios Web</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ingresa una URL (https://...)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleLoad}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Cargar
          </button>
        </div>
        {loadedUrl && (
          <div className="border rounded-lg overflow-hidden mt-4 h-[600px]">
            <iframe
              src={loadedUrl}
              title="iframe-viewer"
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
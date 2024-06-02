import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/0047079a-76af-4206-ad33-f17fd69bdc40-1tary.jpg",
  "https://utfs.io/f/777f1ec7-25ce-49e8-b848-73d4d96a567e-1tdpv.jpg",
  "https://utfs.io/f/47391b06-b037-4357-b3f2-a80ab6428e0a-1tarx.jpg",
  "https://utfs.io/f/4fabcfc2-e066-4847-b599-bc896660db9c-1s3es.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

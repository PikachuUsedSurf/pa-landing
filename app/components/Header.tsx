import Image from "next/image";

const Header = () => {
  return (
    <header className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Personal Assistant
            </h1>
            <p className="text-xl text-foreground/60 mb-8">
              Connecting top-tier assistants with those who need them most.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="/placeholder.svg"
              alt="Personal Assistant Dashboard"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

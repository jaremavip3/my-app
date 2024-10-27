export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('../backgr.png')`,
          filter: "brightness(0.9)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Title with pixel-like shadow effect */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6">
          DODO
        </h1>

        {/* Description with backdrop blur */}
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed">
            Embark on a magical journey through enchanted forests, where every
            path leads to new adventures and mysteries waiting to be uncovered.
          </p>
        </div>
      </div>

      {/* New Section for Game Description */}
      <section className="relative z-10  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
          About the Game
        </h2>

        {/* Content Area with Image and Text */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-8">
          {/* Image of the game */}
          <div className="w-full lg:w-1/2">
            <img
              src="../gameplay.png"
              alt="DODO Game Screenshot"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Paragraph describing the game */}
          <div className="w-full lg:w-1/2 bg-black/30 backdrop-blur-sm rounded-lg p-6">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
              Dodo hates people that throw trash. Dodo wants to collect all the
              trash before the time runs out. He goes through various biomes in
              his hunt to clean all the trash
            </p>
          </div>
        </div>
      </section>
      <section className="relative z-10 mt-40 mb-16 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
          Tech & credit
        </h2>

        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed">
            Programmed using Godot. Placeholder sprites by Cup Nooble on
            itch.io.
          </p>
        </div>
      </section>
    </main>
  );
}

import Logo from "../Logo";

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-image bg-cover">
      <section className="px-4 lg:px-0 container text-white">
        <section className="min-h-screen flex flex-col items-center justify-center gap-12 lg:items-start">
          <section className="text-center lg:text-left">
            <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest md:mb-5 md:text-xl">
              Welcome to <Logo />
            </h2>
            <h1 className="max-w-3xl font-bold text-2xl leading-normal md:text-4xl lg:text-5xl xl:text-6xl md:leading-normal lg:leading-snug xl:leading-tight">
              We are an innovative team designing leading brands and online
              customer interaction.
            </h1>
          </section>

          <section>
            <button className="mr-3">Hire Us</button>
            <button className="ghost-btn">Learn More</button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;

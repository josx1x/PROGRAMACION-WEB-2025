export const HeroSection = ({firstWord, lastWord, desc}) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-500 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{firstWord}<span className="text-blue-200">{lastWord}</span></h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">{desc}</p>
            </div>
        </div>
    </section>
  )
}

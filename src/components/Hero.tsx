'use client'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container relative ">
        <div className="">
          <div className="flex items-center justify-left">
            <div className="text-left">
              {/* Overlay with glitch effect, absolutely positioned over heading */}



              {/* Heading - not animated here, only in overlay */}
              <div className="mb-4">
                <h1 className="text-4xl md:text-7xl font-bold text-primary tracking-widest">
                  MUHAMMAD <br/> FAUZAN<br/> AMZAR
                </h1>
              </div>



              {/* Buttons - no animation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="text-lg px-8 py-4 bg-primary text-white border border-primary rounded-[8px] font-medium transition-all duration-200 hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  View My Work
                </button>
                <button
                  className="text-lg px-8 py-4 bg-transparent text-primary border-2 border-primary rounded-[8px] font-medium transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg"
                  onClick={() => window.open('https://drive.google.com/file/d/1i8A_n6xZdGcNwoa4L3l8Q33qVqPKCOz_/view?usp=sharing', '_blank')}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
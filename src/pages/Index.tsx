import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen w-full bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="flex h-screen">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center text-gray-50">
          <div className="max-w-[680px] mx-auto w-full">
            <p className="font-inter font-bold text-[40px] text-white leading-[1.3] tracking-[-0.03em] mb-12">
              Tu hijo no necesita más contenido.<br />
              Necesita una forma de empezar a imaginar otra vez.
            </p>
            
            <a href="https://platanus-hack-25-team-25-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-white text-black hover:bg-neutral-100 hover:scale-105 transition-all duration-200 font-inter font-semibold tracking-[0.02em] px-20 text-center rounded-lg py-10 text-4xl shadow-lg hover:shadow-xl">
                Descubre Imagine Lab
              </Button>
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </div>;
};
export default Index;
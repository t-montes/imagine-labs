import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <p className="text-lg text-neutral-300 max-w-lg leading-relaxed md:text-3xl">
              "Tu hijo no necesita más contenido.<br />
              Necesita una forma de empezar a imaginar otra vez."
            </p>
            
            <Button className="mt-6 bg-white text-black hover:bg-neutral-200 font-sans text-3xl">
              Descubre Imagine Lab
            </Button>
            </div>

            {/* Right content */}
            <div className="flex-1 relative">
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </div>
          </div>
        </Card>
      </div>
    </div>;
};
export default Index;
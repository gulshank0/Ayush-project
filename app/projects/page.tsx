import { Navbar } from "@/components/ui/NavBar"
import  EventRegistration  from "../../components/ui/Event-registration";
import  Footer  from "@/components/ui/Footer";
export default function ProjectsPage() {
  return (
    <div className="bg-black">
        <Navbar />
        <div className="flex items-center justify-center pt-30">
      <div className="h-screen w-full pt-10">
       <EventRegistration />
      </div>
  
    </div>

    <Footer/>
  </div>
  );
}
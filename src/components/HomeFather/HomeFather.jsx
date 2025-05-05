import Benefits from "../Benefits/Benefits";
import FAQ from "../FAQ/FAQ";
import Navigate from "../Navigate/Navigate";
import Testimonials from "../Testimonials/Testimonials";


export default function HomeFather() {
    return (
        <div className="HomeFather Pb">
            <Benefits />
            <Testimonials />
            <FAQ />
            <Navigate />
        </div>
    )
}

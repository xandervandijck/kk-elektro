import Image from 'next/image'
import AboutUsImage from '../../assets/images/Foto 08-11-2023 om 10.00.jpg'
import './about-us.scss'

export default function AboutUs() {
  return (
    <div className="about-us bg-darker text-white">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="about-us-section">
                        <div className="row">
                            <div className="col-lg-6 pe-5 col-md-12 col-sm-12 d-flex align-items-center">
                                <div className="about-us-section-text">
                                    <h2>Over kk-elektro</h2>
                                    <p> 
                                        KK Elektro is een jong en dynamisch bedrijf dat zich richt op de elektrotechniek. 
                                        Wij zijn gespecialiseerd in het aanleggen van elektrotechnische installaties in de 
                                        woningbouw en utiliteit.

                                        Wij zijn een bedrijf dat zich richt op de wensen van de klant.
                                        We zijn flexibel en kunnen snel schakelen.
                                        Wij zijn pas tevreden als de klant tevreden is.
                                    </p>
                                    <button className="btn btn-primary">Meer over ons</button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 ps-5">
                                <div className="about-us-section-image">
                                    <Image
                                        src={AboutUsImage}
                                        alt="placeholder"
                                        width={500}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import Image from "next/image";

export default function rgbwLightPage() {
  return (
    <main>
      <div className="text-white">
        <h1 className="border-b-2 border-[#333333] w-auto font-extrabold sm:text-2xl mb-2">
          RGBW Lighting Controller
        </h1>
        <Image
          className="rounded-md"
          src={"/projects/rgbwLights/rgbwLights.png"}
          width={1280}
          height={720}
          alt="RGBW Lights"
        />
        <p className="py-4">
          At the end of 2023 I was in need of some lighting solutions for my
          desk space but struggled to find the right product, so I built my own.
        </p>
        <p className="pb-4">
          Many affordable RGBW LED strips are commonly controlled by an Infrared
          Remote. This technology has been around for decades and works by
          flashing an infrared diode in a specific pattern to control a device.
          Easy to implement and cheap to build, the major problem is
          scalability. Because it instructs the device based on specific
          patterns, each functionality required a unique pattern. It is why many
          affordable LED lighting solutions only have a handful of colours to
          pick from.
        </p>
        <p className="pb-4">
          On the other hand, pricier LED strips that incorporated magnitudes
          more colour options were almost always controlled via a phone app
          through WiFi or BlueTooth. I am a firm believer that connecting
          devices to an internet connection (especially for tasks as trivial as
          changing light colours) should always be avoided. I also believe that
          I shouldn&apos;t need to be reliant on a mobile phone to change the
          colours of the lights as well.
        </p>
        <p className="pb-4">
          My design for some simple LED lights uses analog signals to not only
          produce magnitudes more colours than IR controllers, but also allows
          me to do so without apps, a phone, or WiFi.
        </p>
        <h1 className="border-b-2 border-[#333333] w-auto sm:text-2xl mb-2">
          Design Overview
        </h1>
        <p className="pb-4">
          The brains of this device is an ATmega328P, a versatile and widely
          popular microcontroller with decent I/O, necessary ADC
          (analog-to-digital converter) channels and timers for PWM output. The
          LEDs themselves are powered with 12V and has a dedicated white diodes.
        </p>
        <h1 className="w-auto sm:text-xl mb-2">Components</h1>

        <div className="pl-2 pb-4">
          <li>
            <span className="font-bold">ATmega328P:</span> For controlling the
            light output
          </li>
          <li>
            <span className="font-bold">Potentiometers:</span> For manual
            adjustment of RGBW values
          </li>
          <li>
            <span className="font-bold">FQP30N06L MOSFETS:</span> To interface
            the microcontroller with the higher voltage circuit
          </li>
          <li>
            <span className="font-bold">16 MGhz Crystal Oscillator:</span> For
            high clock speeds than the inbuilt crystal in the ATmega328P
          </li>
          <li>
            <span className="font-bold">Capacitors:</span> 20pF and 100nF for
            the crystal oscillator and power smoothing
          </li>
          <li>
            <span className="font-bold">12V Power Supply:</span> A wall power
            supply that supplies 12V to the LED strips
          </li>
        </div>

        <h1 className="border-b-2 border-[#333333] w-auto sm:text-2xl mb-2">
          Prototype Development
        </h1>
        <div className="pb-4">
          <Image
            className="rounded-md"
            src={"/projects/rgbwLights/breadBoard.jpg"}
            width={1280}
            height={720}
            alt="Breadboard Prototype"
          />
        </div>
        <p className="pb-4">
          I started with a breadboard prototype to test functionality and
          behaviour. Once I knew the circuit was working as intended, I designed
          and assembled a custom PCB for the electronics.
        </p>
        <div className="pb-4">
          <iframe
            className="w-full h-[500px] rounded-md "
            height="315"
            src="https://www.youtube.com/embed/nACne1CTPog?si=CtHQ29lpFDS8sBQ2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className="pb-4">
          <Image
            className="rounded-md"
            src={"/projects/rgbwLights/pcbFrontCrop.jpg"}
            width={1280}
            height={720}
            alt="PCB Assembly"
          />
        </div>
        <p className="pb-4">
          I 3D printed a simple casing with a power switch to make it easier to
          use while still leaving some of the cool electronics exposed for
          visual appeal.
        </p>
        <div className="pb-4">
          <Image
            className="rounded-md"
            src={"/projects/rgbwLights/controllerFrontCrop.jpg"}
            width={1280}
            height={720}
            alt="Controller Case"
          />
        </div>
        <p className="pb-4">
          The final product allows for easy color mixing and control, enhancing
          my workspace lighting. This project was a practical exercise in
          microcontroller programming and circuit design. It meets my needs for
          versatile desk lighting without the limitations of existing products.
        </p>
        <div>
          <Image
            className="rounded-md"
            src={"/projects/rgbwLights/deskLED.jpg"}
            width={1280}
            height={720}
            alt="Desk LEDs"
          />
        </div>
      </div>
    </main>
  );
}

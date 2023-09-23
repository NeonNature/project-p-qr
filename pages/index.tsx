import Image from 'next/image'

export default function Home() {
  return (
    <main
      className={`background`}
    >
      <div className="card">
        <Image
          className="card-qr"
          src="/image-qr-code.png"
          alt="QR Code"
          width={400}
          height={400}
          priority
        />
        <div className="card-text-container">
        <h1 className="card-title">Improve your front-end skills by building projects</h1>
        <p className="card-desc">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

        </div>
      </div>


      
    </main>
  )
}

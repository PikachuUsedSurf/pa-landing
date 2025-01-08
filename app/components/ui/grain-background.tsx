'use client'

const GrainBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: '0.15'
        }}
      />
    </div>
  )
}

export default GrainBackground


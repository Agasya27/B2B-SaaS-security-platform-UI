import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// sign-up page — this is the first screen the user sees
export default function Login() {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields')
      return
    }
    if (!agreed) {
      setError('Please agree to Terms & Conditions')
      return
    }

    // fake delay, then go to dashboard
    setLoading(true)
    setError('')
    setTimeout(() => {
      setLoading(false)
      navigate('/dashboard')
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative bg-[#0F0F0F] overflow-hidden">
      {/* background gradient — layered for depth */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* base */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(140deg, #0a0a0f 0%, #0a0e14 25%, #0a1a25 38%, #0e3d3d 48%, #1a6b5a 54%, #d4692e 64%, #c0431a 70%, #3a1510 78%, #0f0f0f 90%)' }} />

        {/* teal streak */}
        <div className="absolute w-[200%] h-[300px]" style={{ top: '30%', left: '-30%', transform: 'rotate(-35deg)', background: 'linear-gradient(to bottom, transparent 0%, rgba(14,80,80,0.50) 20%, rgba(12,180,168,0.40) 40%, rgba(14,120,110,0.50) 60%, rgba(20,80,60,0.30) 80%, transparent 100%)', filter: 'blur(50px)' }} />

        {/* orange streak */}
        <div className="absolute w-[200%] h-[220px]" style={{ top: '56%', left: '-30%', transform: 'rotate(-35deg)', background: 'linear-gradient(to bottom, transparent 0%, rgba(200,80,20,0.50) 15%, rgba(230,110,30,0.80) 35%, rgba(240,130,40,0.90) 50%, rgba(220,90,25,0.80) 65%, rgba(180,50,15,0.50) 85%, transparent 100%)', filter: 'blur(40px)' }} />

        {/* red edge */}
        <div className="absolute w-[200%] h-[250px]" style={{ top: '64%', left: '-30%', transform: 'rotate(-35deg)', background: 'linear-gradient(to bottom, transparent 0%, rgba(150,30,15,0.40) 25%, rgba(120,25,12,0.55) 50%, rgba(80,15,10,0.40) 75%, transparent 100%)', filter: 'blur(60px)' }} />

        {/* soft teal glow */}
        <div className="absolute w-[200%] h-[400px]" style={{ top: '18%', left: '-30%', transform: 'rotate(-35deg)', background: 'linear-gradient(to bottom, transparent 0%, rgba(10,60,70,0.25) 30%, rgba(12,100,100,0.20) 60%, transparent 100%)', filter: 'blur(70px)' }} />

        {/* darken the corners so text is readable */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, rgba(8,8,12,0.95) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(8,8,12,0.92) 0%, transparent 55%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(10,8,8,0.65) 0%, transparent 45%)' }} />
      </div>

      {/* left side — branding and features */}
      <div className="flex w-full lg:w-[57%] text-white flex-col justify-between px-5 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-8 relative z-10 gap-6 sm:gap-8 lg:gap-0 min-h-0 lg:min-h-screen">
        {/* logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span className="text-lg font-bold tracking-tight font-sans">aps</span>
        </div>

        {/* hero text */}
        <div className="max-w-[480px]">
          <h1 className="text-[26px] sm:text-[32px] md:text-[42px] xl:text-[48px] font-bold leading-[1.15] tracking-tight mb-6 sm:mb-8">
            Expert level Cybersecurity<br />
            in <em className="italic text-accent">hours</em> not weeks.
          </h1>

          <p className="text-[14px] font-semibold text-white mb-5">What's included</p>
          <div className="space-y-4">
            <FeatureItem text="Effortlessly spider and map targets to uncover hidden security flaws" />
            <FeatureItem text="Deliver high-quality, validated findings in hours, not weeks." />
            <FeatureItem text="Generate professional, enterprise-grade security reports automatically." />
          </div>
        </div>

        {/* trustpilot */}
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <svg className="w-4 h-4 text-[#00b579]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[13px] font-semibold text-[#00b579]">Trustpilot</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-bold text-white">Rated 4.5/5.0</span>
            <span className="text-[13px] text-[#64748a]">(100k+ reviews)</span>
          </div>
        </div>
      </div>

      {/* right side — sign up form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10 lg:py-0 lg:px-12 relative z-10">
        <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-2xl p-5 sm:p-8 lg:p-10">
          <div className="text-center mb-6">
            <h2 className="text-[24px] font-bold text-gray-900 tracking-tight mb-1">Sign up</h2>
            <p className="text-[14px] text-[#697282]">
              Already have an account?{' '}
              <button className="text-accent hover:underline font-medium">Log in</button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-2.5">
                {error}
              </div>
            )}

            <input
              type="text"
              placeholder="First name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#e2e8ef] bg-white text-gray-900 placeholder-[#9ca3af] text-[14px] focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none"
            />

            <input
              type="text"
              placeholder="Last name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#e2e8ef] bg-white text-gray-900 placeholder-[#9ca3af] text-[14px] focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none"
            />

            <input
              type="email"
              placeholder="Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#e2e8ef] bg-white text-gray-900 placeholder-[#9ca3af] text-[14px] focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password (8+ characters)*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8ef] bg-white text-gray-900 placeholder-[#9ca3af] text-[14px] focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-gray-600"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>

            {/* agree to terms */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-gray-300 text-accent focus:ring-accent"
              />
              <span className="text-[13px] text-[#697282] leading-snug">
                I agree to Aps's{' '}
                <button type="button" className="text-accent hover:underline font-medium">Terms & Conditions</button>
                {' '}and acknowledge the{' '}
                <button type="button" className="text-accent hover:underline font-medium">Privacy Policy</button>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 rounded-full transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-[15px]"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </button>

            {/* social login */}
            <div className="flex gap-3 pt-1">
              <button type="button" className="flex-1 flex items-center justify-center py-3 rounded-full bg-[#1a1a1a] hover:bg-black transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </button>
              <button type="button" className="flex-1 flex items-center justify-center py-3 rounded-full bg-[#f5f0eb] border border-[#e8e0d8] hover:bg-[#ede6df] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>
              <button type="button" className="flex-1 flex items-center justify-center py-3 rounded-full bg-[#0668E1] hover:bg-[#0559C4] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.897 4h-.024l-.031 2.615h.022c1.715 0 3.046 1.357 5.94 6.246l.175.297.012.02 1.62-2.438-.012-.019a48.763 48.763 0 00-1.098-1.716 28.01 28.01 0 00-1.175-1.629C10.413 4.932 8.812 4 6.896 4z" fill="white"/>
                  <path d="M6.873 4C4.95 4.01 3.247 5.258 2.02 7.17a4.352 4.352 0 00-.01.017l2.254 1.231.011-.017c.718-1.083 1.61-1.774 2.568-1.785h.021L6.896 4h-.023z" fill="white"/>
                  <path d="M2.019 7.17l-.011.017C1.2 8.447.598 9.995.274 11.664l-.005.022 2.534.6.004-.022c.27-1.467.786-2.828 1.456-3.845l.011-.017L2.02 7.17z" fill="white"/>
                  <path d="M2.807 12.264l-2.533-.6-.005.022c-.177.918-.267 1.851-.269 2.786v.023l2.598.233v-.023a12.591 12.591 0 01.21-2.44z" fill="white"/>
                  <path d="M2.677 15.537a5.462 5.462 0 01-.079-.813v-.022L0 14.468v.024a8.89 8.89 0 00.146 1.652l2.535-.585a4.106 4.106 0 01-.004-.022z" fill="white"/>
                  <path d="M3.27 16.89c-.284-.31-.484-.756-.589-1.328l-.004-.021-2.535.585.004.021c.192 1.01.568 1.85 1.106 2.487l.014.017 2.018-1.745a2.106 2.106 0 01-.015-.016z" fill="white"/>
                  <path d="M10.78 9.654c-1.528 2.35-2.454 3.825-2.454 3.825-2.035 3.2-2.739 3.917-3.871 3.917a1.545 1.545 0 01-1.186-.508l-2.017 1.744.014.017C2.01 19.518 3.058 20 4.356 20c1.963 0 3.374-.928 5.884-5.33l1.766-3.13a41.283 41.283 0 00-1.227-1.886z" fill="white"/>
                  <path d="M13.502 5.946l-.016.016c-.4.43-.786.908-1.16 1.416.378.483.768 1.024 1.175 1.63.48-.743.928-1.345 1.367-1.807l.016-.016-1.382-1.24z" fill="white"/>
                  <path d="M20.918 5.713C19.853 4.633 18.583 4 17.225 4c-1.432 0-2.637.787-3.723 1.944l-.016.016 1.382 1.24.016-.017c.715-.747 1.408-1.12 2.176-1.12.826 0 1.6.39 2.27 1.075l.015.016 1.589-1.425-.016-.016z" fill="white"/>
                  <path d="M23.998 14.125c-.06-3.467-1.27-6.566-3.064-8.396l-.016-.016-1.588 1.424.015.016c1.35 1.392 2.277 3.98 2.361 6.971v.023h2.292v-.022z" fill="white"/>
                  <path d="M23.998 14.15v-.023h-2.292v.022c.004.14.006.282.006.424 0 .815-.121 1.474-.368 1.95l-.011.022 1.708 1.782.013-.02c.62-.96.946-2.293.946-3.91 0-.083 0-.165-.002-.247z" fill="white"/>
                  <path d="M21.344 16.52l-.011.02c-.214.402-.519.67-.917.787l.778 2.462a3.493 3.493 0 00.438-.182 3.558 3.558 0 001.366-1.218l.044-.065.012-.02-1.71-1.784z" fill="white"/>
                  <path d="M19.92 17.393c-.262 0-.492-.039-.718-.14l-.798 2.522c.449.153.927.222 1.46.222.492 0 .943-.073 1.352-.215l-.78-2.462c-.167.05-.341.075-.517.073z" fill="white"/>
                  <path d="M18.323 16.534l-.014-.017-1.836 1.914.016.017c.637.682 1.246 1.105 1.937 1.337l.797-2.52c-.291-.125-.573-.353-.9-.731z" fill="white"/>
                  <path d="M18.309 16.515c-.55-.642-1.232-1.712-2.303-3.44l-1.396-2.336-.011-.02-1.62 2.438.012.02.989 1.668c.959 1.61 1.74 2.774 2.493 3.585l.016.016 1.834-1.914a2.353 2.353 0 01-.014-.017z" fill="white"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// small helper for the "what's included" bullets
function FeatureItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p className="text-[14px] text-[#93a3b8] leading-relaxed">{text}</p>
    </div>
  )
}

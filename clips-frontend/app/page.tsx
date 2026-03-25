import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] bg-[url('https://s3-alpha-sig.figma.com/img/848e/8904/0c797449673323565e3b5e4c6c0b3c5a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover bg-center px-4">
      
      {/* The Glassmorphism Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-sm text-zinc-400">Log in to your account to continue</p>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" className="h-5 w-5" />
            Continue with Google
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            <img src="https://www.svgrepo.com/show/475635/apple-color.svg" loading="lazy" alt="apple logo" className="h-5 w-5 invert" />
            Continue with Apple
          </button>
        </div>

        {/* Separator */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-white/10"></div>
          <span className="text-xs font-medium text-zinc-500">OR EMAIL</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        {/* Email Form */}
        <div className="space-y-4">
          <div>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Continue with Email
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

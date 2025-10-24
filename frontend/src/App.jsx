import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Archive,
  LogIn,
  LogOut,
  UserPlus,
  ShoppingCart,
  Sparkles,
  DollarSign,
  PenTool,
  Twitter,
  Instagram,
  Github,
  ArrowRight,
  Menu,
  X,
  Mail,
  Lock,
  User,
  Search,
  Loader2, // For loading spinners
  AlertCircle, // For error messages
  CheckCircle, // For success messages
  Image as ImageIcon,
  BookOpen,
  Film,
  Music,
  Palette,
  Camera,
} from 'lucide-react';

// --- Helper Components ---

/**
 * A reusable loading spinner.
 */
const LoadingSpinner = () => (
  <Loader2 size={18} className="animate-spin" />
);

/**
 * A reusable error message box.
 */
const ErrorMessage = ({ message }) => (
  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-900/50 text-red-300 border border-red-700">
    <AlertCircle size={18} />
    <span className="text-sm">{message}</span>
  </div>
);

/**
 * A reusable success message box.
 */
const SuccessMessage = ({ message }) => (
  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-900/50 text-green-300 border border-green-700">
    <CheckCircle size={18} />
    <span className="text-sm">{message}</span>
  </div>
);


// --- SVG Components ---

/**
 * A stylized 'V' logo for Vibora, used on forms.
 */
const ViboraVLogo = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-fuchsia-500"
  >
    <path
      d="M8 3L2 15L12 21L22 15L16 3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21L12 9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * A 'crazy' abstract SVG for the hero section, representing a collage of poster frames.
 */
const HeroIllustration = () => (
  <div className="relative w-full max-w-lg h-64 md:h-96">
    {/* Frame 1 - Back */}
    <div className="absolute top-0 left-10 w-48 h-64 bg-cyan-400 rounded-lg transform -rotate-12 transition-all duration-300 hover:rotate-0 hover:scale-105 opacity-80 shadow-lg">
      <div className="w-full h-full border-8 border-white rounded-lg"></div>
    </div>
    {/* Frame 2 - Middle */}
    <div className="absolute top-10 left-0 w-56 h-72 bg-fuchsia-500 rounded-lg transform rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105 z-10 shadow-2xl">
      <div className="w-full h-full border-8 border-white rounded-lg flex items-center justify-center">
        <span className="text-white font-black text-4xl transform -rotate-6">VIBE</span>
      </div>
    </div>
    {/* Frame 3 - Front */}
    <div className="absolute top-20 left-40 w-40 h-56 bg-gray-700 rounded-lg transform rotate-12 transition-all duration-300 hover:rotate-0 hover:scale-105 z-20 opacity-90 shadow-lg">
      <div className="w-full h-full border-8 border-white rounded-lg"></div>
    </div>
  </div>
);

// --- Page & Component Definitions ---

/**
 * Header Component
 * Handles navigation and mobile menu.
 */
const Header = ({ isLoggedIn, user, navigateTo, handleLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = isLoggedIn ? (
    <React.Fragment>
      <button
        onClick={() => {
          navigateTo('dashboard');
          setIsMobileMenuOpen(false);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
      >
        <LayoutDashboard size={18} /> Dashboard
      </button>
      <button
        onClick={() => {
          navigateTo('orders');
          setIsMobileMenuOpen(false);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
      >
        <Archive size={18} /> My Orders
      </button>
      <span className="px-4 py-2 text-cyan-400 hidden lg:block">
        |
      </span>
      <span className="px-4 py-2 text-gray-400">
        Hi, {user?.name.split(' ')[0]}
      </span>
      <button
        onClick={() => {
          handleLogout();
          setIsMobileMenuOpen(false);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-400 hover:bg-red-900 transition-colors"
      >
        <LogOut size={18} /> Logout
      </button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <button
        onClick={() => {
          navigateTo('login');
          setIsMobileMenuOpen(false);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
      >
        <LogIn size={18} /> Login
      </button>
      <button
        onClick={() => {
          navigateTo('register');
          setIsMobileMenuOpen(false);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fuchsia-600 text-white shadow-lg hover:bg-fuchsia-700 transition-all transform hover:scale-105"
      >
        Register <UserPlus size={18} />
      </button>
    </React.Fragment>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-lg border-b border-gray-800 shadow-2xl">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigateTo('landing')}
          className="text-3xl font-black tracking-tighter cursor-pointer"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400">
            VIBORA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">{navLinks}</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black shadow-xl py-4 z-40">
          <div className="container mx-auto px-6 flex flex-col gap-4">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

/**
 * Footer Component
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-black tracking-tighter text-white">VIBORA</h3>
          <p className="text-gray-400 mt-2">Your Walls, Your Story.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Vibora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/**
 * Landing Page Component
 */
const LandingPage = ({ navigateTo }) => {
  return (
    <div className="w-full">
      {/* --- Hero Section --- */}
      <section className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-fuchsia-600 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-30"></div>

        {/* Hero Content */}
        <div className="z-10 text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-white leading-tight">
            Your Walls,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400">
              Your Story.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
            Ditch the boring. VIBORA brings you affordable, exclusive posters
            that connect with your vibe. We're more than art; we're a piece of
            your story.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigateTo('dashboard')}
              className="group flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-fuchsia-500/50"
            >
              Start Your Collection
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigateTo('register')}
              className="group flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gray-800 text-gray-200 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700"
            >
              Join the Vibe
            </button>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="z-10 mt-16 md:mt-0 md:w-1/2 flex items-center justify-center">
          <HeroIllustration />
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="bg-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-white">
              Why Students <span className="text-fuchsia-500">Choose Us</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              We get it. You want cool stuff that doesn't break the bank.
              That's our whole deal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-fuchsia-500/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 flex items-center justify-center shadow-lg">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-serif font-bold text-white">Exclusive Drops</h3>
              <p className="mt-3 text-gray-300">
                Fresh designs from emerging artists. You won't find these at the
                mall.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                <DollarSign size={32} className="text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-serif font-bold text-white">Affordable Art</h3>
              <p className="mt-3 text-gray-300">
                Look like a million bucks, pay like a student. Your wallet will
                thank you.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <PenTool size={32} className="text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-serif font-bold text-white">Story-Driven</h3>
              <p className="mt-3 text-gray-300">
                Every poster has a purpose. Find the art that speaks your
                language.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Login Page Component
 */
const LoginPage = ({ navigateTo, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Login failed');
      }

      // Backend sends { token, user }
      handleLogin(data.user, data.token);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-md w-full space-y-8 bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-700">
        {/* Glow */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-fuchsia-600 rounded-full filter blur-2xl opacity-30"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full filter blur-2xl opacity-30"></div>

        <div className="relative z-10">
          <div className="flex justify-center">
            <ViboraVLogo />
          </div>
          <h2 className="mt-6 text-center text-3xl font-serif font-bold text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Ready to find your next vibe?
          </p>
        </div>
        <form className="mt-8 space-y-6 relative z-10" onSubmit={onLogin}>
          {error && <ErrorMessage message={error} />}
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 pl-10 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>
            <div className="relative pt-4">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 pl-10 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3 top-7 text-gray-500" size={18} />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-fuchsia-500 transition-all transform hover:scale-105 shadow-lg disabled:bg-fuchsia-800 disabled:cursor-not-allowed"
            >
              {isLoading ? <LoadingSpinner /> : 'Sign in'}
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400 relative z-10">
          Don't have an account?{' '}
          <button
            onClick={() => navigateTo('register')}
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

/**
 * Register Page Component
 */
const RegisterPage = ({ navigateTo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Registration failed');
      }

      // Backend sends { msg: 'User created', userId: ... }
      setSuccess('User created! Please log in.');
      setTimeout(() => {
        navigateTo('login');
      }, 2000); // Redirect to login after 2 seconds

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-md w-full space-y-8 bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-700">
        {/* Glow */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-fuchsia-600 rounded-full filter blur-2xl opacity-30"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500 rounded-full filter blur-2xl opacity-30"></div>

        <div className="relative z-10">
          <div className="flex justify-center">
            <ViboraVLogo />
          </div>
          <h2 className="mt-6 text-center text-3xl font-serif font-bold text-white">
            Join the Vibe
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Start your story with us.
          </p>
        </div>
        <form className="mt-8 space-y-6 relative z-10" onSubmit={onRegister}>
          {error && <ErrorMessage message={error} />}
          {success && <SuccessMessage message={success} />}
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 pl-10 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <User className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>
            <div className="relative">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 pl-10 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 pl-10 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-fuchsia-500 transition-all transform hover:scale-105 shadow-lg disabled:bg-fuchsia-800 disabled:cursor-not-allowed"
            >
              {isLoading ? <LoadingSpinner /> : 'Create Account'}
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400 relative z-10">
          Already have an account?{' '}
          <button
            onClick={() => navigateTo('login')}
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

/**
 * Dashboard Page Component
 * This is where users see posters.
 */
const DashboardPage = ({ user }) => {
  // Mock data for posters - will be replaced by API call
  const [posters, setPosters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data for collections
  const collections = [
    { name: 'Movies', icon: Film, img: 'https://mir-s3-cdn-cf.behance.net/projects/404/bc2650124374019.Y3JvcCw2Mzc5LDQ5ODksMCwyMzUy.jpg' },
    { name: 'Music', icon: Music, img: 'https://t3.ftcdn.net/jpg/07/27/37/60/360_F_727376094_y30akDIaPvRwEmPuZvKhkB1exL5XSyXT.jpg' },
    { name: 'Anime', icon: BookOpen, img: 'https://i.shgcdn.com/616eabe1-f963-46ab-b207-04248c097558/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
    { name: 'Car', icon: Palette, img: 'https://cdn11.bigcommerce.com/s-09ecd/images/stencil/1280x1280/products/1632/3671/ochoice_Vehicles1__85133.1708983688.png?c=2' },
    { name: 'Cricket', icon: Camera, img: 'https://img.freepik.com/premium-vector/stunning-vector-art-cricket-player-batting-style_1227880-100.jpg?semt=ais_hybrid&w=740&q=80' },
    { name: 'Custom Poster', icon: PenTool, img: 'https://theposterstore.in/static/assets/brands/customtps.webp?v=2' },
  ];
  
  // Mock data for community vibe wall
  const vibeWall = [
    { id: 1, alt: 'Student room with posters', img: 'https://i.ibb.co/Zz7Gvvj9/Whats-App-Image-2025-10-24-at-21-47-35.jpg' },
    { id: 2, alt: 'Close up of poster', img: 'https://i.ibb.co/Q7FY3Hxq/Whats-App-Image-2025-10-24-at-21-47-35-1.jpg' },
    { id: 3, alt: 'Desk setup with art', img: 'https://i.ibb.co/CKCKwRL1/Whats-App-Image-2025-10-24-at-21-47-36.jpg' },
    { id: 4, alt: 'Multiple posters on a wall', img: 'https://i.ibb.co/5hvmxZFL/Whats-App-Image-2025-10-24-at-21-47-02-1.jpg' },
  ];

  // Fetch posters from backend on component mount
  useEffect(() => {
    const fetchPosters = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // TODO: Get token from localStorage
        // const token = localStorage.getItem('viboraToken');
        // if (!token) {
        //   throw new Error('No auth token found');
        // }
        
        // TODO: Update this URL to match your backend poster route
        // I'm assuming it's '/api/poster/all' or something similar
        // For now, I'll use mock data.
        
        // --- MOCK DATA ---
        const mockPosterData = [
          { _id: 1, title: 'Peter Parker & Gwen Stacy', price: 19.99, imageUrl: 'https://i.ibb.co/nM2L0z4V/7.png' },
          { _id: 2, title: 'Batman Era', price: 24.99, imageUrl: 'https://i.ibb.co/PGL940t1/8.png' },
          { _id: 3, title: 'Inspired Van Gogh Collection', price: 29.99, imageUrl: 'https://i.ibb.co/KczSjc7T/Whats-App-Image-2025-10-24-at-22-12-35.jpg' },
          { _id: 4, title: 'Midnight Vibe', price: 19.99, imageUrl: 'https://i.ibb.co/9kd5Q6xs/11.png' },
          { _id: 5, title: 'Student Mood', price: 17.99, imageUrl: 'https://i.ibb.co/jZ9TtsCv/9.png' },
          { _id: 6, title: 'Great Power', price: 29.99, imageUrl: 'https://i.ibb.co/gZbjyycY/with-great-power.png' },
          { _id: 7, title: 'Porsche 911 GT3', price: 29.99, imageUrl: 'https://i.ibb.co/xqSZq6Yf/Funny-Financial-Meme-Instagram-Post-4.png' },
          { _id: 8, title: 'Retro Future', price: 22.99, imageUrl: 'https://i.ibb.co/DDXPWcbW/12.png' },
        ];
        // --- END MOCK DATA ---

        // --- REAL API CALL (example) ---
        // const response = await fetch('/api/posters', {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // });
        // const data = await response.json();
        // if (!response.ok) {
        //   throw new Error(data.msg || 'Failed to fetch posters');
        // }
        // setPosters(data); // Assuming data is an array of posters
        
        // Using mock data for now
        setPosters(mockPosterData);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosters();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container mx-auto px-6 py-12 text-gray-200">
      <h1 className="text-4xl font-serif font-bold text-white">
        Welcome, <span className="text-fuchsia-500">{user.name.split(' ')[0]}</span>!
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Find the art that tells your story.
      </p>

      {/* Search Bar */}
      <div className="mt-8 mb-12">
        <div className="relative">
          <input
            type="text"
            className="w-full md:w-1/2 lg:w-1/3 pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            placeholder="Search by vibe, artist, or color..."
          />
          <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
        </div>
      </div>
      
      {/* --- Shop by Collection --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-white mb-6">Shop by Collection</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {collections.map((collection) => (
            <div key={collection.name} className="flex flex-col items-center gap-3 group cursor-pointer">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-fuchsia-500 transition-all duration-300 transform group-hover:scale-110">
                <img src={collection.img} alt={collection.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-fuchsia-400 transition-colors">{collection.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* --- Community Vibe Wall --- */}
      <section className="mb-16 bg-gray-900 p-8 rounded-xl border border-gray-800">
         <h2 className="text-3xl font-serif font-bold text-white mb-6 text-center">
          Community <span className="text-cyan-400">Vibe Wall</span>
         </h2>
         <p className="text-center text-gray-400 max-w-xl mx-auto mb-8">
           See how other students are styling their space. Get inspired and share your own vibe.
         </p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {vibeWall.map(vibe => (
            <div key={vibe.id} className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30">
              <img src={vibe.img} alt={vibe.alt} className="w-full h-full object-cover aspect-square" />
            </div>
          ))}
         </div>
         <div className="text-center mt-8">
           <button className="group flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-lg bg-cyan-600 text-white text-base font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-cyan-500">
              <ImageIcon size={18} /> Share Your Vibe
            </button>
         </div>
      </section>

      {/* --- Featured Posters Grid --- */}
      <section>
        <h2 className="text-3xl font-serif font-bold text-white mb-6">Featured Posters</h2>
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-fuchsia-500" />
          </div>
        )}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {posters.map((poster) => (
              <div
                key={poster._id}
                className="group bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-500/20"
              >
                <div className="w-full h-80 overflow-hidden">
                  <img
                    src={poster.imageUrl} // Use imageUrl from (mock) API
                    alt={poster.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold text-white">{poster.title}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-black text-cyan-400">
                      ${poster.price}
                    </span>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-fuchsia-600 text-white text-sm font-medium shadow-lg hover:bg-fuchsia-700 transition-all transform hover:scale-105">
                      <ShoppingCart size={16} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};


/**
 * Orders Page Component
 */
const OrdersPage = () => {
  // Mock data for orders - will be replaced by API call
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from backend on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // TODO: Get token from localStorage
        const token = localStorage.getItem('viboraToken');
        if (!token) {
          throw new Error('No auth token found. Please log in.');
        }

        // TODO: Update this URL to match your backend order route
        // I'm assuming it's '/api/orders/my-orders' or similar
        
        // --- MOCK DATA ---
        const mockOrderData = [
          { _id: 'VBR-1003', createdAt: '2025-10-20T10:00:00Z', status: 'Shipped', total: 44.98 },
          { _id: 'VBR-1002', createdAt: '2025-10-15T14:30:00Z', status: 'Processing', total: 19.99 },
          { _id: 'VBR-1001', createdAt: '2025-09-28T09:15:00Z', status: 'Delivered', total: 52.97 },
        ];
        // --- END MOCK DATA ---
        
        // --- REAL API CALL (example) ---
        // const response = await fetch('/api/orders/my-orders', {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // });
        // const data = await response.json();
        // if (!response.ok) {
        //   throw new Error(data.msg || 'Failed to fetch orders');
        // }
        // setOrders(data); // Assuming data is an array of orders
        
        // Using mock data for now
        setOrders(mockOrderData);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container mx-auto px-6 py-12 text-gray-200">
      <h1 className="text-4xl font-serif font-bold text-white mb-8">My Orders</h1>

      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <Loader2 size={48} className="animate-spin text-fuchsia-500" />
        </div>
      )}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && orders.length === 0 && (
        <div className="text-center text-gray-400 bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">No Orders Yet</h3>
          <p>Looks like you haven't placed any orders. Time to find your next vibe!</p>
          {/* TODO: Add a button to navigate to dashboard */}
        </div>
      )}
      {!isLoading && !error && orders.length > 0 && (
        <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-800 overflow-hidden">
          <ul className="divide-y divide-gray-800">
            {orders.map((order) => (
              <li
                key={order._id}
                className="p-6 hover:bg-gray-800 transition-colors"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">
                      Order <span className="text-cyan-400">#{order._id}</span>
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Placed on {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-8">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Status</p>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Shipped'
                            ? 'bg-blue-600 text-white'
                            : order.status === 'Processing'
                            ? 'bg-yellow-500 text-black'
                            : 'bg-green-600 text-white'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total</p>
                      <span className="text-lg font-bold text-white">
                        ${order.total}
                      </span>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


/**
 * Main App Component
 * This is the root of your application.
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'login', 'register', 'dashboard', 'orders'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Stores user info like { name, email }
  const [authLoading, setAuthLoading] = useState(true); // For initial token check

  // --- Check for existing token on app load ---
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('viboraToken');
      if (!token) {
        setAuthLoading(false);
        return;
      }

      try {
        // Token exists, let's verify it with the backend /me route
        const response = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Session expired');
        }

        const userData = await response.json();
        // Backend sends user data
        setUser(userData);
        setIsLoggedIn(true);

      } catch (err) {
        // Token is invalid or expired
        localStorage.removeItem('viboraToken');
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    checkAuthStatus();
  }, []); // Empty dependency array = runs once on app load


  // --- Navigation Functions ---
  
  // Call this to change pages
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Call this when user successfully logs in
  const handleLogin = (userData, token) => {
    localStorage.setItem('viboraToken', token);
    setUser(userData);
    setIsLoggedIn(true);
    navigateTo('dashboard');
  };

  // Call this when user logs out
  const handleLogout = () => {
    localStorage.removeItem('viboraToken');
    setUser(null);
    setIsLoggedIn(false);
    navigateTo('landing');
  };

  // --- Page Rendering Logic ---
  const renderPage = () => {
    // While checking auth, show a global spinner
    if (authLoading) {
      return (
        <div className="flex-grow flex items-center justify-center">
          <Loader2 size={48} className="animate-spin text-fuchsia-500" />
        </div>
      );
    }
    
    switch (currentPage) {
      case 'login':
        return <LoginPage navigateTo={navigateTo} handleLogin={handleLogin} />;
      case 'register':
        return <RegisterPage navigateTo={navigateTo} />;
      case 'dashboard':
        return isLoggedIn ? <DashboardPage user={user} /> : <LandingPage navigateTo={navigateTo} />;
      case 'orders':
        return isLoggedIn ? <OrdersPage /> : <LandingPage navigateTo={navigateTo} />;
      case 'landing':
      default:
        return <LandingPage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-gray-200 selection:bg-fuchsia-500 selection:text-white">
      <Header
        isLoggedIn={isLoggedIn}
        user={user}
        navigateTo={navigateTo}
        handleLogout={handleLogout}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}


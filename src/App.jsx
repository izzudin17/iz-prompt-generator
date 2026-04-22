import React, { useState } from 'react';
import { Laptop, Smartphone, Palette, Sparkles, Copy, Check, Terminal, Rocket } from 'lucide-react';

export default function App() {
  // --- STATE MANAGEMENT ---
  const [projectType, setProjectType] = useState('Website');
  const [appName, setAppName] = useState('');
  const [features, setFeatures] = useState('');
  const [designStyle, setDesignStyle] = useState('Minimalis & Modern');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  // --- LOGIC FUNCTIONS ---
  const handleGenerate = () => {
    if (!appName || !features) {
      alert("⚠️ Harap isi Nama Aplikasi dan Fitur Utama terlebih dahulu!");
      return;
    }

    // Template Prompt Teknis Profesional
    const prompt = `Sebagai seorang Senior Software Engineer, bantu saya membangun sebuah ${projectType} bernama "${appName}".

Struktur Proyek yang Diinginkan:
- Gaya Desain: ${designStyle} (Pastikan UI responsif dan user-friendly).

Fitur Utama yang Harus Diimplementasikan:
${features.split(',').map(f => `- ${f.trim()}`).join('\n')}

Tugas Anda:
1. Buatkan arsitektur folder proyek yang efisien.
2. Tuliskan kode boilerplate untuk komponen utama (termasuk HTML, CSS/Tailwind, dan JavaScript/Framework yang relevan).
3. Implementasikan sistem state management yang sesuai untuk fitur-fitur di atas.
4. Berikan panduan singkat tentang cara menjalankan proyek ini.`;

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset tombol setelah 2 detik
    });
  };

  // --- COMPONENT UI ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3.5 bg-indigo-600 text-white rounded-3xl mb-4 shadow-xl shadow-indigo-100 transform hover:scale-105 transition-transform">
            <Sparkles size={36} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-950 mb-3">
            IZ Prompt <span className="text-indigo-600">Architect</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Hasilkan instruksi teknis tingkat tinggi untuk membangun aplikasi impian Anda dengan bantuan AI.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* --- BAGIAN INPUT --- */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-7">
            
            {/* Project Type Toggle */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-3.5 block">1. Pilih Jenis Proyek</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setProjectType('Website')}
                  className={`flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl border-2 transition-all duration-200 ${projectType === 'Website' ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold shadow-inner shadow-indigo-100/50' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'}`}
                >
                  <Laptop size={22} />
                  <span>Website (Responsive)</span>
                </button>
                <button 
                  onClick={() => setProjectType('Mobile App')}
                  className={`flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl border-2 transition-all duration-200 ${projectType === 'Mobile App' ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold shadow-inner shadow-indigo-100/50' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'}`}
                >
                  <Smartphone size={22} />
                  <span>Mobile App (Android/iOS)</span>
                </button>
              </div>
            </div>

            {/* App Name Input */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2.5 block">2. Nama atau Topik Aplikasi</label>
              <input 
                type="text" 
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="Contoh: E-Library Management"
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 focus:bg-white outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Features Textarea */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2.5 block">3. Fitur Utama (pisahkan dengan koma)</label>
              <textarea 
                rows="4"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                placeholder="Contoh: Login user, Dashboard statistik, Upload dokumen, Notifikasi realtime"
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 focus:bg-white outline-none transition-all placeholder:text-slate-400 resize-none custom-scrollbar"
              ></textarea>
            </div>

            {/* Design Style Select */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2.5 block flex items-center gap-2">
                <Palette size={18} className="text-slate-400" /> 4. Pilih Gaya Desain
              </label>
              <select 
                value={designStyle}
                onChange={(e) => setDesignStyle(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 focus:bg-white outline-none transition-all appearance-none cursor-pointer"
              >
                {['Minimalis & Modern', 'Playful & Colorful', 'Corporate & Professional', 'Dark Mode / Futuristic', 'Glassmorphism UI'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Generate Button */}
            <button 
              onClick={handleGenerate}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-5 rounded-2xl shadow-xl shadow-indigo-100 transition-all duration-300 flex items-center justify-center gap-3 transform active:scale-[0.97]"
            >
              <Rocket size={22} />
              Generate Architect Prompt 🚀
            </button>
          </div>

          {/* --- BAGIAN OUTPUT (TERMINAL STYLE) --- */}
          <div className="flex flex-col h-full">
            <div className={`flex-1 bg-slate-950 rounded-3xl p-7 text-slate-300 relative overflow-hidden transition-all duration-500 min-h-[450px] ${!generatedPrompt && 'flex items-center justify-center border-4 border-dashed border-slate-800 bg-slate-900/50'}`}>
              
              {!generatedPrompt ? (
                // State: Belum ada prompt
                <div className="text-center space-y-5">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-600 shadow-xl shadow-black/10">
                    <Terminal size={36} />
                  </div>
                  <p className="text-slate-600 font-medium italic text-lg max-w-sm">
                    Isi data di panel kiri, lalu klik 'Generate' untuk melihat instruksi teknis di sini...
                  </p>
                </div>
              ) : (
                // State: Prompt sudah digenerate
                <>
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                    <div className="flex gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg shadow-red-900/50"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-900/50"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg shadow-green-900/50"></div>
                    </div>
                    <button 
                      onClick={copyToClipboard}
                      className={`flex items-center gap-2.5 text-sm px-5 py-2.5 rounded-xl transition-all border ${copied ? 'bg-green-600 text-white border-green-500' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'}`}
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                      {copied ? 'Tersalin!' : 'Salin Prompt'}
                    </button>
                  </div>
                  <div className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap overflow-y-auto max-h-[500px] pr-3 custom-scrollbar text-emerald-300 selection:bg-indigo-700 selection:text-white">
                    {generatedPrompt}
                  </div>
                  {/* Efek cahaya dekoratif */}
                  <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-indigo-500/10 blur-[90px] pointer-events-none rounded-full"></div>
                </>
              )}
            </div>
            
            {/* Tips Card */}
            <div className="mt-5 bg-indigo-50 border border-indigo-100 p-5 rounded-2xl flex items-start gap-3.5 shadow-inner shadow-indigo-100/50">
              <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-indigo-900 font-bold text-sm">Tips Pro untuk Hasil Terbaik!</h4>
                <p className="text-indigo-700 text-xs">Semakin detail fitur yang Anda tuliskan (pisahkan dengan koma), semakin akurat struktur kode dan boilerplate yang akan dibuat oleh AI.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400 text-sm border-t border-slate-100 pt-8">
          <p>&copy; {new Date().getFullYear()} IZ Prompt Architect. Built with React & Tailwind CSS.</p>
        </footer>

      </div>
    </div>
  );
}
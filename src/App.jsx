import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Beams from "./Background/Beams";
import "./App.css";
import TextType from "./Animate/TextType";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BlurText from "./Animate/BlurText";

export default function ClassLandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="relative min-h-screenoverflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={12}
        />
      </div>

      {/* Konten utama */}
      <div className="flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 shadowbackdrop-blur-md sticky top-0 z-50">
          <h1 className="text-white text-xl font-bold" data-aos="fade-right">
            XII RPL 1
          </h1>
          <div className="space-x-6 hidden md:flex" data-aos="fade-left">
            <a
              href="#about"
              className=" text-white hover:text-xl transition-all"
            >
              Tentang
            </a>
            <a
              href="#teachers"
              className="text-white hover:text-xl transition-all"
            >
              Guru
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-xl transition-all"
            >
              Galeri
            </a>
            <a
              href="#students"
              className="text-white hover:text-xl transition-all"
            >
              Siswa
            </a>
            <a
              href="#contact"
              className="text-white hover:text-xl transition-all"
            >
              Kontak
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-4 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            <TextType
              text={[
                "WELCOME TO XII RPL 1",
                "TEMPAT ORANG-ORANG SIGMA",
                "ADMIN NYA LAGI SIBUKKK",
                'MASIH DALAN PENGEMBANGAN',
                'MASIH KOSONGAN WKWKWK'
              ]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.h2>
          <p className="mt-4 max-w-xl text-lg opacity-90" data-aos="fade-up">
            Sigma Boy
          </p>
          <a href="#students">
          <Button
            className="mt-6 bg-white text-neutral-950 hover:bg-gray-200"
            data-aos="fade-down"
          >
            Lihat Profil Kelas
          </Button>
          </a>
        </section>

        {/* Tentang */}
        <section
          id="about"
          className="py-16 px-8 max-w-5xl mx-auto bg-zinc-900 backdrop-blur-sm rounded-xl shadow"
          data-aos="fade-down"
        >
          <h3 className="text-white text-2xl font-bold mb-6 text-center">
              Tentang Kelas
          </h3>
          <p className="text-white text-center leading-relaxed">
            KELAS XII ERPEEL 1 TEMPAT ORANG-ORANG TERGACOR GIMANG DI STM
          </p>
        </section>

        {/* Guru */}
        <section id="teachers" className="py-16 px-8" data-aos="fade-left">
          <h3 className="text-white text-4xl font-bold mb-10 text-center">
            Guru Dan  Wali Kelas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto ">
            {[
              "Pak Bill Gates - Wali Kelas",
              "Elon Musk - Matematika",
              "Jeff Bezos - PBO",
            ].map((guru, i) => (
              <Card key={i} className="shadow hover:shadow-lg transition bg-zinc-900">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center font-bold text-xl">
                    {guru.charAt(0)}
                  </div>
                  <h4 className="mt-4 font-semibold text-white">{guru}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Galeri */}
        <section id="gallery" className="py-16 px-8">
          <h3
            className="text-white text-2xl font-bold mb-8 text-center"
            data-aos="fade-right"
          >
            Galeri Kegiatan
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
            data-aos="fade-down"
          >
            {[1, 2, 3, 4, 5, 6].map((foto) => (
              <div
                key={foto}
                className="aspect-square bg-gray-300 rounded-xl shadow"
              />
            ))}
          </div>
        </section>

        {/* Daftar Siswa */}
        <section id="students" className="py-16 px-8">
          <h3
            className="text-white text-2xl font-bold mb-8 text-center"
            data-aos="fade-down"
          >
            Daftar Siswa
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto cursor-pointer"
            data-aos="fade-up"
          >
            {[
              "Joshua",
              "Rizky",
              "Dimas",
              "Abraham",
              "Natannanel",
              "Bima",
              "Satria",
              "Fajar",
              "William",
              "Wirawan"
            ].map((nama, i) => (
              <Card key={i} className="shadow hover:shadow-lg hover:scale-125 transition-all">
                <CardContent className="p-4 text-center ">
                  <div className="w-16 h-16 mx-auto rounded-full bg-indigo-200 flex items-center justify-center font-bold">
                    {nama.charAt(0)}
                  </div>
                  <p className="mt-2 font-medium">{nama}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="0 text-white text-center py-8"
          data-aos="fade-right"
        >
          <p className="font-semibold">
            Kelas XII RPL 1 - SMK Negeri 1 Palangka Raya
          </p>
          <p>
            Jl. Tambun Bungai No.77, Langkai, Kec. Pahandut, Kota Palangka Raya,
            Kalimantan Tengah 73111
          </p>
          <p className="mt-2">© 2025 Semua Hak Dilindungi</p>
          <p>Made By <a href="https://www.instagram.com/joshuaffmax/" target="blank">Joshua Christian L</a></p>
        </footer>
      </div>
    </div>
  );
}

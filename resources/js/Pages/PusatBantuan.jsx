import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import React, { Suspense, lazy } from 'react'
import { Head } from '@inertiajs/react'; 
import SyaratKetentuan from "@/Components/PusatBantuan/SyaratKetentuan";
import Faq from "@/Components/PusatBantuan/Faq";

// Lazy load Header
const Header = lazy(() => import("@/Components/PusatBantuan/Header"));

function PusatBantuan({ faqs, sks }) {
  return (
    <>
    <Navbar />
    <Head title="Pusat Bantuan" />
    <Suspense fallback={<div>Loading...</div>}>
        <Header faqs={faqs} content={sks.content} />
    </Suspense>
    {/* <Header faqs={faqs} content={sks.content} /> */}
    {/* <Faq faqs={faqs} /> */}
    {/* <SyaratKetentuan content={sks.content} /> */}
    <Footer />
    </>
  ) 
}

export default PusatBantuan

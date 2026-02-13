import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutContent from '@/components/AboutContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Story | Chillcloud India LLP',
    description: 'Learn about Chillcloud India LLP, our artisanal manufacturing edge in Noida, and our visionary leadership.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <AboutContent />
            <Footer />
        </main>
    )
}

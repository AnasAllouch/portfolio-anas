export function Footer() {
    return (
        <footer className="py-8 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
            <div className="container mx-auto px-6">
                <p className="mb-2">&copy; {new Date().getFullYear()} Anas Allouch. All rights reserved.</p>
                <p className="text-sm">Built with Next.js, Tailwind CSS & Framer Motion</p>
            </div>
        </footer>
    );
}

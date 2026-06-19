"use client"

export default function Sidebar() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Santa Cruz", href: "/santacruz" },
        { name: "Ideas", href: "/ideas" },
        { name: "Support", href: "/support" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <aside className="bg-blue-100 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-2xl">
            <nav>
                <ul className="flex flex-wrap md:flex-col gap-2 md:gap-3">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="inline-block text-sm sm:text-base text-slate-900 hover:text-blue-700 hover:underline hover:scale-105 transition-all duration-150"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
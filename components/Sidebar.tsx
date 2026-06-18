"use client"

export default function Sidebar() {
    const links = [
        { name: "Santa Cruz", href: "/santacruz" },
        { name: "Ideas", href: "/ideas" },
        { name: "Support", href: "/support" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <aside className="bg-blue-100 p-16">
            <nav>
                <ul className="space-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="inline-block text-white hover:text-gray-300 hover:underline hover:scale-105 transition-transform duration-150"
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
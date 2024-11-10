import Link from "next/link";

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <Link href={'/'}>Home</Link>
            {children}
        </div>
    );
  }
  
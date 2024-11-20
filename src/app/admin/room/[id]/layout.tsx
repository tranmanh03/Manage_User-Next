import type { Metadata } from "next";
type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const id = (await params).id;

    return {
        title: `Room ${id}`,
    };
}

export default function RoomDatailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="flex justify-center mt-20">{children}</div>;
}

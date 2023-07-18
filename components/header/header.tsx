import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/header/navbar";

export default function Header() {
    return (
        <>
            <header className={`sidebar`}>
                <Sidebar/>
            </header>
        </>
    );
}

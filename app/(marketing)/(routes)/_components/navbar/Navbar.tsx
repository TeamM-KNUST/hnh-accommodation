import { Container } from "@/components/container"
import { Logo } from "./logo"
import { UserMenu } from "./usermenu"


export const Navbar = () => {
    return (
        <div className="fixed w-full bg-white x-10 shadow-sm z-50">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <UserMenu/>
                    </div>
                </Container>
            </div>
        </div>
    )
}
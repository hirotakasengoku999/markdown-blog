import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";

const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <HeaderMenu />
        <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

export default MainLayout
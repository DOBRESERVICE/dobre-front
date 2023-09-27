interface LayoutProps {
    children:React.ReactNode;
}
export const HomeLayout:React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <header>крутой хедер</header>
            <main>{children}</main>
            <footer>крутой футер</footer>
        </>
    );
};
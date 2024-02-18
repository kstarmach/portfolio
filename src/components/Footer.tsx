const Footer = () => {
    return (
        <footer className="bg-transparent text-center py-2 mt-auto">
            <p>&copy;{(new Date().getFullYear())} <span className="font-bold">Kamil Starmach</span></p>
        </footer>
    );
};

export default Footer;
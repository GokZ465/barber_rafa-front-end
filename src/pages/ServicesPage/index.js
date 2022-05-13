import HeaderSection from "../../components/HeaderSection";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";
import { useContext, useEffect } from "react";
import * as api from "../../services/api";
import DataContext from "../../contexts/DataContext";

export default function ServicesPage() {
    const { categoriesArray, setCategoriesArray } = useContext(DataContext);

    useEffect(() => {
        renderPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function renderPage() {
        const categories = await api.getCategories();
        setCategoriesArray(categories);
    }

    if (categoriesArray.length === 0) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <HeaderSection page={"services"} title="Serviços" />
            <ServicesSection categoriesArray={categoriesArray} />
            <Footer />
        </>
    );
}

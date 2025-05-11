import { useParams } from "react-router-dom";
import katalog from "../services/Katalog.js"

function ArtikalDetalj() {
    const { id } = useParams();

    console.log("ID iz URL-a:", id);
    console.log("Tip ID-ja:", typeof id);
    console.log("Svi ID-jevi u katalogu:", katalog.map((k) => k.id));

    console.log("Svi ID-jevi u katalogu:", katalog.map(k => k.id))

    const proizvod = katalog.find((item) => item.id === parseInt(id));

    if (!proizvod) {
        return <p className="text-white p-10">Proizvod nije pronađen.</p>;
    }

    return (
        <div className="text-white p-10">
            <h2 className="text-3xl mb-4">{proizvod.naziv}</h2>
            <img src={proizvod.slika} className="w-[300px] mb-4" />
            <p className="mb-2">Cena: {proizvod.cena},00 RSD</p>
            <p className="mb-2">Opis: {proizvod.opis}</p>
            <p className="mb-2">Boje: {proizvod.boja.join(", ")}</p>
            <p className="mb-2">Veličine: {proizvod.velicina.join(", ")}</p>
        </div>
    );
}

export default ArtikalDetalj;

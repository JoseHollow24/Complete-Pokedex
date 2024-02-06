//import PokemonInfo from "@/components/PokemonInfo";

import CardInfo from "@/components/CardInfo";

async function loadCard(id) {
    const res = await fetch (`https://api.pokemontcg.io/v2/cards?q=id:${id}`);
    const data = await res.json();
    return data;
}

export default async function SingleCardPage( { params }) {

   const singleCard = await loadCard(params.cardSingle);

    return(
        <>
            <div className="container m-auto pt-16">
                <h1 className="text-center text-3xl" >Informacion de la Carta</h1>
                <CardInfo pokemon={singleCard.data[0]}/>
            </div>
        </>
    )
}
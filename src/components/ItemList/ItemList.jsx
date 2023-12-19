import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {
    return (
        <section className="container m-auto mt-8">
            <h2 className="text-4xl font-bold text-azul-paleta text-center my-4">Libros</h2>
            <hr />
            <div className="flex flex-wrap gap-10 justify-center items-stretch">
                {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
            </div>

        </section>
    )
}

export default ItemList;



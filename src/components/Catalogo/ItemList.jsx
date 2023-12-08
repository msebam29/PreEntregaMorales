import ItemCard from "./ItemCard";


const ItemList = ({productos}) => {
    return (
        <section className="container m-auto mt-8">
            <h2 className="text-4xl font-bold text-azul-paleta">Productos</h2>
            <hr />
            <div className="flex flex-wrap gap-10 justify-center items-center">
                {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
            </div>

        </section>
    )
}

export default ItemList;



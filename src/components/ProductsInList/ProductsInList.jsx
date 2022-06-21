import styles from './ProductsInList.module.scss';

export default function ProductsInList({ products, openModal, setOpenModal }) {
	return products.length ? (
		<div
			onClick={() => setOpenModal(true)}
			className={styles.mainContainer_div}
		>
			{products.map((product, index) => {
				return (
					<div className={styles.productDetail_div} key={index}>
						<p> {product.ProductName} </p>
						<p> {product.ProductCategory} </p>
						<p> $ {product.ProductPrice} </p>
					</div>
				);
			})}
		</div>
	) : (
		<h1>No Hay Productos</h1>
	);
}

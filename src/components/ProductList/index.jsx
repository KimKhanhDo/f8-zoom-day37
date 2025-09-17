import withLoading from '@/hoc/withLoading';
import styles from './ProductList.module.scss';

function ProductList() {
    const products = ['iPhone', 'Samsung', 'Xiaomi'];

    return (
        <div className={styles.page}>
            <h3 className={styles.title}>Products</h3>
            {products.map((product) => (
                <div
                    key={product}
                    className={styles.item}
                >
                    {product}
                </div>
            ))}
        </div>
    );
}

const ProductListWithLoading = withLoading(ProductList);

export default ProductListWithLoading;

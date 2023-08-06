import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '64c4df7f35cdaf8b92aefed1';

  try {
    await mongooseConnect();

    const [featuredProduct, newProducts] = await Promise.all([
      Product.findById(featuredProductId),
      Product.find({}, null, { sort: { '_id': -1 }, limit: 10 })
    ]);

    return {
      props: {
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts))
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        featuredProduct: null,
        newProducts: []
      },
    };
  }
}

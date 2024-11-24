import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const url = `https://dummyjson.com/products/${id}`;
        const res = await axios.get(url);
        console.log(res?.data);
        setProduct(res?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <div>
      <h1 className="text-4xl text-center my-12">Details</h1>

      <div>
        {loading ? (
          <>
            <div className="my-12 text-center">Loading....</div>
          </>
        ) : (
          <>
            <div className="max-w-[1200px] mx-auto">
              <div className="block md:flex justify-between items-center">
                <div className="p-12 w-1/2">
                  <img
                    className="h-[500px] w-[500px]"
                    src={product?.images || ""}
                    alt=""
                    height={400}
                    width={400}
                  />
                </div>
                <div className="w-1/2 text-start">
                  <h1 className="text-2xl font-bold">{product?.title}</h1>

                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold my-6 text-orange-500">
                      ${product?.price}
                    </h3>
                    <h3 className="text-3xl font-bold my-6 ">
                      In Stock: {product?.stock}
                    </h3>
                  </div>
                  <p className="text-gray-600  my-6">{product?.description}</p>
                  <div className="text-center">
                    <button className="w-1/4 bg-orange-500 rounded-md py-2 font-bold text-white">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

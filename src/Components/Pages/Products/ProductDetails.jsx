import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoad] = useState(true);
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();

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

  const add_to_cart = async () => {
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/carts/user/${userId}/`,
        {
          customer_id: userId,
          title: product.title,
          quantity: 1,
          price: product.price,
          image: product.images[0],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accToken")}`,
          },
        }
      );
      navigate(`/carts`);
      toast.success("Cart updated success", { duration: 3000 });
    } catch (error) {
      toast.error("Error caught", { duration: 3000 });
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center my-8">Details</h1>

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
                    <button
                      onClick={add_to_cart}
                      className="w-1/4 bg-orange-500 rounded-md py-2 font-bold text-white"
                    >
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

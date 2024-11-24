import axios from "axios";
import { useEffect, useState } from "react";
// import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

const Products = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = limit
          ? `https://dummyjson.com/products?limit=${limit}`
          : "https://dummyjson.com/products?limit=10";
        const res = await axios.get(url);
        console.log(res?.data?.products);
        setProducts(res?.data?.products || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    fetchProducts();
  }, [limit]);

  const truncate = (str, len) => {
    if (str.length <= len) return str;
    return str.slice(0, len) + "...";
  };

  //   const path = use;

  return (
    <div className="my-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-3xl text-center">Products</span>
        </div>
      </div>

      <div>
        {loading ? (
          <>
            <p className="my-12 text-center">Loading.....</p>
          </>
        ) : (
          <>
            {products?.length === 0 ? (
              <>
                <p>No Products found</p>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12">
                  {products?.map((prod) => (
                    <div
                      key={prod?.id}
                      className="mb-6 bg-gray-50 hover:bg-gray-100 text-center mx-auto p-3"
                    >
                      <img
                        src={prod?.images}
                        alt="#"
                        className="h-64
                         w-64 rounded-md mb-3"
                      />
                      <h3>{truncate(prod?.title, 50)}</h3>
                      <div className="flex justify-between items-center py-6 mx-6">
                        <div>
                          <p>$ {prod?.price}</p>
                        </div>
                        <div>
                          <Link to={`/products/${prod?.id}`}>
                            <button className="px-4 py-3 rounded-lg bg-orange-500">
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {limit ? (
              <div className="text-end mb-12">
                <Link to="/products">
                  <span className="bg-gray-200 px-3 py-2 rounded-lg">
                    See More &rarr;
                  </span>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;

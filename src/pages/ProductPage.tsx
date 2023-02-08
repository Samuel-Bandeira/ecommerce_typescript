import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../components/Navbar";
import { FaLock } from "react-icons/fa";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
  console.log("id", id);
  const image =
    "https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UY218_.jpg";
  return (
    <div>
      <Navbar />
      <div className="flex space-x-14 p-10 border-b mb-5">
        <div>
          <img src={image} alt="book_cover" className="w-[240px] shadow-xl" />
          <button className="border rounded-lg w-full py-2 z-10 mt-2">
            Ler amostra
          </button>
        </div>
        <div className="flex-1">
          <p className="text-[30px]">
            Verity{" "}
            <span className="text-gray-500 text-[25px]">18 janeiro 2018</span>
          </p>
          <div className="flex space-x-2 leading-5 mb-2 mt-1">
            <p>por Collen Hoover</p>
          </div>
          <div className="flex items-center space-x-1 border-b pb-2">
            <div className="flex text-orange-400 ">
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  return <AiFillStar key={index} />;
                })}
            </div>
            <IoIosArrowDown size={"10px"} className="text-gray-500" />
            <p>19326 avaliações de clientes</p>
          </div>
          <div className="border w-[230px] p-2 rounded leading-5 bg-orange-200/30 border-red-400 mt-5">
            <p className="font-bold">Capa Comum</p>
            <p className="text-red-600 font-bold">R$ 31,90</p>
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            aperiam harum, sit reiciendis distinctio doloremque consectetur quos
            quis itaque culpa dolorem ex! Quas, sunt? Necessitatibus maiores eum
            nihil magni cum. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ipsam quisquam facere nulla non inventore eius natus
            consectetur molestias, quas at, saepe molestiae autem voluptatem?
            Odio alias laborum aut expedita fugit. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Odit nam recusandae voluptates, quod,
            sed eaque quasi itaque perferendis, vero voluptate culpa? Voluptates
            accusamus culpa alias quidem modi inventore expedita sit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Rerum quasi
            fugit doloribus eius aliquid perferendis reiciendis impedit animi
            corrupti. Earum dignissimos debitis labore voluptate nam doloribus
            consectetur eligendi eius omnis! lorem
          </p>
        </div>
        <div className="w-[300px] p-5 border-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p>Comprar</p>
              <p>novo:</p>
            </div>
            <p>R$ 31,90</p>
          </div>
          <div className="flex space-x-1 items-center">
            <CiLocationOn className="text-[20px]" />
            <p className="text-sm">Selecione o endereço</p>
          </div>
          <p className="font-bold">Em estoque.</p>
          <div className="flex space-x-1 items-center">
            <p>Quantidade:</p>
            <select name="" id="" className="border border-black rounded">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="space-y-2 mt-2">
            <button className="bg-yellow-400 w-full rounded-xl p-1">
              Adicionar ao carrinho
            </button>
            <button className="bg-orange-400 w-full rounded-xl p-1">
              Comprar agora
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <FaLock className="text-gray-400" />
            <p className="text-md">Transação segura</p>
          </div>
          <div className="text-sm mt-2">
            <p>
              Enviado por <span className="inline-block w-[35px]"></span>{" "}
              Amazon.com
            </p>
            <p>
              Vendindo por <span className="inline-block w-[35px]"></span>{" "}
              Amazon.com
            </p>
          </div>
          <div className="flex space-x-2 leading-5 mt-2">
            <input
              type="checkbox"
              className="border border-black rounded mb-4"
            />
            <p>Comprar esta item como presente</p>
          </div>
        </div>
      </div>
      <div className="p-10 pt-0">
        <p className="font-bold text-[24px]">Sobre o Autor</p>
        <p>
          Siga autores para obter atualizações de novos lançamentos e
          recomendações aprimoradas.
        </p>
        <div>
          <div className="flex space-x-5 mt-5">
            <div className="flex flex-col justify-center space-y-4">
              <div className="border w-[150px] h-[150px] rounded-full overflow-hidden">
                <img
                  src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                  alt="author_image"
                />
              </div>
              {/* <button className="border border-gray-400 rounded px-4 py-1">
                Seguir
              </button> */}
            </div>
            <div>
              <p className="text-teal-600 text-[25px] font-bold">C. S. Pacat</p>
              <p>
                Descubra mais livros do autor, veja autores semelhantes, leia
                blogs de autores e muito mais
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { RootState } from "../redux/store";

const AddPaymentForm = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm();

  const addCreditCard = async (data: any) => {
    const { cvv, expirationMonth, expirationYear, ...rest } = data;
    data.userId = user!.id;

    const toPost = {
      userId: user!.id,
      expiresAt: `${expirationMonth}/${expirationYear}`,
      cardNumber: data.cardNumber,
      cardName: data.cardName,
    };
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/credit-card`,
      toPost
    );

    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(addCreditCard)}>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="border p-2 rounded-t-xl bg-gray-300">
          <p>Adicionar um cartão de crédito ou débito</p>
        </div>

        <div className="flex flex-col border p-12">
          <label htmlFor="card_number">Número do cartão</label>
          <input
            type="text"
            className="border border-black"
            {...register("cardNumber")}
          />
          <label htmlFor="card_name">Nome do cartão</label>
          <input
            type="text"
            className="border border-black"
            {...register("cardName")}
          />
          <label htmlFor="expiration_date">Data de expiração</label>
          <div className="flex space-x-2 ">
            <select
              className="border border-black"
              {...register("expirationMonth")}
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
            </select>
            <select
              className="border border-black"
              {...register("expirationYear")}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <label htmlFor="cvv">Código de segurança(CVV)</label>
          <input
            type="text"
            className="border border-black"
            {...register("cvv")}
          />
          <div className="flex space-x-2">
            <Button title="Cancelar" action={() => {}} />
            <Button title="Adicionar cartão" action={() => {}} type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPaymentForm;

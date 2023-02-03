import Button from "../components/Button";

const AddPaymentForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border p-2 rounded-t-xl bg-gray-300">
        <p>Adicionar um cartão de crédito ou débito</p>
      </div>

      <div className="flex flex-col border p-12">
        <label htmlFor="card_number">Número do cartão</label>
        <input type="text" className="border border-black" />
        <label htmlFor="card_name">Nome do cartão</label>
        <input type="text" className="border border-black" />
        <label htmlFor="expiration_date">Data de expiração</label>
        <div className="flex space-x-2 ">
          <select name="expiration_month" className="border border-black">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
          </select>
          <select name="expiration_year" className="border border-black">
            <option value="01">2023</option>
            <option value="02">2022</option>
            <option value="03">2021</option>
          </select>
        </div>
        <label htmlFor="cvv">Código de segurança(CVV)</label>
        <input type="text" className="border border-black" />
        <div className="flex space-x-2">
          <Button title="Cancelar" action={() => {}} />
          <Button title="Adicionar cartão" action={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default AddPaymentForm;

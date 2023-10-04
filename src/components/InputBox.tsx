interface InputBoxProps{
    label?: string;
    amount?: number;
    selectCurrency: string;
    amountDisabled: boolean;
    currencyDisable: boolean;
    className: string;
    currencyOption: string[];
    onAmountChange: (arg1: number) => void;
    onCurrencyChange: (arg1: string) => void;

}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisable = false,
  className = "",
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) => onCurrencyChange(e.target.value)} 
        >
          {currencyOption.map((curr)=> (
            <option key={curr} value={curr}>  
            {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

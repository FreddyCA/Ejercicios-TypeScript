interface CampoTextoProps {
  label: string;
  valor: string;
  onChange: (valor: string) => void;
}

const CampoTexto: React.FC<CampoTextoProps> = ({ label, valor, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={valor} onChange={handleChange} />
    </div>
  );
};

export default CampoTexto;

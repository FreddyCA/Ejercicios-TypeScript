import React from "react";

interface CampoAreaTextoProps {
  label: string;
  valor: string;
  onChange: (valor: string) => void;
}

const CampoAreaTexto: React.FC<CampoAreaTextoProps> = ({
  label,
  valor,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e);
    onChange(e.target.value)
  };

  return (
    <div>
      <label>{label}</label>
      <textarea value={valor} onChange={handleChange} />
    </div>
  );
};

export default CampoAreaTexto;

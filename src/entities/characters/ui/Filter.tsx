import { useState } from "react";
import { Character } from "../types";

interface FilterProps {
  characters: Character[];
  setFiltredCharacters: (characters: Character[]) => void;
}

export const Filter = ({ characters, setFiltredCharacters }: FilterProps) => {
  const [dateFilter, setDateFilter] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });

  const filterCharacters = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dateFilter?.from || !dateFilter.to) {
      return alert("Заполните обе даты");
    }

    const from = Date.parse(dateFilter?.from);
    const to = Date.parse(dateFilter?.to);

    const filtred = characters.filter((character) => {
      const birthDate = Date.parse(character.dateOfBirth);

      return birthDate >= from && birthDate <= to;
    });

    setFiltredCharacters(filtred);
  };

  return (
    <form onSubmit={filterCharacters}>
      <input
        max={dateFilter?.to}
        onChange={(e) => {
          setDateFilter((prev) => ({ ...prev, from: e.target.value }));
        }}
        type="date"
        value={dateFilter?.from}
      />
      <input
        min={dateFilter?.from}
        onChange={(e) => {
          setDateFilter((prev) => ({ ...prev, to: e.target.value }));
        }}
        type="date"
        value={dateFilter?.to}
      />
      <button>Фильтровать</button>
    </form>
  );
};

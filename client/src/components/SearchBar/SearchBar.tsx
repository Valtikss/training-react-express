import { TextField } from "@mui/material";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      id="search"
      label="Rechercher un restaurant"
      variant="outlined"
      fullWidth
      sx={{ background: "#ffffff", borderRadius: 1 }}
    />
  );
};

export default SearchBar;

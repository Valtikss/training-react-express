import { Box, TextField } from "@mui/material";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box
      width={"100%"}
      sx={{ background: "#E3E3E3", borderRadius: 3 }}
      padding={2}
    >
      <TextField
        value={value}
        onChange={handleChange}
        id="search"
        label="Rechercher un restaurant"
        variant="outlined"
        fullWidth
        sx={{ background: "#ffffff", borderRadius: 1 }}
      />
    </Box>
  );
};

export default SearchBar;

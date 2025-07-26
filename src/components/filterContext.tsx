
import { createContext, useContext, useState, ReactNode } from "react"

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  MinPrice: number;
  setMinPrice: (value: number) => void;
  MaxPrice: number;
  setMaxPrice: (value: number) => void;
  Keyword: string;
  setKeyword: (value: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
  const [MinPrice, setMinPrice] = useState(0)
  const [MaxPrice, setMaxPrice] = useState(9999)
  const [Keyword, setKeyword] = useState("")

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        MinPrice,
        setMinPrice,
        MaxPrice,
        setMaxPrice,
        Keyword,
        setKeyword,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider")
  }
  return context
}

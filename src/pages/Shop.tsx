
import { useState } from "react";
import { products } from "@/data/products";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ProductCard from "@/components/shop/ProductCard";
import { Search, Filter, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 15000]);

  const filteredProducts = products.filter((product) => {
    // Filter by search term
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = category === "all" || product.category.toLowerCase() === category.toLowerCase();
    
    // Filter by price range
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes - a.likes;
    } else if (sortBy === "priceLow") {
      return a.price - b.price;
    } else if (sortBy === "priceHigh") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <PageHeader
          title="Shop Local"
          description="Support local artisans by purchasing authentic handcrafted products. Each purchase preserves cultural traditions and supports the local economy."
          bgImage="https://images.unsplash.com/photo-1588866343291-bad04c17a4a4?auto=format&fit=crop&q=80"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div className="relative flex-grow max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search products, artisans, or locations..."
                className="pl-10 bg-white/80 backdrop-blur-sm border-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="secondary" className="w-full md:w-auto">
              <ShoppingBag size={18} className="mr-2" />
              View Cart (0)
            </Button>
          </div>
        </PageHeader>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'all' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('all')}
                  >
                    All Products
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Textiles' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Textiles')}
                  >
                    Textiles & Fabrics
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Pottery' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Pottery')}
                  >
                    Pottery & Ceramics
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Painting' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Painting')}
                  >
                    Paintings & Art
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Metalwork' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Metalwork')}
                  >
                    Metalwork
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Woodwork' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Woodwork')}
                  >
                    Woodwork
                  </div>
                  <div 
                    className={`px-3 py-2 rounded-md cursor-pointer ${category === 'Sculpture' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                    onClick={() => setCategory('Sculpture')}
                  >
                    Sculptures
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[0, 15000]}
                    max={15000}
                    step={500}
                    value={priceRange}
                    onValueChange={(values) => setPriceRange(values)}
                  />
                  <div className="flex items-center justify-between">
                    <div className="bg-muted px-3 py-1 rounded text-sm">
                      ₹{priceRange[0]}
                    </div>
                    <div className="bg-muted px-3 py-1 rounded text-sm">
                      ₹{priceRange[1]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-muted-foreground">
                  Showing {sortedProducts.length} products
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter size={14} />
                      <span>Sort: {
                        sortBy === "popular" 
                          ? "Most Popular" 
                          : sortBy === "priceLow" 
                            ? "Price: Low to High" 
                            : "Price: High to Low"
                      }</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSortBy("popular")}>
                      Most Popular
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("priceLow")}>
                      Price: Low to High
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("priceHigh")}>
                      Price: High to Low
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      description={product.description}
                      price={product.price}
                      artisan={product.artisan}
                      category={product.category}
                      likes={product.likes}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button onClick={() => {
                    setSearchTerm("");
                    setCategory("all");
                    setPriceRange([0, 15000]);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

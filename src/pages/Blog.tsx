import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts, categoryColors, type BlogPost } from "@/data/blogData";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";


const categories = ["Todos", "Google Meu Negócio", "Marketing Local", "Cases e Resultados"];

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A1628]">
        <section className="py-16">
          <div className="container max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Blog IS7</h1>
            <p className="text-[#B0B0B0] mb-8">Conteúdos práticos sobre marketing digital para empresas locais.</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  maxLength={100}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-purple text-white"
                      : "bg-white/10 text-[#B0B0B0] hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "rgba(123, 47, 190, 0.1)",
                    border: "1px solid rgba(123, 47, 190, 0.3)",
                  }}
                >
                  <div className="h-44 overflow-hidden">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0A1628] to-[#7B2FBE]/30 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-heading font-bold">IS7</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-3">
                    <span className={`inline-block text-xs text-white px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <h3 className="text-white font-bold leading-snug font-heading group-hover:text-brand-purple transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#B0B0B0] text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[#B0B0B0] text-xs">{post.date}</span>
                      <span className="text-brand-purple text-sm font-medium flex items-center gap-1">
                        Ler mais <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-[#B0B0B0] py-12">Nenhum artigo encontrado.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      
    </>
  );
};

export default BlogPage;
